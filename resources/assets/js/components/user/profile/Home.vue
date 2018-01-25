<template>
    <v-layout :style="!$vuetify.breakpoint.smAndUp || 'margin-top:50px'">
        <v-flex v-if="$vuetify.breakpoint.smAndUp" xs0 lg5>
            <card-more></card-more>
        </v-flex>
        <v-flex xs12 lg6>
            <ps-body></ps-body>
        </v-flex>
        <v-flex xs0 v-if="$vuetify.breakpoint.smAndUp" lg1></v-flex>
        <router-view></router-view>
    </v-layout>
</template>

<script>
    import psBody from './Body.vue'
    import cardMore from './CardMore.vue'
    export default{
        components:{psBody,cardMore},
    }
</script>