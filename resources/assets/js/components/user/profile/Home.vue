<template>
    <v-layout layout_block>
        <v-flex xs0 lg5>
            <card-more></card-more>
        </v-flex>
        <v-flex xs12 lg6>
            <ps-body></ps-body>
        </v-flex>
        <v-flex xs0 lg1></v-flex>
    </v-layout>
</template>

<script>
    import psBody from './Body.vue'
    import cardMore from './CardMore.vue'
    export default{
        components:{psBody,cardMore},
    }
</script>