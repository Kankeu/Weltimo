
const state = {
    user: null,
    msgFlash: false
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
    ADD_MSGFLASH(state, msg){
        state.msgFlash = msg
    }
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
    add_msgflash({commit}, msg){
        commit("ADD_MSGFLASH", msg)
    }
}

export default {namespaced:true,state,mutations,actions}