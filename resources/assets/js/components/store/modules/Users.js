const state = {
    users: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(dataUser){
            let user = state.users.find(user => user && user.id === dataUser.id)
            if(user){
                let index = state.users.indexOf(user)
                if(index>-1) state.users.splice(index,1,dataUser)
            } else{
                state.users.push(dataUser)
            }
        })
    },
    UPDATE(state, data) {
        let user = state.users.find((user)=>user.id === data.id)
        let index = state.users.indexOf(user)
        if(index>-1) state.users.splice(index,1,data)
    },
    DELETE(state, data){
        let user = state.users.find((user)=>user.id === data.id)
        let index = state.users.indexOf(user)
        if(index!==-1) state.users.splice(index,1)
    },
    REMOVEFOLLOWING(state,data){
        let user = state.users.find(user=>user.id===data.id)
        let index = state.users.indexOf(user)
        user.following_count--
        if(index>-1) state.users.splice(index,1,user)
    },
    REMOVEFOLLOWER(state, data){
        let user = state.users.find(user=>user.id===data.id)
        let index = state.users.indexOf(user)
        user.followers_count--
        if(index>-1) state.users.splice(index,1,user)
    },
    ADDFOLLOWING(state, data){
        let user = state.users.find(user=>user.id===data.id)
        let index = state.users.indexOf(user)
        user.following_count++
        if(index>-1) state.users.splice(index,1,user)
    }
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
    removeFollower({commit},data){
        commit("REMOVEFOLLOWER",data)
    },
    removeFollowing({commit},data){
        commit("REMOVEFOLLOWING", data)
    },
    addFollowing({commit},data){
        commit("ADDFOLLOWING", data)
    }
}


export default {namespaced:true,state,mutations,actions}