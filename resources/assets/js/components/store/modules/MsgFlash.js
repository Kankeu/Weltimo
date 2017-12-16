
const state = {
    msgFlash: false
}

const mutations = {
    SAVE(state, msg){
        state.msgFlash = msg
    },
    DELETE(state){
        state.msgFlash = false
    }
}

const actions = {
    save({commit}, msg){
        commit("SAVE", msg)
    },
    delete({commit}){
        commit("DELETE")
    }
}


export default {namespaced:true,state,mutations,actions}