<template>
    <div :id="'boxmessage'+boxmessage.id">
        <v-list-tile @click=" " avatar>
            <v-list-tile-avatar @click="$router.push('/profile/'+owner.id)">
                <img :src="owner.avatar" alt="boxmessage">
            </v-list-tile-avatar>
            <v-list-tile-content @click="dialog=true">
                <v-list-tile-title>{{boxmessage.town}}</v-list-tile-title>
                <v-list-tile-sub-title>{{boxmessage.offer}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action style="margin-left: 15px">
                <v-btn
                        color="primary"
                        outline
                >
                    Show
                </v-btn>
            </v-list-tile-action>
        </v-list-tile>
    </div>
</template>

<script>
    export default{
        props:{
            boxmessage: Object
        },
        computed:{
            user(){
                return this.$store.state.user.user
            },
            owner(){
                return this.$store.state.users.users.find(user=>user.id===this.boxmessage.user_id) || {}
            },
        }
    }
</script>