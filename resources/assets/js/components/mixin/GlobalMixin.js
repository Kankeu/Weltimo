export default {
    methods:{
        plural(word, number){
            return (number>1) ? word+"s" : word
        },
        urlArticle(id,user_id){
            return window.location.origin+'/#/user/profile/'+user_id+'/article/'+id
        }
    }
}