<template>
    <v-layout v-if="open" row justify-center>
        <v-dialog v-model="dialog" width="935px">
            <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
            <v-carousel  style="position: inherit;height: 597px;background: transparent" v-model="index" :cycle="false" :hide-controls="boxmessages.length<2" hide-delimiters>
                <v-carousel-item src=" " v-for="boxmessage,i in boxmessages" class="carousel_item" :key="i">
                    <v-card height="600px" style="width:935px" v-if="i===index">
                        <v-container class="notSpace" style="overflow: hidden"  grid-list-md>
                            <v-layout class="notSpace" row>
                                <v-flex class="notSpace" lg6>
                                    <discussion-state :boxmessage="boxmessage"></discussion-state>
                                </v-flex>
                                <v-flex class="notSpace" lg6>
                                    <message-box :open="open" :boxmessage="boxmessage"></message-box>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-dialog>
    </v-layout>
</template>

<script>
    import discussionState from './DiscussionState.vue'
    import messageBox from './MessageBox.vue'
    import store from './State'
    export default{
        components:{messageBox, discussionState},
        props:{
            open: Boolean,
            boxmessage: Object,
            boxmessages: Array
        },
        data: ()=>({
            dialog: false,
            index: -1,
            store: store.state,
        }),
        computed:{
            loading(){
                return  this.store.loading
            },
        },
        watch:{
            open(data){
                if(data) {
                    this.index = this.boxmessages.indexOf(this.boxmessage)
                    this.dialog = data
                }
            },
            dialog(data){
                if(!data) {
                    this.$emit('close')
                }
            },
            boxmessage(boxmessage){
                this.index = this.boxmessages.indexOf(boxmessage)
            },
            index(index){
                if(this.boxmessages[index]) this.$scrollTo('#boxmessage'+this.boxmessages[index].id,10,{container:'body'})
            }
        }
    }
</script>

<style>
    .notSpace{
        padding: 0 !important;
        margin: 0 !important;
    }
    .dialog--active{
        overflow: hidden;
    }
    .carousel_item{
        position: relative !important
    }
</style>