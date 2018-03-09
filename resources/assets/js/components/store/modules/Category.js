const state = {
    categories: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(dataCategory){
            let user = state.categories.find(category => category && category.id === dataCategory.id)
            if(user){
                let index = state.categories.indexOf(user)
                if(index>-1) state.categories.splice(index,1,dataCategory)
            } else{
                state.categories.push(dataCategory)
            }
        })
    },
    DELETE(state, data){
        let category = state.categories.find((category)=>category.id === data.id)
        let index = state.categories.indexOf(category)
        if(index>-1) state.categories.splice(index,1)
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