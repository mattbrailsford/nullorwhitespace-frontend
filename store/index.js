export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('site/ensureSiteModel');
    }
}