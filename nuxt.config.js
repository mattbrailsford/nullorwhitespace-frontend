const pkg = require('./package')
const axios = require('axios')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

const axiosConfig = {
  // See https://github.com/nuxt-community/axios-module#options
  baseURL: 'https://nullorwhitespace.s1.umbraco.io/',
  //baseURL: 'http://localhost:62301/',
  //debug: true
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:800|IBM+Plex+Sans:400,600,800' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' }
    ],
    htmlAttrs: {
      class: 'doc'
    },
    bodyAttrs: {
      class: 'doc'
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#26de81' },

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
  axios: axiosConfig,

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
    routes (callback) {

      let routes = [];

      let a = axios.create(axiosConfig);
      a.get('routes/').then(resp => {

        resp.data.routes.forEach(route => {
          routes.push(route);
        });

        callback(null, routes);

      }).catch(callback)

    }
  }
}

if (process.env.NODE_ENV === 'production') {
  config.build.postcss.push(require('@fullhuman/postcss-purgecss')({
    content: ['./**/*.vue'],
    whitelist: ['doc'],
    whitelistPatterns: ['twitter','umbraco','github','linkedin'],
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