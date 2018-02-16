<template>
    <v-list-tile :to="'/forum/topic/'+topic.id" avatar>
        <v-list-tile-avatar>
            <img :src="owner.avatar" alt="avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
            <v-list-tile-sub-title>{{owner.name+" "+owner.forename}}</v-list-tile-sub-title>
            <v-list-tile-title>{{topic.title}}</v-list-tile-title>
            <v-list-tile-sub-title>{{JSON.parse(topic.question)[0].text}}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
            <v-btn
                    :to="'/forum/topic/'+topic.id"
                    color="primary"
                    outline
            >
                Show
            </v-btn>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script>
    export default{
        props:{
            topic: Object
        },
        computed:{
            owner(){
                return this.$store.state.users.users.find(user=>user.id===this.topic.user_id) || {}
            }
        },
    }
</script>