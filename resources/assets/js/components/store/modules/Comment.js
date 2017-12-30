
const state = {
    comments: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(datacomment){
            let comment = state.comments.find(comment => comment && comment.id === datacomment.id)
            if(comment){
                let key = state.comments.indexOf(comment)
                state.comments[key] = datacomment
            } else{
                state.comments.push(datacomment)
            }
        })
        state.comments.sort((comment1,comment2)=>comment1.id-comment2.id)
    },
    UPDATE(state, data) {
        let comment = state.comments.find((comment)=>comment.id === data.id)
        let key = state.comments.indexOf(comment)
        state.comments[key] = data
    },
    DELETE(state, data){
        let comment = state.comments.find((comment)=>comment.id === data.id)
        let key = state.comments.indexOf(comment)
        state.comments.splice(key,1)
    },
    ADDLIKE(state, {comment,like}){
        comment = state.comments.find((e)=>e.id === comment.id)
        let key = state.comments.indexOf(comment)
        if(!state.comments[key].liked) state.comments[key].likes_count++
        state.comments[key].liked = like
    },
    DELETELIKE(state, {comment}){
        comment = state.comments.find((e)=>e.id === comment.id)
        let key = state.comments.indexOf(comment)
        state.comments[key].likes_count--
        state.comments[key].liked = null
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
    }
}


export default {namespaced:true,state,mutations,actions}