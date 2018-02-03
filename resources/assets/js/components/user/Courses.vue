<template>
    <router-view></router-view>
</template>

<script>
    export default{
        computed:{
            user(){
                return this.$store.state.user.user
            },
        },
        mounted(){

        }
    }
</script>