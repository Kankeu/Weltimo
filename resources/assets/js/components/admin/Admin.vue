<template>
    <div style="margin-top:80px">
        <router-view></router-view>
    </div>
</template>

<script>
    import dashboard from '../store/modules/Dashboard'
    export default {
        data: ()=>({
            darked: false,
            drawer: false
        }),
        watch:{
            darked(data){
                this.$store.dispatch('setting/invertcolor')
                if(data){
                    document.querySelectorAll('.emojionearea-editor').map(elt=>{
                        elt.style.color = "white"
                    })
                }else{
                    document.querySelectorAll('.emojionearea-editor').map(elt=>{
                        elt.style.color = "#424242"
                    })
                }
            }
        },
        mounted(){
            this.$store.registerModule('dashboard',dashboard)
        }
    }
</script>

<style>
    .dialog--fullscreen{
        overflow-y: auto !important;
    }
</style>