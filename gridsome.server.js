const axios = require('axios')

const axiosConfig = {
  baseURL: 'https://nullorwhite-space.s1.umbraco.io/',
  debug: false
}

module.exports = function (api) {

  const toUpperFirst = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  const loadNodeRecursive = async (store, axios, sitemapNode, parentPath, parentNode) => {

    // Construct request path
    var path = (parentPath || '') + '/' + sitemapNode.slug;
    if (path.indexOf('//') == 0) path = path.substr(1);

    // Fetch the node
    console.log("Requesting path: " + path);
    const { data } = await axios.get(path);

    // Extract node info
    const nodeData = data;
    const nodeId = `${nodeData.id}`;
    const nodeType = toUpperFirst(nodeData.type);

    // Get or create node content type collection
    let collection = store.getContentType(nodeType);
    if (!collection) {
      collection = store.addContentType(nodeType);
    }

    // Add parent relationship
    if (parentNode && parentNode.id) {
      nodeData.parent = store.createReference(parentNode);
    }

    // Store the node
    let node = collection.addNode({
      ...nodeData,
      id: nodeId,
      path: path,
    });

    // Process children
    if (sitemapNode.children.length > 0) {
      return await asyncForEach(sitemapNode.children, async n => {
        await loadNodeRecursive(store, axios, n, path, node);
      });
    }
  }

  api.loadSource(async (store) => {

    let a = axios.create(axiosConfig);

    // Grab site info
    let { data : siteData } = await a.get('init');
    let collection = store.addContentType('SiteData');
    collection.addNode({
      ...siteData,
      id: "-1",
      path: "/"
    });

    // Grab the sitemap and start processing
    let { data } = await a.get('sitemap');
    await loadNodeRecursive(store, a, data.root);

  });
}
