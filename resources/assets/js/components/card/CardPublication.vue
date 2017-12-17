<template>
    <v-card>
        <v-progress-linear v-bind:indeterminate="true" v-if="loading1" style="margin: 0"></v-progress-linear>
        <v-card-title primary-title>
            <v-layout style="width:100px" row wrap>
                <v-flex lg2>
                    <v-avatar
                            size="40px"
                    >
                        <img :src="user.avatar" @click="article.popover = true" alt="avatar">
                    </v-avatar>
                </v-flex>
                <v-flex lg10>
                    <v-card-text>
                        <div id="picker1" @click="enlarge">
                            <textarea class="emojionearea"></textarea>
                        </div>
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-actions>
            <v-dialog width="50%" scrollable v-model="dialog">
                <v-btn flat color="primary" slot="activator" dark>Enlarge</v-btn>
                <v-card>
                    <v-progress-linear v-bind:indeterminate="true" v-if="loading2" style="margin: 0"></v-progress-linear>
                    <v-card-title class="headline">Publish</v-card-title>
                    <v-card-text>
                        <div id="picker2" @click="enlarge">
                            <textarea class="emojionearea"></textarea>
                        </div>
                        <v-card-actions>
                            <v-layout row wrap>
                                <v-flex>
                                    <v-btn flat color="primary" @click.native="select"><v-icon>insert_photo</v-icon>Picture</v-btn>
                                </v-flex>
                                <v-flex>
                                    <v-menu
                                            offset-x
                                            :close-on-content-click="false"
                                            :nudge-width="200"
                                    >
                                        <v-btn flat color="primary" slot="activator" @click.native="openSwatches('#picker2')" dark><v-icon>color_lens</v-icon>Color</v-btn>
                                        <v-card>
                                            <swatches v-if="hasSwacthes" v-model="color2"></swatches>
                                        </v-card>
                                    </v-menu>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>
                        <v-avatar
                                size="400px"
                                :tile="true"
                                v-if="url"
                        >
                            <img :src="url" alt="image">
                        </v-avatar>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat="flat" @click.native="dialog = false">Cancel</v-btn>
                        <v-btn color="orange" flat="flat" @click.native="publish('#picker2')">Publish</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-menu
                    offset-x
                    :close-on-content-click="false"
                    :nudge-width="200"

            >
                <v-btn flat color="primary" @click.native="openSwatches('#picker1')" slot="activator" dark><v-icon>color_lens</v-icon>Color</v-btn>
                <v-card>
                    <swatches v-if="hasSwacthes" v-model="color1"></swatches>
                </v-card>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn flat color="orange" @click.native="publish('#picker1')">Publish</v-btn>
        </v-card-actions>

        <input type="file" id="photo" name="avatar" style="display:none" @change="preview">
    </v-card>
</template>

<script>
    import "emojionearea"
    import "emojionearea/dist/emojionearea.css"
    import $ from "jquery"

    export default{
        data: ()=>({
            box1: null,
            box2: null,
            color1: {},
            color2: {},
            dialog: false,
            emoji: "",
            hasPicker:false,
            hasSwacthes: false,
            file: null,
            url: null,
            loading1:false,
            loading2:false
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            }
        },
        methods:{
            preview(event){
                this.file = event.target.files[0]
                this.url = window.URL.createObjectURL(event.target.files[0]);
            },
            select(){
                this.$el.querySelector("#photo").click()
            },
            openSwatches(el){
                import("vue-color").then(({ Swatches })=>{
                    this.$options.components['swatches'] = Swatches
                    this.hasSwacthes = true
                    if(el === "#picker1"){
                        el = el + " .emojionearea-editor"
                        let textarea = document.querySelector(el)
                        this.box1 = textarea.parentNode
                    }else{
                        el = el + " .emojionearea-editor"
                        let textarea = document.querySelector(el)
                        this.box2 = textarea.parentNode
                    }
                })
            },
            enlarge(event){
                event.target.style.transition = "font-size 1s"
                event.target.style.fontSize = "25px"
            },
            publish(el){
                let text = this.replaceImg(el)
                let color = (el==="#picker1") ? this.color1 : this.color2
                let formdata = new FormData()
                formdata.append("image",this.file)
                formdata.append("message",text)
                formdata.append("color",color.hex)
                if(el === "#picker1"){
                    this.loading1 = true
                }else{
                    this.loading2 = true
                }
                this.$http.post("/user/article",formdata).then(response=>{
                    if(response.body.id){
                        if(el === "#picker1"){
                            this.loading1 = true
                        }else{
                            this.loading2 = true
                            this.dialog = false
                        }
                        this.clear(el)
                    }
                })
            },
            clear(el){
                this.file = null
                this.url = null
                if(el==="#picker1"){
                    this.color1 = {}
                }else{
                    this.color2 = {}
                }
                document.querySelector(el+" textarea").value = ""
                document.querySelector(el+" .emojionearea-editor").innerHTML = ""
            },
            replaceImg(el){
                el = el + " textarea"
                let html = document.querySelector(el).value
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
            }
        },
        mounted(){
            let ready = $(".emojionearea").emojioneArea({
                pickerPosition: "bottom",
                tonesStyle: "bullet",
                searchPlaceholder: "Search emoji",
                placeholder: "What's up?",
                autocomplete: false,
                saveEmojisAs :'image'
            });
            NodeList.prototype.map = new Array().map
        },
        watch:{
            color1(data){
                if(data.hex){
                    let textarea = this.box1.querySelector('.emojionearea-editor')
                    if(data.hex !== "#FFFFFF"){
                        textarea.style.color = "#FFFFFF"
                    }else{
                        textarea.style.color = "black"
                    }
                }
                this.box1.style.background = (data.hex) ? data.hex : "white"
            },
            color2(data){
                if(data.hex){
                    let textarea = this.box2.querySelector('.emojionearea-editor')
                    if(data.hex !== "#FFFFFF"){
                        textarea.style.color = "#FFFFFF"
                    }else{
                        textarea.style.color = "black"
                    }
                }
                this.box2.style.background = (data.hex) ? data.hex : "white"
            }
        },
    }
</script>

<style >
.emojionearea-editor{
    text-align: center
}
.emojionearea .emojionearea-button{
    z-index: 1;
}
</style>
