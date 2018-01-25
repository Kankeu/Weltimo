
const state = {
    articles: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(dataArticle){
            let article = state.articles.find(article => article && article.id === dataArticle.id)
            if(article){
                let index = state.articles.indexOf(article)
                if(index>-1) state.articles[index] = dataArticle
            } else{
                state.articles.push(dataArticle)
            }
        })
        state.articles.sort((article1,article2)=>article2.id-article1.id)
    },
    UPDATE(state, data) {
        let article = state.articles.find((article)=>article.id === data.id)
        let index = state.articles.indexOf(article)
        if(index>-1) state.articles.splice(index,1,data)
    },
    DELETE(state, data){
        let article = state.articles.find((article)=>article.id === data.id)
        let key = state.articles.indexOf(article)
        state.articles.splice(key,1)
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
        if(state.articles[key].liked) state.articles[key].likes_count--
        state.articles[key].liked = null
    },
    ADDCOMMENT(state, article){
        article = state.articles.find((e)=>e.id === article.id)
        let index = state.articles.indexOf(article)
        if(index>-1) state.articles[index].comments_count++
    },
    DELETECOMMENT(state, article){
        article = state.articles.find((e)=>e.id === article.id)
        let index = state.articles.indexOf(article)
        if(index>-1) state.articles[index].comments_count--
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