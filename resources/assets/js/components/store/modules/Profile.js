
const state = {
    profiles: []
}

const mutations = {
    SAVE(state, data){
        state.profiles.push(...data)
    },
    UPDATE(state, data) {
        let profile = state.profiles.find((profile)=>profile.id === data.id)
        let key = state.profiles.indexOf(profile)
        state.profiles[key] = data
    },
    DELETE(state, data){
        let profile = state.profiles.find((profile)=>profile.id === data.id)
        let key = state.profiles.indexOf(profile)
        delete state.profiles[key]
    },
}

const actions = {
    save({commit}, data){
        if(!Array.isArray(data)){
            data = [data]
        }
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