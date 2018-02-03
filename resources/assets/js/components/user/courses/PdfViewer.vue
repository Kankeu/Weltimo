<template>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
        <v-card>
            <v-btn icon @click="$router.go(-1)" class="btn-close" dark exact>
                <v-icon>close</v-icon>
            </v-btn>
            <div style="position: relative;height: 100vh;width: 100%">
                <iframe id="viewer" style="overflow:hidden;height:100%;width:100%;position: absolute;top:0;left: 0;right: 0;bottom: 0" height="100%" width="100%" :src="book.url" frameborder="0" scrolling="no" ></iframe>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    export default{
        props:{
            open: Boolean,
            url: String
        },
        data: ()=>({
            dialog: false,
            html: null
        }),
        computed:{
            book(){
                return this.$store.state.book.books.find(book=>book.id===parseInt(this.$route.params.book)) || {}
            }
        },
        methods:{

        },
        mounted(){
            this.html = document.querySelector('html')
            if(this.$route.params.book){
                this.dialog = true
                this.html.style.overflow = "hidden"
            }
        },
        watch:{
            '$route.params.book'(data){
                if(data){
                    this.dialog = true
                    this.html.style.overflow = "hidden"
                }else{
                    this.dialog = false
                    this.html.style.overflow = "auto"
                }
            }
        }
    }
</script>

<style scoped>
    .btn-close{
        position: absolute;
        top:0px;
        right: 10px;
        z-index: 1
    }
</style>