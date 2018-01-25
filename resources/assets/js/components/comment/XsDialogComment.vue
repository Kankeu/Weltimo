<template>
    <v-dialog v-model="dialog"  content-class="overflow" fullscreen transition="dialog-bottom-transition" :overlay=false>
        <v-card>
            <v-card-title :class="darked ? 'fontBlack' : 'white'" style="position: fixed;width: 100%;z-index: 2">
                Comments <v-spacer></v-spacer><span @click="dialog=false">x</span>
            </v-card-title>
            <v-layout v-if="article && article.id && open" column>
                <v-flex style="margin-top: 53px;margin-bottom: 55px">
                    <v-divider></v-divider>
                    <comments :article="article" style="padding: 5px;" :open="open"></comments>
                </v-flex>
                <v-flex>
                    <div style="position: fixed;width: 100%;bottom:40px">
                        <comment-form :article="article"></comment-form>
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
    import comments from './Comments.vue'
    import commentForm from './CommentForm.vue'
    import store from './state'
    export default{
        components:{commentForm,comments},
        props:{
            open: Boolean,
            article: Object
        },
        data: ()=>({
            dialog: false,
            store: store.state,
        }),
        computed:{
            darked(){
                return this.$store.state.setting.darked
            },
        },
        watch:{
            open(data){
                if(data) this.dialog = true
            },
            dialog(data){
                if(!data) this.$emit('close')
            }
        }
    }
</script>