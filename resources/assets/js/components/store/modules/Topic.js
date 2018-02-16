const state = {
    topics: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(datatopic){
            let topic = state.topics.find(topic => topic && topic.id === datatopic.id)
            if(topic){
                let index = state.topics.indexOf(topic)
                if(index>-1) state.topics[index] = datatopic
            } else{
                state.topics.push(datatopic)
            }
        })
        //state.topics.sort((topic1,topic2)=>topic2.topicresponses_count-topic1.topicresponses_count)
    },
    UPDATE(state, data) {
        let topic = state.topics.find((topic)=>topic.id === data.id)
        let index = state.topics.indexOf(topic)
        if(index>-1) state.topics.splice(index,1,data)
    },
    DELETE(state, data){
        let topic = state.topics.find((topic)=>topic.id === data.id)
        let key = state.topics.indexOf(topic)
        state.topics.splice(key,1)
    },
    ADDLIKE(state, {topic,like}){
        topic = state.topics.find((e)=>e.id === topic.id)
        let key = state.topics.indexOf(topic)
        if(!state.topics[key].liked) state.topics[key].likes_count++
        state.topics[key].liked = like
    },
    DELETELIKE(state, {topic}){
        topic = state.topics.find((e)=>e.id === topic.id)
        let key = state.topics.indexOf(topic)
        if(state.topics[key].liked) state.topics[key].likes_count--
        state.topics[key].liked = null
    },
    c(state, topic){
        topic = state.topics.find((e)=>e.id === topic.id)
        let index = state.topics.indexOf(topic)
        if(index>-1) state.topics[index].comments_count++
    },
    DELETERESPONSE(state, topic){
        topic = state.topics.find((e)=>e.id === topic.id)
        let index = state.topics.indexOf(topic)
        if(index>-1) state.topics[index].comments_count--
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
    addResponse({commit}, data){
        commit("DELETERESPONSE", data)
    },
    deleteResponse({commit}, data){
        commit("DELETERESPONSE", data)
    }
}

export default {namespaced:true,state,mutations,actions}