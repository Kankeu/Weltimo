<template>
    <div id="cardMore">
        <v-parallax :src="(urls.cover) ? urls.cover : profile.cover" style="overflow: visible;" jumbotron height="300">
            <v-layout column align-center class="cover" v-if="user.id===profile.id" justify-center>
                <div v-if="urls.cover">
                    <v-btn round color="danger" @click="clear('cover')">Cancel</v-btn>
                    <v-btn round color="success" @click="send('cover')">Save</v-btn>
                </div>
                <v-btn round color="primary" @click="select('cover')" v-else><v-icon>insert_photo</v-icon> Cover picture</v-btn>
            </v-layout>
            <v-tooltip class="btnSubs" top>
                <v-btn
                        :loading="loadingSubs"
                        :color="profile.followed ? null :'primary'"
                        @click.native="follow"
                        v-if="user.id!==profile.id"
                        slot="activator"
                        rounded
                >
                    <v-icon v-if="!profile.followed">person_add</v-icon>{{profile.followed ? "Unfollow" : "Follow"}}
                </v-btn>
                <span v-if="profile.followed">Click here to unfollow</span><span v-else>Click here to follow</span>
            </v-tooltip>
        </v-parallax>
        <v-card style="height:55px">
            <v-bottom-nav absolute :value="true" style="justify-content:flex-end" color="transparent">
                <v-btn color="teal" flat :to="'/user/profile/'+profile.id+'/'" exact>
                    <span>Home</span>
                    <v-icon></v-icon>
                </v-btn>
                <v-btn color="teal" flat :to="'/user/profile/'+profile.id+'/following'">
                    <span>Following<br>
                    {{profile.following_count}}
                    </span>
                    <v-icon></v-icon>
                </v-btn>
                <v-btn color="teal" flat :to="'/user/profile/'+profile.id+'/followers'">
                    <span>Followers<br>
                    {{profile.followers_count}}
                    </span>
                </v-btn>
                <v-btn color="teal" flat :to="'/user/profile/'+profile.id+'/albums'">
                    <span>Albums</span>
                </v-btn>
            </v-bottom-nav>
        </v-card>
        <v-avatar
                size="200px"
                slot="activator"
                class="elevation-4"
                style="position: absolute;top: 200px;left: 10px;z-index: 4;"
        >
            <div class="nbr-photos" v-if="profile.id===user.id">
                <div v-if="urls.avatar">
                    <v-btn round color="danger" @click="clear('avatar')">Cancel</v-btn>
                    <v-btn round color="success" @click="send('avatar')">Save</v-btn>
                </div>
                <v-btn round color="primary" @click="select('avatar')" v-else><v-icon>insert_photo</v-icon> Profile picture</v-btn>
            </div>
            <img :src="(urls.avatar) ? urls.avatar : profile.avatar" alt="avatar">
        </v-avatar>
        <input type="file" id="cover" style="display:none" @change="preview">
        <input type="file" id="avatar" style="display:none" @change="preview">
    </div>
</template>

<script>
    export default {
        data: ()=>({
            loadingSubs: false,
            urls: {
                avatar: null,
                cover:null
            },
            files: {
                avatar: null,
                cover:null
            },
            name: null
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            },
            profile(){
                return this.$store.state.users.users.find(user=>user.id===parseInt(this.$route.params.id))
            }
        },
        methods:{
            follow(){
                this.loadingSubs = true
                let profile = this.profile
                if(this.profile.followed){
                    this.$http.delete("user/subscription/"+ this.profile.followed.id).then(response=>{
                        if(response.body.status === 1){
                            this.loadingSubs = false
                            this.$set(profile,'followed',null)
                            console.log(profile)
                            //this.$store.dispatch('users/unfollow', this.profile.id)
                        }
                    })
                }else{
                    this.$http.post('user/subscription',{receiver_id:this.profile.id}).then(response=>{
                        if(response.body.id){
                            //this.$store.dispatch('users/follow', {id:this.profile.id,followed:response.body})
                            this.$set(profile,'followed',response.body)
                            this.loadingSubs = false
                            console.log(profile)
                        }
                    })
                }
            },
            preview(event){
                this.files[this.name] = event.target.files[0]
                this.urls[this.name] = window.URL.createObjectURL(event.target.files[0]);
            },
            select(name){
                this.name = name
                this.$el.querySelector("#"+name).click()
            },
            clear(name){
                this.files[name]=null
                this.urls[name]=null
                this.$el.querySelector("#"+name).value = null
            },
            send(name){
                this.$store.dispatch('setting/setLoading',true)
                let formdata = new FormData()
                formdata.append(name,this.files[name])
                this.$http.post('user/'+name,formdata).then((response)=>{
                    if(response.body.status === 1){
                        let data = {}
                        data[name] = this.urls[name]
                        this.$store.dispatch('user/update', data)
                        this.$store.dispatch('users/update', this.user)
                    }
                    this.$store.dispatch('setting/setLoading',false)
                    this.clear(name)
                })
            }
        }
    }
</script>

<style>
    .btnSubs{
        bottom: 50px !important;
        position: absolute !important;
        right: 0 !important;
    }
    .cover{
        display: none ;
        margin: auto -15px !important;
    }
    .parallax__content:hover .cover{
        display: inherit !important;
        background-color: rgba(0, 0, 0, .4);
    }
</style>
<style scoped>
    #cardMore{
        position: relative;
        z-index: 1;
    }
     .nbr-photos{
         position:absolute;
         width: 100%;
         height: 100%;
         display:none;
         border-radius: 50% !important;
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
