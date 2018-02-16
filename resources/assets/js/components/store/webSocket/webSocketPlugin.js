export default function webSocketPlugin () {
    return store => {
        store.subscribe(mutation => {
            if (mutation.type === 'user/SAVE') {
                if(parseInt(store.state.user.user.confirmated) === 1){
                    Echo.private('article.user.'+store.state.user.user.id)
                        .listen('ArticleCreatedEvent',function (event) {
                            event.message = `${event.article.user.name} ${event.article.user.forename} has just posted a new article!`
                            event.isNewsletter = true
                            event.id = Math.random()
                            let user = event.article.user
                            delete event.article.user
                            event.user = user
                            store.dispatch('article/save', event.article)
                            store.dispatch('setting/addNotification', event)
                            store.dispatch('users/save', user)
                        })
                    Echo.private('comment.articleOwner.'+store.state.user.user.id)
                        .listen('CommentCreatedEvent',function (event) {
                            event.message = `${event.comment.user.name} ${event.comment.user.forename} commented on your publication!`
                            event.isNewsletter = true
                            event.id = Math.random()
                            store.dispatch('setting/addNotification', event)
                            let user = event.comment.user
                            delete event.comment.user
                            event.user = user
                            store.dispatch('comment/save', event.comment)
                            store.dispatch('comment/scrollTo',event.comment.id)
                            store.dispatch('users/save', user)
                            store.dispatch('article/addComment',{id:event.comment.article_id})
                        })
                    Echo.private('comment.commentOwner.'+store.state.user.user.id)
                        .listen('CommentCreatedEvent',function (event) {
                            event.message = `${event.comment.user.name} ${event.comment.user.forename} replied to your comment!`
                            event.isNewsletter = true
                            event.id = Math.random()
                            store.dispatch('setting/addNotification', event)
                            let user = event.comment.user
                            delete event.comment.user
                            event.user = user
                            let replyedUser = event.comment.replyed_user
                            delete event.comment.replyed_user
                            store.dispatch('comment/save', event.comment)
                            store.dispatch('comment/scrollTo',event.comment.id)
                            store.dispatch('users/save', user)
                            store.dispatch('users/save', replyedUser)
                            store.dispatch('article/addComment',{id:event.comment.article_id})
                        })
                    Echo.join(`user.online.21`)
                        .here((users) => {
                        console.log('here',users)
                            users.map(user=>user.online=true)
                            store.dispatch('users/save',users)
                        })
                        .joining((user) => {
                            console.log('joining',user)
                            user.online= true
                            store.dispatch('users/save',user)
                        })
                        .leaving((user) => {
                            console.log('leaving',user)
                            store.dispatch('users/delete',user)
                        })
                        .listen('UserOnlineEvent',(e)=>console.log('listen',e))
                }
            }
        })
    }
}