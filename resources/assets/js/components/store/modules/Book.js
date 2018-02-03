const state = {
    books: []
}

const mutations = {
    SAVE(state, data){
        data.map(function(dataArticle){
            let book = state.books.find(book => book && book.id === dataArticle.id)
            if(book){
                let index = state.books.indexOf(book)
                if(index>-1) state.books[index] = dataArticle
            } else{
                state.books.push(dataArticle)
            }
        })
        state.books.sort((book1,book2)=>book2.id-book1.id)
    },
    UPDATE(state, data) {
        let book = state.books.find((book)=>book.id === data.id)
        let index = state.books.indexOf(book)
        if(index>-1) state.books.splice(index,1,data)
    },
    DELETE(state, data){
        let book = state.books.find((book)=>book.id === data.id)
        let key = state.books.indexOf(book)
        state.books.splice(key,1)
    },
    ADDCOMMENT(state, book){
        book = state.books.find((e)=>e.id === book.id)
        let index = state.books.indexOf(book)
        if(index>-1) state.books[index].comments_count++
    },
    DELETECOMMENT(state, book){
        book = state.books.find((e)=>e.id === book.id)
        let index = state.books.indexOf(book)
        if(index>-1) state.books[index].comments_count--
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
    addComment({commit}, data){
        commit("ADDCOMMENT", data)
    },
    deleteComment({commit}, data){
        commit("DELETECOMMENT", data)
    }
}

export default {namespaced:true,state,mutations,actions}