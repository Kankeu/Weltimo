export default {
    props:{
        actuality: Object
    },
    data: ()=>({
        subscribed: false,
        openDialogComment:false,
        actualityDelete: false,
        loading: false,
        userPopover: false,
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
            return this.$store.state.users.users.find(user=>user.id===this.actuality.user_id)
        },
        darked(){
            return this.$store.state.setting.darked
        },
        facemotion(){
            return this.actuality.liked ? this.emoticons.find(e=>e.type===this.actuality.liked.type).emocion : null
        },
        text(){
            return this.actuality.liked ? this.emoticons.find(e=>e.type===this.actuality.liked.type).TextoEmocion : null
        }
    },
    mounted(){
        document.querySelector('.faceMocion').parentNode.setAttribute("menu","like")
    },
    methods:{
        like(event,name){
            let facemotion = (name) ? name : event.target.className
            let emoticon = this.emoticons.find(e=>e.emocion===facemotion)
            if(emoticon && !this.actuality.liked){
                this.$http.get('user/actuality/'+this.actuality.id+'/like/'+emoticon.type).then(response=>{
                    if(response.body.id){
                        this.$store.dispatch("like/save", response.body)
                        this.$store.dispatch('actuality/addLike',{actuality:this.actuality,like:response.body})
                    }
                })
            }
        },
        deleteLike(){
            if(this.actuality.liked.id){
                this.$http.delete('user/actuality/'+this.actuality.id+'/like').then(response=>{
                    if(response.body.status === 1){
                        this.$store.dispatch("like/delete", this.actuality.liked)
                        this.$store.dispatch('actuality/deleteLike',{actuality:this.actuality})
                    }
                })
            }
        },
        follow(user){
            this.$set(user, "loadingSubs",true)
            if(user.followed){
                this.$http.get("user/unfollow/"+ user.id).then(response=>{
                    if(response.body.status === 1){
                        this.$set(user, "loadingSubs",false)
                        this.$set(user, "followed",null)
                        user.followers_count++
                    }
                })
            }else{
                this.$http.post('user/subscription',{receiver_id:user.id}).then(response=>{
                    if(response.body.id){
                        this.$set(user, "followed",response.body)
                        user.followers_count--
                        this.$set(user, "loadingSubs",false)
                    }
                })
            }
        },
        masquer(){
            this.$store.dispatch("actuality/delete",{id:this.actuality.id})
        },
        destroy(){
            this.loading = true
            this.$http.delete('user/actuality/'+this.actuality.id).then(response=>{
                if(response.body.status === 1){
                    this.$store.dispatch('actuality/delete', this.actuality)
                    this.actualityDelete = false
                    this.loading = false
                }
            })
        },
        copie(){
            let textarea = document.querySelector("#textareaClipboard")
            textarea.value = this.urlArticle(this.actuality.id,this.actuality.user_id)
            textarea.select()
            document.execCommand('copy')
            textarea.blur()
        }
    },
}