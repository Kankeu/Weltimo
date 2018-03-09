const state = {
    discussionstates: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(datadiscussionstate){
            let discussionstate = state.discussionstates.find(discussionstate => discussionstate && discussionstate.id === datadiscussionstate.id)
            if(discussionstate){
                let index = state.discussionstates.indexOf(discussionstate)
                if(index>-1) state.discussionstates.splice(index,1,datadiscussionstate)
            } else{
                state.discussionstates.push(datadiscussionstate)
            }
        })
    },
    UPDATE(state, data) {
        let discussionstate = state.discussionstates.find((discussionstate)=>discussionstate.id === data.id)
        let index = state.discussionstates.indexOf(discussionstate)
        if(index>-1) state.discussionstates.splice(index,1,data)
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
}

export default {namespaced:true,state,mutations,actions}