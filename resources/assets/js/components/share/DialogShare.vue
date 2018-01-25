<template>
    <v-dialog v-model="dialog" max-width="290">
        <v-card>
            <v-card-title class="headline">Share the publication</v-card-title>
            <v-divider></v-divider>
            <v-container grid-list-md text-xs-left fluid>
                <v-layout column>
                    <v-flex>
                        <a @click="facebook"><v-avatar size="32"><img src="https://www.gstatic.com/kpui/social/fb_32x32.png"></v-avatar> Facebook</a>
                    </v-flex>
                    <v-flex>
                        <a @click="twitter"><v-avatar size="32"><img src="https://www.gstatic.com/kpui/social/twitter_32x32.png"></v-avatar> Twitter</a>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default{
        props:{
            open: Boolean,
            message: String,
            url: String
        },
        data: ()=>({
            dialog: false,
        }),
        computed:{
            text(){
                let text = []
                JSON.parse(this.message).map(msg=>text.push(msg.text))
                return text.join('')
            }
        },
        methods:{
             popupCenter(url, title, width, height){
                var popupWidth = width || 640;
                var popupHeight = height || 320;
                var windowLeft = window.screenLeft || window.screenX;
                var windowTop = window.screenTop || window.screenY;
                var windowWidth = window.innerWidth || document.documentElement.clientWidth;
                var windowHeight = window.innerHeight || document.documentElement.clientHeight;
                var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
                var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
                var popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
                popup.focus();
                return true;
            },
            twitter(){
                var shareUrl = "https://twitter.com/intent/tweet?text="+this.text+
                    "&url=" + encodeURIComponent(this.url)
                this.popupCenter(shareUrl, "Share on Twitter")
            },
            facebook(){
                var shareUrl = "https://www.facebook.com/sharer/sharer.php?u="+ encodeURIComponent(this.url)
                this.popupCenter(shareUrl, "Share on facebook");
            }

    },
        watch:{
            open(data){
                if(data) this.dialog=true
            },
            dialog(data){
                if(!data) this.$emit("close")
            }
        }
    }
</script>

