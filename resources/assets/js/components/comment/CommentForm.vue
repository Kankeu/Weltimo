<template>
    <div :class="emojiClass">
        <textarea class="emojionearea"></textarea>
    </div>
</template>

<script>
    import "emojionearea"
    import "emojionearea/dist/emojionearea.css"
    import store from './state.js'
    export default{
        props:{
            article: Object,
        },
        computed:{
            darked(){
                return this.$store.state.setting.darked
            },
            replyUser(){
                return this.$store.state.users.users.find(user=>user.id===this.store.replyUser_id)
            },
            user(){
                return this.$store.state.user.user
            },
            emojiClass(){
                return [
                    (this.darked) ? 'commentForm blackForm' : 'commentForm',
                    (!this.$vuetify.breakpoint.smAndUp) ? ' noEmoji enlargeCmt' : null
                ].join(' ')
            }
        },
        data(){
            return {
                store : store.state
            }
        },
        methods:{
            publish(){
                let message = this.parseText()
                let data = {message,article_id:this.article.id,user_id:this.user.id}
                let elt = this.$el.querySelector('.emojionearea-editor').querySelector('.replyUser')
                if(elt && elt.innerText.trim().length>1 && this.store.replyUser_id){
                     data['comment_id'] = this.store.replyUser_id
                }
                store.set('loading',true)
                this.$http.post("/user/article/"+this.article.id+"/comment",data).then(response=>{
                    if(response.body.id){
                        this.clear()
                        let replyUser = response.body.replyed_user
                        delete response.body.replyed_user
                        this.$store.dispatch('comment/save',response.body)
                        if(replyUser) this.$store.dispatch('users/save',replyUser)
                        this.$store.dispatch('article/addComment',this.article)
                        this.$store.dispatch('comment/scrollTo',response.body.id)
                        this.$nextTick(()=>{
                            this.$scrollTo('#showComment',500,{container:'#comments'})
                        })
                    }
                    store.set('loading',false)
                })
            },
            clear(){
                this.$el.querySelector("textarea").value = ""
                this.$el.querySelector(".emojionearea-editor").innerHTML = ""
                store.set('replyUser_id',null)
            },
            parseText(){
                let message = this.$el.querySelector("textarea").value.trim().replace(new RegExp("@.*? "),"")
                let tableau  = []
                let results = message.match(new RegExp("(<img .*? class=\"emojioneemoji\" src=\"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/.*?\\.png\"/>)","g"))
                let texts = message.split(new RegExp('<img .*? class=\"emojioneemoji\" src=\"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/.*?\\.png\"/>'))
                texts.map((text,i)=>{
                    if(text.length>0){
                        tableau.push({text})
                    }
                    if(results && results[i]){
                        tableau.push({url:results[i].match(new RegExp('src="(.*?)"'))[1]})
                    }
                })
                return JSON.stringify(tableau)
            }
        },
        mounted(){
            if(!this.$el.querySelector('.emojionearea').emojioneArea){
                $(this.$el.querySelector('.emojionearea')).emojioneArea({
                    pickerPosition: "top",
                    tonesStyle: "bullet",
                    searchPlaceholder: "Search emoji",
                    placeholder: "Add a comment...",
                    autocomplete: false,
                    saveEmojisAs :'image',
                })
                $(this.$el).on("keypress", '.emojionearea-editor',(event)=>{
                    if(event.keyCode === 13){
                        event.preventDefault()
                        event.stopImmediatePropagation()
                        event.target.blur()
                        this.publish()
                        return false
                    }
                })
            }
        },
        destroyed(){
            $(this.$el.querySelector(".emojionearea-editor")).unbind();
            $('.commentForm .emojionearea-editor').unbind("keypress")
        },
        watch:{
            replyUser(data){
                if(data){
                    let last = this.$el.querySelector('.replyUser')
                    if(last) last.remove()
                    let elt = this.$el.querySelector('.emojionearea-editor')
                    elt.focus()
                    elt.innerHTML = '<span class="replyUser">@'+data.name+'_'+data.forename+'&nbsp;</span>'+elt.innerHTML
                    let range = document.createRange()
                    range.selectNodeContents(elt)
                    range.collapse(false)
                    let sel = window.getSelection()
                    sel.removeAllRanges()
                    sel.addRange(range)
                }
            }
        }
    }
</script>

<style>
    .enlargeCmt .emojionearea{
        min-height: 50px;
    }
    .commentForm .emojionearea .emojionearea-editor{
        text-align: left;
        font-size: 18px;
        color: black;
        font-family: monospace;
        min-height: inherit !important;
        max-height: 200px !important;
        background: transparent !important;
        border-radius: 0;
    }
    .commentForm .emojionearea{
        position: absolute !important;
        bottom: -40px;
        border-radius: 0;
    }
    .commentForm{
        position: relative;
    }
    .commentForm .emojionearea-picker{
        right: 0 !important;
        border: none;
        box-shadow: none;
    }
    .emojionearea-editor:focus {
        border: none !important;
        border-color: none !important;
        box-shadow: none !important;
        outline: 0px solid transparent !important;
    }
</style>