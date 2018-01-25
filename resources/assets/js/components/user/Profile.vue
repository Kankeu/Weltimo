<template>
    <v-container grid-list-md text-xs-center fluid style="overflow: visible;" v-if="profile">
        <ps-header v-if="$vuetify.breakpoint.smAndUp"></ps-header>
        <xs-header v-else></xs-header>
        <router-view></router-view>
    </v-container>
</template>

<script>
    import xsHeader from './profile/XsHeader.vue'
    import psHeader from './profile/Header.vue'
    export default{
        components:{psHeader,xsHeader},
        data: ()=>({
            loadingSubs: false
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            query(){
                return this.$store.state.query.queries.find(e=>(e.name==="profile" && e.id===this.$route.params.id))
            },
            profile(){
                return this.$store.state.users.users.find(user=>user.id===parseInt(this.$route.params.id))
            }
        },
        methods:{
            load(){
                if(!this.query){
                    this.$store.dispatch('setting/setLoading',true)
                    this.$http.get('/user/'+this.$route.params.id).then(response=>{
                        if(response.body instanceof Object){
                            this.$store.dispatch("users/save", response.body)
                        }
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            }
        },
        mounted(){
            this.load()
        },
        watch:{
            '$route.params.id'(){
                this.load()
            }
        }
    }
</script>

<style>
    .layout_block{
        margin-top: 50px !important;
    }
</style>