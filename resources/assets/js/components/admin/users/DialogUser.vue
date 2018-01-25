<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" width="935px">
            <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
            <v-carousel v-model="index" style="position: inherit;height: 600px;background: transparent" :cycle="false" :hide-controls="users.length<2" hide-delimiters>
                <v-carousel-item src=" " v-for="user,i in users" class="carousel_item" :key="i">
                    <v-card height="600px" style="width:935px" v-if="i===index">
                        <v-container class="noSpace" style="overflow: hidden"  grid-list-md>
                            <v-layout class="noSpace" row>
                                <v-flex class="noSpace" lg7>
                                    <user-box :user="user"></user-box>
                                </v-flex>
                                <v-flex class="noSpace" lg5>
                                    <activity-box :user="user"></activity-box>
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
    import userBox from './UserBox.vue'
    import activityBox from './ActivitiesBox.vue'
    import store from './Store.js'
    export default{
        components:{userBox,activityBox},
        props:{
            open: Boolean,
            user: Object,
            users: Array
        },
        data: ()=>({
            dialog: false,
            index: -1,
            store: store.state
        }),
        computed:{
            loading(){
                return  this.store.loading
            },
        },
        watch:{
            open(data){
                if(data) {
                    this.index = this.users.indexOf(this.user)
                    this.dialog = data
                }
            },
            dialog(data){
                if(!data) {
                    this.$emit('close')
                }
            },
            user(data){
                this.index = this.users.indexOf(data)
            },
        }
    }
</script>

<style>
    .noSpace{
        padding: 0 !important;
        margin: 0 !important;
    }
    .dialog--active{
        overflow: hidden;
    }
    .carousel_item{
        position: relative !important
    }
    .btn{
        margin-left: 1em;
        margin-right: 1em;
    }
</style>