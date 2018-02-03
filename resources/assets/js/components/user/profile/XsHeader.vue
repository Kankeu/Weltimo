<template>
    <div id="cardMore" style="margin-top: -25px">
        <v-parallax :src="(urls.cover) ? urls.cover : profile.cover" style="overflow: visible;" jumbotron height="150">
            <v-layout column align-center class="cover" v-if="user.id===profile.id" justify-center>
                <div v-if="urls.cover">
                    <v-btn round color="danger" @click="clear('cover')">Cancel</v-btn>
                    <v-btn round color="success" @click="send('cover')">Save</v-btn>
                </div>
                <v-btn round color="primary" @click.native="select('cover')" icon v-else><v-icon>insert_photo</v-icon></v-btn>
            </v-layout>
        </v-parallax>
        <v-card>
            <v-card-title style="margin: 0;padding: 0">
                <v-spacer></v-spacer>
                <v-tooltip top>
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
            </v-card-title>
            <v-list style="text-align: left" subheader>
                <div style="display: flex;padding: 15px">
                    <div style="margin-right: 5px">Name: </div>
                    <div>{{profile.name+" "+profile.forename}}</div>
                </div>
                <div style="display: flex;padding: 15px"  v-if="profile.role==='admin' || profile.title">
                    <div>{{(profile.role==="admin") ? "Founder of Weltimo" : profile.title}}</div>
                </div>
                <v-subheader v-if="profile.biography" style="display: inherit;margin-bottom: 10px"><span style=" color: black;font-weight: 400;">Biography: </span>{{profile.biography}}</v-subheader>
            </v-list>
        </v-card>
        <v-card height="55px">
            <v-tabs dark>
                <v-tabs-bar class="transparent tabsProfile" dark>
                    <v-tabs-slider class="yellow"></v-tabs-slider>
                    <v-tabs-item
                            :to="'/profile/'+profile.id+'/'" exact
                    >
                        Home
                    </v-tabs-item>
                    <v-tabs-item
                            :to="'/profile/'+profile.id+'/following'"
                    >
                        Following ({{profile.following_count}})
                    </v-tabs-item>
                    <v-tabs-item
                            :to="'/profile/'+profile.id+'/followers'" exact
                    >
                        Followers ({{profile.followers_count}})
                    </v-tabs-item>
                    <v-tabs-item
                            :to="'/profile/'+profile.id+'/albums'"
                    >
                        Albums
                    </v-tabs-item>
                </v-tabs-bar>
            </v-tabs>
        </v-card>
        <v-avatar
                size="80px"
                slot="activator"
                class="elevation-4"
                style="position: absolute;top: 80px;left: 0px;z-index: 4;"
        >
            <div class="nbr-photos" v-if="profile.id===user.id">
                <div v-if="urls.avatar">
                    <v-btn round color="danger" @click="clear('avatar')">Cancel</v-btn>
                    <v-btn round color="success" @click="send('avatar')">Save</v-btn>
                </div>
                <v-btn round color="primary" @click.native="select('avatar')" icon v-else><v-icon>insert_photo</v-icon></v-btn>
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
                    this.$http.get("user/unfollow/"+ this.profile.id).then(response=>{
                        if(response.body.status === 1){
                            this.loadingSubs = false
                            this.$set(profile,'followed',null)
                            profile.followers_count--
                        }
                    })
                }else{
                    this.$http.post('user/subscription',{receiver_id:this.profile.id}).then(response=>{
                        if(response.body.id){
                            this.$set(profile,'followed',response.body)
                            this.loadingSubs = false
                            profile.followers_count++
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
    .tabsProfile .tabs__item,.tabs__li{
        color: inherit !important;
        text-transform: capitalize !important;
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
