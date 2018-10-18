const pkg = require('./package')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

const config = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:800|Roboto:400,600,800' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/components'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://nullorwhitespace.s1.umbraco.io/',
    //debug: true
  },

  /*
  ** Build configuration
  */
  build: {

    postcss: [
      require('postcss-import'),
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')
    ],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  /*
  ** Generate configuration
  */
  generate: {
    // routes (callback) {

    //   let routes = [];

    //   let umbraco = UmbracoHeadless.createClient();
    //   umbraco.query('/root//*[@isDoc]', 'XPath').getAll().then(resp => {

    //     resp.results.forEach(node => {
    //       routes.push({
    //         route: node.url,
    //         payload: node
    //       })
    //     });

    //     callback(null, routes);

    //   }).catch(callback)

    // }
  }
}

if (process.env.NODE_ENV === 'production') {
  config.build.postcss.push(require('@fullhuman/postcss-purgecss')({
    content: ['./**/*.vue'],
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html', 'js', 'vue']
      }
    ]
  }),
  require('cssnano'))
}

module.exports = config;