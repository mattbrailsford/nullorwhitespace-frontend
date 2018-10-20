export const state = () => ({
    siteModel: {}
})
  
export const mutations = {
    setSiteModel: (state, { model }) => state.siteModel = model
}

export const getters = {
    getSiteModel: (state) => state.siteModel
}

export const actions = {
    async loadSiteModel({ commit }) {
        let res = await this.$axios.get('/init/');
        if (res && res.data){
            commit('setSiteModel', { model: res.data })
        }
    }
}