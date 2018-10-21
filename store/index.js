export const actions = {
    // ISSUE https://github.com/nuxt/nuxt.js/issues/3935
    // This executes once per page request during generate
    async nuxtServerInit({ dispatch }) {
        await dispatch('site/ensureSiteModel');
    }
}