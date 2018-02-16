<template>
    <v-dialog v-model="dialog" max-width="290">
        <v-card>
            <v-card-title>Share the publication <v-spacer></v-spacer><v-btn icon @click="dialog=false"><v-icon>close</v-icon></v-btn></v-card-title>
            <v-divider></v-divider>
            <v-container grid-list-lg text-xs-left fluid>
                <v-layout column>
                    <v-flex lg12>
                        <a @click="facebook"><v-avatar size="32"><img src="https://www.gstatic.com/kpui/social/fb_32x32.png"></v-avatar> Facebook</a>
                    </v-flex>

                    <v-flex lg12>
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
                try{
                    JSON.parse(this.message).map(msg=>text.push(msg.text))
                    return text.join('')
                }catch (e){
                    return this.message || ''
                }
            }
        },
        methods:{
             popupCenter(url, title, width, height){
                let popupWidth = width || 640;
                let popupHeight = height || 320;
                let windowLeft = window.screenLeft || window.screenX;
                let windowTop = window.screenTop || window.screenY;
                let windowWidth = window.innerWidth || document.documentElement.clientWidth;
                let windowHeight = window.innerHeight || document.documentElement.clientHeight;
                let popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
                let popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
                let popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
                popup.focus();
                return true;
            },
            twitter(){
                let shareUrl = "https://twitter.com/intent/tweet?text="+this.text+
                    "&url=" + encodeURIComponent(this.url)
                this.popupCenter(shareUrl, "Share on Twitter")
            },
            facebook(){
                let shareUrl = "https://www.facebook.com/sharer/sharer.php?u="+ encodeURIComponent(this.url)
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

