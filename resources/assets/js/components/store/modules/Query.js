
const state = {
    queries: []
}

const mutations = {
    SAVE(state, data){
        state.queries.push(data)
    },
    UPDATE(state, data) {
        let query = state.queries.find((query)=>query.name === data.name)
        let key = state.queries.indexOf(query)
        state.queries[key] = data
    },
    DELETE(state, data){
        let query = state.queries.find((query)=>query.name === data.name)
        let key = state.queries.indexOf(query)
        delete state.queries[key]
    },
}

const actions = {
    save({commit}, data){
        commit("SAVE",data)
    },
    update({commit}, data) {
        commit("UPDATE",data)
    },
    delete({commit}, data){
        commit("DELETE", data)
    },
}


export default {namespaced:true,state,mutations,actions}