export const actions = {
    async nuxtServerInit({ dispatch }) {
        dispatch('site/loadSiteModel');
    }
}