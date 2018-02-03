<template>
    <div class="cardPublicationForm">
        <v-card height="auto">
            <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
            <v-card-title v-if="dialog">Form Publication <v-spacer></v-spacer><v-btn icon @click="$emit('switchDialog')"><v-icon>close</v-icon></v-btn></v-card-title>
            <v-divider></v-divider>
            <v-card-title :style="$vuetify.breakpoint.smAndUp||'padding:0'" primary-title>
                <v-layout row wrap>
                    <v-flex v-if="$vuetify.breakpoint.smAndUp" lg2>
                        <v-avatar
                                size="40px"
                                style="margin-top: 15px"
                        >
                            <img :src="user.avatar" alt="avatar">
                        </v-avatar>
                    </v-flex>
                    <v-flex lg10 style="width:100px">
                        <v-card-text>
                            <div :class="emojiClass" >
                                <textarea class="emojionearea"></textarea>
                            </div>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <v-card-actions>
                    <v-btn flat v-if="dialog && $vuetify.breakpoint.smAndUp" color="primary" @click.native="select"><v-icon>insert_photo</v-icon>Picture</v-btn>
                    <v-btn flat color="primary" slot="activator" @click.native="$emit('switchDialog')" v-if="!dialog && $vuetify.breakpoint.smAndUp" dark>Enlarge</v-btn>
                    <v-menu
                            offset-x
                            :close-on-content-click="false"
                            :nudge-width="200"
                            v-if="hasColors"
                            :content-class="$vuetify.breakpoint.smAndUp||'menuColor'"
                    >
                        <v-btn flat color="primary" slot="activator" dark><v-icon>color_lens</v-icon>Color</v-btn>
                        <div class="menuBloc">
                            <v-card>
                                <v-card-text>
                                    <h3>Custom colors</h3>
                                    <v-layout style="height:25px;" justify-space-between wrap row>
                                        <v-flex v-for="n in 9" @click="background('background'+n)" :key="n" lg1 :style="(n===1) ? 'cursor:pointer;border-radius:50%;background-color:#ddd !important' : 'cursor:pointer;border-radius:50%;'" :class="(n===9) ? 'buttonColor backgroundSmall'+n : 'buttonColor background'+n"></v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-btn flat="flat" @click.native="$emit('switchDialog')" v-if="dialog && $vuetify.breakpoint.smAndUp">Cancel</v-btn>
                    <v-btn flat color="orange" @click.native="publish">Publish</v-btn>
                </v-card-actions>
                <v-btn flat v-if="dialog && !$vuetify.breakpoint.smAndUp" color="primary" @click.native="select"><v-icon>insert_photo</v-icon>Picture</v-btn>
                <v-avatar
                        size="200px"
                        :tile="true"
                        style="position:relative"
                        v-if="url && dialog"
                >
                    <img :src="url" alt="image">
                    <div class="nbr-photos"><v-btn @click="file=null" color="primary" icon><v-icon>close</v-icon></v-btn></div>
                </v-avatar>
            </v-card-text>
            <input type="file" id="photo" name="avatar" style="display:none" @change="preview">
        </v-card>
    </div>
</template>

<script>
    export default{
        props:{
            dialog: Boolean
        },
        data: ()=>({
            box: null,
            color: "background1",
            hasColors: true,
            file: null,
            url: null,
            loading:false
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
                    formdata.append("message",text)
                    formdata.append("color",this.color)
                    this.loading = true
                    this.$http.post("/user/article",formdata).then(response=>{
                        if(response.body.id){
                            this.loading = false
                            response.body.comments_count = 0
                            response.body.likes_count = 0
                            response.body.liked = null
                            if(this.url) response.body.image = {path: this.url}
                            this.$store.dispatch('article/save',response.body)
                            this.$store.dispatch('users/save',this.user)
                            this.clear()
                        }
                    })
                }
            },
            clear(){
                this.file = null
                this.url = null
                this.color = "background1"
                this.$el.querySelector("textarea").value = ""
                this.$el.querySelector(".emojionearea-editor").innerHTML = ""
                document.querySelector('#photo').value = ""
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
                    placeholder: "What's up?",
                    autocomplete: false,
                    saveEmojisAs :'image',
                })
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
                    this.url = null
                }
            },
        },
    }
</script>

<style>
    .noEmoji .emojionearea-button{
        display: none;
    }
    .cardPublicationForm  .emojionearea-editor{
        text-align: left;
        font-size: 30px !important;
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
