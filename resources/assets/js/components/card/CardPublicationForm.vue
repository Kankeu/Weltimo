<template>
    <v-card height="100%">
        <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
        <v-card-title primary-title>
            <v-layout row wrap>
                <v-flex lg2>
                    <v-avatar
                            size="40px"
                    >
                        <img :src="user.avatar" alt="avatar">
                    </v-avatar>
                </v-flex>
                <v-flex lg10 style="width:100px">
                    <v-card-text>
                        <div class="blockEmojionearea">
                            <textarea class="emojionearea"></textarea>
                        </div>
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-text>
            <v-card-actions>
                <v-btn flat color="primary" slot="activator" @click.native="$emit('switchDialog')" v-if="!dialog" dark>Enlarge</v-btn>
                <v-btn flat v-if="dialog" color="primary" @click.native="select"><v-icon>insert_photo</v-icon>Picture</v-btn>
                <v-menu
                        offset-x
                        :close-on-content-click="false"
                        :nudge-width="200"
                        v-if="hasColors"
                >
                    <v-btn flat color="primary" @click.native="openSwatches" slot="activator" dark><v-icon>color_lens</v-icon>Color</v-btn>
                    <v-card>
                        <v-card-text>
                            <h3>Custom colors</h3>
                            <v-layout style="height:25px" justify-space-between wrap>
                                <v-flex v-for="n in 8" @click="background('background'+n)" :key="n" lg1 :style="'border-radius:50%;'+(n===1) ? 'background-color:#ddd !important' : null" :class="'button background'+n"></v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-menu>
                <v-spacer></v-spacer>
                <v-btn flat="flat" @click.native="$emit('switchDialog')" v-if="dialog">Cancel</v-btn>
                <v-btn flat color="orange" @click.native="publish">Publish</v-btn>
            </v-card-actions>
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
</template>

<script>
    import "emojionearea"
    import "emojionearea/dist/emojionearea.css"
    export default{
        props:{
            dialog: Boolean
        },
        data: ()=>({
            box: null,
            color: null,
            hasColors: true,
            file: null,
            url: null,
            loading:false,
        }),
        computed:{
            user(){
                return this.$store.state.user.user
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
            openSwatches(){
                import("vue-color").then(({ Swatches })=>{
                    this.$options.components['swatches'] = Swatches
                    this.hasSwacthes = true
                    let textarea = this.$el.querySelector(".emojionearea-editor")
                    this.box = textarea.parentNode
                })
            },
            publish(){
                let text = this.parseText()
                let formdata = new FormData()
                formdata.append("image",this.file)
                formdata.append("message",text)
                formdata.append("color",this.color)
                this.loading = true
                this.$http.post("/user/article",formdata).then(response=>{
                    if(response.body.id){
                        this.clear()
                        this.loading = false
                        //this.$emit('switchDialog')

                    }
                })
            },
            clear(){
                this.file = null
                this.url = null
                this.color = "background1"
                this.$el.querySelector("textarea").value = ""
                this.$el.querySelector(".emojionearea-editor").innerHTML = ""
            },
            replaceImg(){
                let html = this.$el.querySelector("textarea").value.trim()
                let results = html.match(new RegExp("(<img .*? class=\"emojioneemoji\" src=\"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/.*?\"/>)","g"))
                if(results){
                    results.map((result)=>{
                        let url = result.match(new RegExp('src="(https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/.*?)"'))[1]
                        if(url){
                            html = html.replace(result,"![Img]("+url+")")
                        }
                    })
                }
                return html
            },
            parseText(){
                let message = this.$el.querySelector("textarea").value.trim()
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
                    pickerPosition: "right",
                    tonesStyle: "bullet",
                    searchPlaceholder: "Search emoji",
                    placeholder: "What's up?",
                    autocomplete: false,
                    saveEmojisAs :'image',
                });
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
    .emojionearea .emojionearea-editor{
        text-align: left;
        font-size: 30px;
        color: black;
        font-family: monospace;
        min-height: initial !important;
        max-height: 300px !important;
        background: transparent !important;
        width:100%;
        transition: font-size 1s;
    }
    .emojionearea .emojionearea-button, .emojionearea-picker{
        z-index: 1 !important;
    }
    .card__text .emojionearea{
        display: flex;
        min-height: 15em;
        font-size: 15px !important;
        background-color: transparent;
    }
    .button{
        cursor: pointer;
        transition: scale .5;
        border-radius: 50%
    }
    .button:hover{
        transform: scale(1.2)
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
