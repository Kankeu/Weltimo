export default {
    props:{
        article: Object
    },
	data: ()=>({
		subscribed: false,
		facemotion: null,
		text: null,
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
        }],
	}),
    computed:{
        user(){
            return this.$store.state.user.user
        }
    },
    mounted(){
        document.querySelector('.faceMocion').parentNode.setAttribute("menu","like")
        if(this.article.liked){
            let emoticon  = this.emoticons.find(e=>e.type===this.article.liked.type)
            this.facemotion = emoticon.emocion
            this.text = emoticon.TextoEmocion
        }
    },
    methods:{
        like(event,name){
            let facemotion = (name) ? name : event.target.className
            let emoticon = this.emoticons.find(e=>e.emocion===facemotion)
            if(emoticon){
                this.$http.get('user/article/'+this.article.id+'/like/'+emoticon.type).then(response=>{
                    if(response.body.id){
                        this.facemotion = facemotion
                        this.text = emoticon.TextoEmocion
                        this.$store.dispatch('article/addLike',{article:this.article,like:response.body})
                    }
                })
            }
        },
        deleteLike(){
            this.$http.delete('user/article/'+this.article.id+'/like').then(response=>{
                if(response.body.status === 1){
                    this.$store.dispatch('article/deleteLike',{article:this.article})
                    this.facemotion=null;
                    this.text=null
                }
            })
        }
    }
}