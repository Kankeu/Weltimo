<template>
    <v-card>
       <v-card-text :style="{backgroundColor:colors.squareBg}" class="squareBg">
           <v-avatar size="200px" :style="{backgroundColor:colors.circleBg}" class="circleBg">
               <span :style="{color:colors.color}">{{level}}</span>
           </v-avatar>

       </v-card-text>
        <v-card-title primary-title>
            <div>
                <div class="headline">{{texts.title}}</div>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn flat :to="'/courses/'+level" color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="show = !show">
                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
            <v-card-text v-show="show">
                {{texts.description}}
            </v-card-text>
        </v-slide-y-transition>
    </v-card>
</template>

<script>
    export default{
        props:{
            level: String,
            colors: Object,
            texts: Object
        },
        data: ()=>({
            show: false
        })
    }
</script>

<style>
    .squareBg{
        padding: 15px;
        display: flex;
        justify-content: center;
    }
    .circleBg{
        text-align: center;
        font-size: 100px;
        color:white;
    }
</style>