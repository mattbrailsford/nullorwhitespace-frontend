export default function ({ $axios }) {

    // Redirect static browser requests to data files
    if (process.browser && process.static) {
        $axios.defaults.baseURL = '/data'
        $axios.onRequest(config => {
            // console.log(config)
            let url = config.url.replace(/\/$/, "") + '.json';
            if (url === '.json') {
                url = "index.json"
            }
            config.url = url
            return config
        })
    }

    // Cache data locally
    if (process.server && process.static) {
        const mkdirp = require('mkdirp-promise')
        const { join, dirname } = require('path')
        const { writeFileSync } = require('fs')

        $axios.onResponse(async (response) => {
            let relativePath = response.request.path.replace(/\/$/, "") + '.json'
            if (relativePath === '.json') {
                relativePath = "index.json"
            }
            const path = join(process.env.dataDir, relativePath)
            console.log('Save', path)
            await mkdirp(dirname(path))
            writeFileSync(path, JSON.stringify(response.data))
            return response;
        })
    }

}