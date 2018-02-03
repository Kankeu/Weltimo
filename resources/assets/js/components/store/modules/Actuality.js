
const state = {
    actualities: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(dataactuality){
            let actuality = state.actualities.find(actuality => actuality && actuality.id === dataactuality.id)
            if(actuality){
                let index = state.actualities.indexOf(actuality)
                if(index>-1) state.actualities[index] = dataactuality
            } else{
                state.actualities.push(dataactuality)
            }
        })
        state.actualities.sort((actuality1,actuality2)=>actuality2.id-actuality1.id)
    },
    UPDATE(state, data) {
        let actuality = state.actualities.find((actuality)=>actuality.id === data.id)
        let index = state.actualities.indexOf(actuality)
        if(index>-1) state.actualities.splice(index,1,data)
    },
    DELETE(state, data){
        let actuality = state.actualities.find((actuality)=>actuality.id === data.id)
        let key = state.actualities.indexOf(actuality)
        state.actualities.splice(key,1)
    },
    ADDLIKE(state, {actuality,like}){
        actuality = state.actualities.find((e)=>e.id === actuality.id)
        let key = state.actualities.indexOf(actuality)
        if(!state.actualities[key].liked) state.actualities[key].likes_count++
        state.actualities[key].liked = like
    },
    DELETELIKE(state, {actuality}){
        actuality = state.actualities.find((e)=>e.id === actuality.id)
        let key = state.actualities.indexOf(actuality)
        if(state.actualities[key].liked) state.actualities[key].likes_count--
        state.actualities[key].liked = null
    },
    ADDCOMMENT(state, actuality){
        actuality = state.actualities.find((e)=>e.id === actuality.id)
        let index = state.actualities.indexOf(actuality)
        if(index>-1) state.actualities[index].comments_count++
    },
    DELETECOMMENT(state, actuality){
        actuality = state.actualities.find((e)=>e.id === actuality.id)
        let index = state.actualities.indexOf(actuality)
        if(index>-1) state.actualities[index].comments_count--
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
    addLike({commit}, data){
        commit("ADDLIKE", data)
    },
    deleteLike({commit}, data){
        commit("DELETELIKE", data)
    },
    addComment({commit}, data){
        commit("ADDCOMMENT", data)
    },
    deleteComment({commit}, data){
        commit("DELETECOMMENT", data)
    }
}

export default {namespaced:true,state,mutations,actions}