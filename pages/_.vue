<template>
  <component v-if="page && page.type" 
    :key="page.id"
    :is="page.type" 
    :page="page"></component>
</template>

<script>
export default {
  async fetch({ store, route, payload, isDev }) {
    if (process.server || isDev) {
      if (payload) {
        store.dispatch('pages/setPageModel', { url: route.path, model: payload });
      } else {
        await store.dispatch('pages/loadPageModel', route.path);
      }
    }
  },
  computed: {
    page: function () {
      return this.$store.getters['pages/getPageModel'](this.$route.path)
    }
  },
  head() {
    return {
      title: this.page.metaTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.page.metaDescription },
        { hid: 'keywords', name: 'keywords', content: this.page.metaKeywords }
      ]
    }
  }
}
</script>
