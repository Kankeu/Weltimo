
const state = {
    followers: []
}

const mutations = {
    SAVE(state, data){
        state.followers.push(...data)
    },
    DELETE(state, data){
        let follower = state.followers.find((follower)=>follower.id === data.id)
        let key = state.followers.indexOf(follower)
        delete state.followers[key]
    },
    FOLLOW(state, {id,follower}){
        let follower = state.followers.find(follower=>follower.user.id===id)
        follower.follower = follower
    },
    UNFOLLOW(state, id){
        let follower = state.followers.find(follower=>follower.id===id)
        follower.follower = null
    },
}

const actions = {
    save({commit}, data){
        if(!Array.isArray(data)){
            data = [data]
        }
        commit("SAVE",data)
    },
    delete({commit}, data){
        commit("DELETE", data)
    },
}


export default {namespaced:true,state,mutations,actions}