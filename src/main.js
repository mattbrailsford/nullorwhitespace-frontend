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

  Vue.component('Layout', DefaultLayout)
}
