
const state = {
    darked: false,
    loading: false
}

const mutations = {
    INVERTCOLOR(state){
        state.darked = !state.darked
    },
    SETLOADING(state, data){
        state.loading = data
    }
}

const actions = {
    invertcolor({commit}){
        commit("INVERTCOLOR")
    },
    setLoading({commit},data){
        commit("SETLOADING", data)
    }
}

export default {namespaced:true,state, mutations, actions}