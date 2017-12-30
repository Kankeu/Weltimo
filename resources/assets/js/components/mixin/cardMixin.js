export default {
    props:{
        article: Object
    },
	data: ()=>({
		subscribed: false,
        openDialogComment:false,
		emoticons: [{
			"emocion": "amo",
			"TextoEmocion": "Love",
            "type": 8
			}, {
            "emocion": "gusta",
            "TextoEmocion": "Like",
            "type": 7
            }, {
            "emocion": "divierte",
            "TextoEmocion": "Haha",
            "type": 6
            }, {
            "emocion": "asombro",
            "TextoEmocion": "Wow",
            "type": 5
            },{
            "emocion": "alegre",
            "TextoEmocion": "Glad",
            "type": 4
            },{
			"emocion": "asusta",
			"TextoEmocion": "Bother",
            "type": 3
			},{
			"emocion": "triste",
			"TextoEmocion": "Sad",
            "type": 2
			}, {
            "emocion": "molesto",
            "TextoEmocion": "Angry",
            "type": 1
        }].reverse(),
	}),
    computed:{
        user(){
            return this.$store.state.user.user
        },
        owner(){
            return this.$store.state.users.users.find(user=>user.id===this.article.user_id)
        },
        darked(){
            return this.$store.state.setting.darked
        },
        facemotion(){
            return this.article.liked ? this.emoticons.find(e=>e.type===this.article.liked.type).emocion : null
        },
        text(){
            return this.article.liked ? this.emoticons.find(e=>e.type===this.article.liked.type).TextoEmocion : null
        }
    },
    mounted(){
        document.querySelector('.faceMocion').parentNode.setAttribute("menu","like")
    },
    methods:{
        like(event,name){
            let facemotion = (name) ? name : event.target.className
            let emoticon = this.emoticons.find(e=>e.emocion===facemotion)
            if(emoticon){
                this.$http.get('user/article/'+this.article.id+'/like/'+emoticon.type).then(response=>{
                    if(response.body.id){
                        this.$store.dispatch('article/addLike',{article:this.article,like:response.body})
                    }
                })
            }
        },
        deleteLike(){
            this.$http.delete('user/article/'+this.article.id+'/like').then(response=>{
                if(response.body.status === 1){
                    this.$store.dispatch('article/deleteLike',{article:this.article})
                }
            })
        },
        follow(user){
            this.$set(user, "loadingSubs",true)
            if(user.followed){
                this.$http.delete("user/subscription/"+ user.followed.id).then(response=>{
                    if(response.body.status === 1){
                        this.$set(user, "loadingSubs",false)
                        this.$set(user, "followed",null)
                        //this.$store.dispatch('users/unfollow', user.id)
                    }
                })
            }else{
                this.$http.post('user/subscription',{receiver_id:user.id}).then(response=>{
                    if(response.body.id){
                        this.$set(user, "followed",response.body)
                        //this.$store.dispatch('users/follow', {id:user.id,followed:response.body})
                        this.$set(user, "loadingSubs",false)
                    }
                })
            }
        },
        masquer(){
            this.$store.dispatch("article/delete",{id:this.article.id})
        },
        destroy(){
            this.$http.delete('user/article/'+this.article.id).then(response=>{
                if(response.body.status === 1){
                    this.$store.dispatch('article/delete', this.article)
                }
            })
        }
    },
}