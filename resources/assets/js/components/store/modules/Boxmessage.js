
const state = {
    boxmessages: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(databoxmessage){
            let boxmessage = state.boxmessages.find(boxmessage => boxmessage && boxmessage.id === databoxmessage.id)
            if(boxmessage){
                let index = state.boxmessages.indexOf(boxmessage)
                if(index>-1) state.boxmessages[index] = databoxmessage
            } else{
                state.boxmessages.push(databoxmessage)
            }
        })
        state.boxmessages.sort((boxmessage1,boxmessage2)=>boxmessage2.id-boxmessage1.id)
    },
    UPDATE(state, data) {
        let boxmessage = state.boxmessages.find((boxmessage)=>boxmessage.id === data.id)
        let index = state.boxmessages.indexOf(boxmessage)
        if(index>-1) state.boxmessages.splice(index,1,data)
    },
    DELETE(state, data){
        let boxmessage = state.boxmessages.find((boxmessage)=>boxmessage.id === data.id)
        let key = state.boxmessages.indexOf(boxmessage)
        state.boxmessages.splice(key,1)
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