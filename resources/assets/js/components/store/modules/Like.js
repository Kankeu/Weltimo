const state = {
    likes: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(dataLike){
            let user = state.likes.find(like => like && like.id === dataLike.id)
            if(user){
                let index = state.likes.indexOf(user)
                if(index>-1) state.likes.splice(index,1,dataLike)
            } else{
                state.likes.push(dataLike)
            }
        })
    },
    DELETE(state, data){
        let like = state.likes.find((like)=>like.id === data.id)
        let index = state.likes.indexOf(like)
        if(index>-1) state.likes.splice(index,1)
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