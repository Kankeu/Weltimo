<template>
  <div class="full">
    <v-layout column class="padding_top" align-center justify-center>
        <v-avatar
        size="200px"
        >
            <img :src="url" alt="avatar">
        </v-avatar>
        <div class="text-xs-center">
            <v-btn round outline color="primary" @click="select">Select the photo</v-btn>
        </div>
        <input type="file" id="photo" name="avatar" style="display:none" @change="preview">
        <v-btn color="primary" @click="send">Finish</v-btn>
    </v-layout>

  </div>
</template>

<script>
    import store from './Store'
    export default{
        data: () => ({
            url: "/img/default/avatar.jpg",
            file: null,
            store: store,
        }),
        computed:{
            user(){
                return this.store.state.user
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
            send(){
                if(this.file){
                    this.$emit("load")
                    let formdata = new FormData()
                    formdata.append("avatar",this.file)
                    this.$http.post('/avatar',formdata).then((response)=>{
                        if(response.body.status === 1){
                            this.user.avatar = this.url
                            this.store.setUser(this.user)
                            this.$emit("stop")
                            window.location.href = window.location.host
                            window.location.reload()
                        }
                    })
                }else{
                    window.location.href = window.location.host
                    window.location.reload()
                }
            }
        }
    }
</script>

<style scoped>
    .padding_top{
        padding-top: 10px
    }
</style>
