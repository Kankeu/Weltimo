const state = {
    messages: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(datamessage){
            let message = state.messages.find(message => message && message.id === datamessage.id)
            if(message){
                let index = state.messages.indexOf(message)
                if(index>-1) state.messages.splice(index,1,datamessage)
            } else{
                state.messages.push(datamessage)
            }
        })
        state.messages.sort((message1,message2)=>message1.id-message2.id)
    },
    UPDATE(state, data) {
        let message = state.messages.find((message)=>message.id === data.id)
        let index = state.messages.indexOf(message)
        if(index>-1) state.messages.splice(index,1,data)
    },
    DELETE(state, data){
        let message = state.messages.find((message)=>message.id === data.id)
        let key = state.messages.indexOf(message)
        state.messages.splice(key,1)
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