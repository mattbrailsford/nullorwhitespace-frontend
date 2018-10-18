import Vue from 'vue'

Vue.component('HomePage', () => import('@/components/page_types/HomePage.vue'))
Vue.component('BlogPage', () => import('@/components/page_types/BlogPage.vue'))
Vue.component('BlogPostPage', () => import('@/components/page_types/BlogPostPage.vue'))
Vue.component('StandardPage', () => import('@/components/page_types/StandardPage.vue'))