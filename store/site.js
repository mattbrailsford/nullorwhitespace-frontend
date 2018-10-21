export const state = () => ({
    siteModel: false
})
  
export const mutations = {
    setSiteModel: (state, { model }) =>  state.siteModel = model
}

export const getters = {
    getSiteModel: (state) => state.siteModel
}

export const actions = {
    async ensureSiteModel({ state, commit }) {
        if (!state.siteModel) {
            let res = await this.$axios.get('/init/', { cache: true })
            if (res && res.data){
                commit('setSiteModel', { model: res.data })
            }
        }
    }
}