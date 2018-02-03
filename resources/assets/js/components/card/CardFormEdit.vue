<template>
    <div class="cardPublicationForm">
        <v-card height="100%">
            <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
            <v-card-title>Edit the Publication <v-spacer></v-spacer><v-icon @click="$emit('switchDialog')">close</v-icon></v-card-title>
            <v-divider></v-divider>
            <v-card-title primary-title>
                <v-layout row wrap>
                    <v-flex lg12 style="width:100px">
                        <v-card-text>
                            <div :class="emojiClass">
                                <textarea class="emojionearea"></textarea>
                            </div>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-card-actions>
                    <v-btn flat v-if="$vuetify.breakpoint.smAndUp" color="primary" @click.native="select"><v-icon>insert_photo</v-icon>Picture</v-btn>
                    <v-menu
                            offset-x
                            :close-on-content-click="false"
                            :nudge-width="200"
                            v-if="hasColors"
                    >
                        <v-btn flat color="primary" slot="activator" dark><v-icon>color_lens</v-icon>Color</v-btn>
                        <div class="menuColor">
                            <v-card>
                                <v-card-text>
                                    <h3>Custom colors</h3>
                                    <v-layout style="height:25px" justify-space-between wrap>
                                        <v-flex v-for="n in 9" @click="background('background'+n)" :key="n" lg1 :style="(n===1) ? 'cursor:pointer;border-radius:50%;background-color:#ddd !important' : 'cursor:pointer;border-radius:50%;'" :class="(n===9) ? 'buttonColor backgroundSmall'+n : 'buttonColor background'+n"></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-btn flat color="orange" @click.native="publish">Edit</v-btn>
                </v-card-actions>
                <v-btn flat color="primary" v-if="!$vuetify.breakpoint.smAndUp" @click.native="select"><v-icon>insert_photo</v-icon>Picture</v-btn>
                <v-avatar
                        size="200px"
                        :tile="true"
                        style="position:relative"
                        v-if="url"
                >
                    <img :src="url" alt="image">
                    <div class="nbr-photos"><v-btn @click="file=null;url=null" color="primary" icon><v-icon>close</v-icon></v-btn></div>
                </v-avatar>
            </v-card-text>
            <input type="file" id="photo" name="avatar" style="display:none" @change="preview">
        </v-card>
        <div v-show="false" id="messageHtml" v-if="article.message">
            <span v-for="message,i in JSON.parse(article.message)" :key="i">{{message.text}}<span  v-if="message.url"><img :src="message.url" style="margin-bottom:-5px;height: 25px;width: 25px"></span></span>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            article: Object
        },
        data: ()=>({
            box: null,
            color: "background1",
            hasColors: true,
            file: null,
            url: null,
            loading:false,
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            darked(){
                return this.$store.state.setting.darked
            },
            emojiClass(){
                return [
                    (this.darked) ? 'blockEmojionearea blackForm' : 'blockEmojionearea',
                    (!this.$vuetify.breakpoint.smAndUp) ? ' noEmoji' : null
                ].join(' ')
            }
        },
        methods:{
            preview(event){
                if(event.target.files[0]){
                    this.file = event.target.files[0]
                    this.url = window.URL.createObjectURL(event.target.files[0]);
                }
            },
            select(){
                this.$el.querySelector("#photo").click()
            },
            background(className){
                let textarea = this.$el.querySelector(".emojionearea-editor")
                this.box = textarea.parentNode
                this.color = className
            },
            publish(){
                let text = this.parseText()
                if(JSON.parse(text).length>0 || this.file){
                    let formdata = new FormData()
                    formdata.append("image",this.file)
                    if(JSON.parse(text).length>0) formdata.append("message",text)
                    formdata.append("color",this.color)
                    this.loading = true
                    this.$http.post("/user/article/"+this.article.id,formdata).then(response=>{
                        if(response.body.id){
                            this.loading = false
                            let user = response.body.user
                            delete response.body.user
                            if(this.file) response.body.image.path += "?"+new Date().getTime();
                            this.$store.dispatch('article/save',response.body)
                            this.$store.dispatch('users/save',user)
                            this.file = null
                        }
                    })
                }
            },
            parseText(){
                let message = this.$el.querySelector("textarea").value.trim()
                let tableau  = []
                if(message.length>0){
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
                }
                return JSON.stringify(tableau)
            }
        },
        mounted(){
            if(!this.$el.querySelector('.emojionearea').emojioneArea){
                $(this.$el.querySelector('.emojionearea')).emojioneArea({
                    pickerPosition: "right",
                    tonesStyle: "bullet",
                    searchPlaceholder: "Search emoji",
                    autocomplete: false,
                    placeholder: "What's up?",
                    saveEmojisAs :'image',
                })
                if(this.article && this.article.id){
                    this.url = this.article.image ? this.article.image.path : null
                    if(this.url) this.hasColors = false
                    this.background(this.article.color)
                    this.$nextTick(()=>{
                        this.$el.querySelector('.emojionearea-editor').innerHTML = this.$el.querySelector('#messageHtml').innerHTML
                    })
                }
            }
        },
        destroyed(){
            $(this.$el.querySelector(".emojionearea-editor")).unbind();
        },
        watch:{
            color(data,prevData){
                if(this.box && data){
                    let textarea = this.box.querySelector('.emojionearea-editor')
                    textarea.classList.remove(prevData)
                    this.box.classList.remove(prevData)
                    textarea.classList.add(data)
                    this.box.classList.add(data)
                }
            },
            file(data){
                if(data){
                    this.color = "background1"
                    this.hasColors = false
                }else{
                    this.hasColors = true
                }
            },
        },
    }
</script>

<style>
    .noEmoji .emojionearea-button{
        display: none;
    }
    .cardPublicationForm .emojionearea .emojionearea-editor{
        text-align: left;
        font-size: 30px;
        color: black;
        font-family: monospace;
        min-height: 50px !important;
        max-height: 300px !important;
        background: transparent !important;
        width:100%;
        transition: font-size 1s;
    }
    .cardPublicationForm .emojionearea .emojionearea-button, .emojionearea-picker{
        z-index: 1 !important;
    }
    .cardPublicationForm .card__text .emojionearea{
        display: flex;
        min-height: 50px !important;
        font-size: 15px !important;
        background-color: transparent;
    }
    .menuBloc .buttonColor{
        cursor: pointer;
        transition: transform .5s;
        border-radius: 50%
    }
    .menuBloc .buttonColor:hover{
        transform: scale(1.5)
    }
    .menuColor{
        min-width: 250px !important;
    }
</style>

<style scoped>
    .nbr-photos{
        position:absolute;
        width: 100%;
        height: 100%;
        display:none;
        background-color: rgba(0, 0, 0, .4);
        text-align: center;
        padding-top: 35%;
        color: #fff;
        border-radius: 4px;
        font-size: 18px;
    }
    div:hover > .nbr-photos{
        display: block
    }
    .nbr-photos:hover{
        display: block
    }
</style>

