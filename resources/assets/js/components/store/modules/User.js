
const state = {
    user: null
}

const mutations = {
    SAVE(state, data){
        state.user = data
    },
    UPDATE(state, data) {
        Object.keys(data).map((key)=>state.user[key] = data[key])
    },
    DELETE(state){
        delete state.user
    },
}

const actions = {
    save({commit}, data){
        commit("SAVE",data)
    },
    update({commit}, data) {
        commit("UPDATE",data)
    },
    delete({commit}){
        commit("DELETE")
    },
}

export default {namespaced:true,state,mutations,actions}