<template>
    <v-card>
        <v-card-title primary-title>
            <v-layout row wrap>
                <v-flex lg2>
                    <v-avatar
                            size="40px"
                    >
                        <img :src="user.avatar" @click="article.popover = true" alt="avatar">
                    </v-avatar>
                </v-flex>
                <v-flex lg10>
                  <div class="span6">
                    <textarea class="emojionearea"></textarea>
                  </div>
                  <div class="textarea_feedback"></div>
                </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-actions>
            <v-btn flat color="primary" @click.native="dialog=true" dark>Enlarge</v-btn>
            <v-menu
                offset-x
                :close-on-content-click="false"
                :nudge-width="200"
                
            >
            <v-btn flat color="primary" @click.native="openSwatches()" slot="activator" dark><v-icon>color_lens</v-icon>Color</v-btn>
                <v-card>
                    <swatches v-if="hasSwacthes" v-model="colors"></swatches>
                </v-card>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn flat color="orange">Publish</v-btn>
        </v-card-actions> 
    <v-dialog width="50%" scrollable v-model="dialog">
      <v-card>
        <v-card-title class="headline">Publication</v-card-title>
        <v-card-text>
            <div class="span6">
               <textarea class="emojionearea"></textarea>
            </div>
            <v-card-actions>
            <v-layout row wrap>
                <v-flex>
                    <v-btn flat color="primary"><v-icon>insert_photo</v-icon>Picture</v-btn>
                </v-flex>
                <v-flex>
                  <v-menu
                    offset-x
                    :close-on-content-click="false"
                    :nudge-width="200"
                    >
                    <v-btn flat color="primary" slot="activator" @click.native="openSwatches('.emojionearea-editor')" dark><v-icon>color_lens</v-icon>Color</v-btn>
                        <v-card>
                            <swatches v-if="hasSwacthes" v-model="colors"></swatches>
                        </v-card>
                    </v-menu>
                </v-flex>
            </v-layout>
            </v-card-actions>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat="flat" @click.native="dialog = false">Cancel</v-btn>
          <v-btn color="orange" flat="flat" @click.native="dialog = false">Publish</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card>
</template>

<script>
    import "./limitText"
    import "emojionearea"
    import "emojionearea/dist/emojionearea.css"
    import $ from "jquery"

    export default{
        data: ()=>({
            box: null,
            colors: {},
            dialog: false,
            emoji: "",
            hasPicker:false,
            picker1:false,
            picker2: false,
            hasSwacthes: false
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            }
        },
        methods:{
            openSwatches(el){
                import("vue-color").then(({ Swatches })=>{
                    this.$options.components['swatches'] = Swatches
                    this.hasSwacthes = true
                    let textarea = null
                    if(el){
                         textarea = document.querySelector(el)
                    }else{
                         textarea = this.$el.querySelector('.emojionearea-editor')
                    }
                    this.colors = {}
                    this.box = textarea.parentNode
                    })
            }
        },
        mounted(){
            let ready = $(".emojionearea").emojioneArea({
                pickerPosition: "bottom",
                tonesStyle: "bullet",
                searchPlaceholder: "Search emoji",
                placeholder: "What's up?",
                autocomplete: false
            });
        },
        watch:{
            colors(data){
                $(".emojionearea-editor").limitText({selector: ".textarea_feedback", text : "/150"})
                let textarea = this.box.querySelector('.emojionearea-editor')
                if(data.hex !== "#FFFFFF"){
                    textarea.style.color = "#FFFFFF"
                }else{
                     textarea.style.color = "black"
                }
                this.box.style.background = data.hex
            }
        }
    }
</script>

<style >
.emojionearea-editor:focus{
    transition: font-size .5s;
    font-size: 25px;
}
</style>
