<template>
    <v-container grid-list-md text-xs-center fluid style="overflow: visible;" v-if="profile">
        <ps-header></ps-header>
        <router-view></router-view>
    </v-container>
</template>

<script>
    import psHeader from './profile/Header.vue'
    export default{
        components:{psHeader},
        data: ()=>({
            loadingSubs: false
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            query(){
                return this.$store.state.query.queries.find(e=>e.name==="profile" && e.id===this.$route.params.id)
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
                           // this.$store.dispatch("query/save",{name:'profile',id:this.$route.params.id})
                        }
                        this.$store.dispatch('setting/setLoading',false)
                    })
                }
            }
        },
        mounted(){
            console.log(this)
            this.load()
        },
        watch:{
            $route(){
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