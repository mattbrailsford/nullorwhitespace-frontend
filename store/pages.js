export const state = () => ({
    pageModels: {}
})
  
export const mutations = {
    setPageModel (state, { url, model }) {
        state.pageModels[url] = model;
    }
}

export const getters = {
    getPageModel: state => (url) => state.pageModels.hasOwnProperty(url)
        ? state.pageModels[url]
        : null
}

export const actions = {
    async loadPageModel({ commit }, url) {
        let res = await this.$axios.get(url);
        if (res && res.data){
            commit('setPageModel', { url, model: res.data })
        }
    },
    setPageModel({ commit }, { url, model }) {
        commit('setPageModel', { url, model })
    }
}