export const state = () => ({
    siteModelInited: false,
    siteModel: {}
})
  
export const mutations = {
    setSiteModel (state, { model }) {
       state.siteModel = model
       state.siteModelInited = true
    }
}

export const getters = {
    getSiteModel: (state) => state.siteModel
}

export const actions = {
    async ensureSiteModel({ state, commit }) {
        if (state.siteModelInited === false) {
            let res = await this.$axios.get('/init/');
            if (res && res.data){
                commit('setSiteModel', { model: res.data })
            }
        }
    }
}