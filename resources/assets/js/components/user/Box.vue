<template>
    <div style="margin-top: 20px" id="box">
        <requests></requests>
    </div>
</template>

<script>
    import requests from './box/Requests.vue'
    export default{
        components:{requests},
        data: ()=>({

        }),
        computed:{
            user(){
                return this.$store.state.user.user
            }
        },
    }
</script>

<style>
    #box .tabs__container{
        justify-content: space-around;
    }
</style>

