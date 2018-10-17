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
  }))
  config.build.postcss.push(require('cssnano'))
}

module.exports = config;