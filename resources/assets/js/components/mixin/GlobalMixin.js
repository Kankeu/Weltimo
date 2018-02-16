export default {
    methods:{
        plural(word, number){
            return (number>1) ? word+"s" : word
        },
        urlArticle(id,user_id){
            return window.location.origin+'/#/profile/'+user_id+'/article/'+id
        },
        urlTopic(id){
            return window.location.origin+'/#/forum/topic/'+id
        },
        urlTopicResponse(id,response_id){
           return window.location.origin+'/#/forum/topic/'+id+'/response/'+response_id
        }
    }
}