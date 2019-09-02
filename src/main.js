// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:800|IBM+Plex+Sans:400,600,800'
  })

  head.script.push({
    src: 'https://cdn.polyfill.io/v2/polyfill.min.js'
  })

  head.htmlAttrs = { class: 'doc' }
  head.bodyAttrs = { class: 'doc' }

  // head.link.push({
  //   rel: 'icon', 
  //   type: 'image/x-icon', 
  //   href: '/favicon.ico'
  // })

  // head.meta.push({
  //   charset: 'utf-8'
  // })

  // head.meta.push({
  //   name: 'viewport', 
  //   content: 'width=device-width, initial-scale=1'
  // })

  Vue.component('Layout', DefaultLayout)
}
