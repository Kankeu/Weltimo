const state = {
    topicresponses: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(datatopic){
            let topicresponse = state.topicresponses.find(topicresponse => topicresponse && topicresponse.id === datatopic.id)
            if(topicresponse){
                let index = state.topicresponses.indexOf(topicresponse)
                if(index>-1) state.topicresponses[index] = datatopic
            } else{
                state.topicresponses.push(datatopic)
            }
        })
        state.topicresponses.sort((topic1,topic2)=>topic1.id-topic2.id)
    },
    UPDATE(state, data) {
        let topicresponse = state.topicresponses.find((topicresponse)=>topicresponse.id === data.id)
        let index = state.topicresponses.indexOf(topicresponse)
        if(index>-1) state.topicresponses.splice(index,1,data)
    },
    DELETE(state, data){
        let topicresponse = state.topicresponses.find((topicresponse)=>topicresponse.id === data.id)
        let key = state.topicresponses.indexOf(topicresponse)
        state.topicresponses.splice(key,1)
    },
    ADDLIKE(state, {topicresponse,like}){
        topicresponse = state.topicresponses.find((e)=>e.id === topicresponse.id)
        let key = state.topicresponses.indexOf(topicresponse)
        if(!state.topicresponses[key].liked) state.topicresponses[key].likes_count++
        state.topicresponses[key].liked = like
    },
    DELETELIKE(state, {topicresponse}){
        topicresponse = state.topicresponses.find((e)=>e.id === topicresponse.id)
        let key = state.topicresponses.indexOf(topicresponse)
        if(state.topicresponses[key].liked) state.topicresponses[key].likes_count--
        state.topicresponses[key].liked = null
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
    addLike({commit}, data){
        commit("ADDLIKE", data)
    },
    deleteLike({commit}, data){
        commit("DELETELIKE", data)
    },
}

export default {namespaced:true,state,mutations,actions}