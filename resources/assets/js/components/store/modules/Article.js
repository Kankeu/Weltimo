
const state = {
    articles: []
}

const mutations = {
    SAVE(state, data){
        state.articles.push(...data)
    },
    UPDATE(state, data) {
        let article = state.articles.find((article)=>article.id === data.id)
        let key = state.articles.indexOf(article)
        state.articles[key] = data
    },
    DELETE(state, data){
        let article = state.articles.find((article)=>article.id === data.id)
        let key = state.articles.indexOf(article)
        delete state.articles[key]
    },
    ADDLIKE(state, {article,like}){
        article = state.articles.find((e)=>e.id === article.id)
        let key = state.articles.indexOf(article)
        if(!state.articles[key].liked) state.articles[key].likes_count++
        state.articles[key].liked = like
    },
    DELETELIKE(state, {article}){
        article = state.articles.find((e)=>e.id === article.id)
        let key = state.articles.indexOf(article)
        state.articles[key].likes_count--
        state.articles[key].liked = null
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