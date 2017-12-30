<template>

    <v-app :dark="darked">
        <v-card :dark="darked"  :color="(darked) ? 'theme--dark' :'theme--light'" flat>
            <v-toolbar :dark="darked" style="z-index:8" :color="(darked) ? 'theme--dark' : 'primary'"  prominent fixed flat extended>
                <v-toolbar-side-icon class="white--text" @click="drawer=!drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="white--text">Weltimo</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon class="white--text"><v-icon>notifications</v-icon></v-btn>
            </v-toolbar>
            <v-layout row>
                <v-flex xs8 offset-xs2>
                    <v-card :dark="darked" :color="(darked) ? 'theme--dark' : 'theme--light'"  class="card--flex-toolbar">
                        <v-toolbar dark card style="z-index:8;width:66.66666666666666%;position:fixed" prominent>
                            <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin-left: 0;top:-14px;position:absolute"></v-progress-linear>
                            <v-toolbar-title class="body-2 grey--text">{{$route.name}}</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-select
                                    light
                                    solo
                                    placeholder="Search"
                                    prepend-icon="search"
                                    autocomplete
                            ></v-select>
                        </v-toolbar>
                        <cardPublication :open="dialogPublication" @close="dialogPublication=false" :onlyDialog="true"></cardPublication>
                        <v-divider></v-divider>
                        <router-view></router-view>
                    </v-card>
                </v-flex>
                <v-flex xs2>
                    <v-speed-dial
                            bottom
                            right
                            direction="top"
                            hover
                            fixed
                    >
                        <v-btn
                                slot="activator"
                                color="blue darken-2"
                                dark
                                fab
                                hover
                        >
                            <v-icon>account_circle</v-icon>
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-btn
                                fab
                                dark
                                small
                                color="green"
                                @click.native="dialogPublication=true"
                        >
                            <v-icon>edit</v-icon>
                        </v-btn>
                        <v-btn
                                fab
                                dark
                                small
                                color="indigo"
                        >
                            <v-icon>add</v-icon>
                        </v-btn>
                        <v-btn
                                fab
                                dark
                                small
                                color="red"
                        >
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-speed-dial>
                </v-flex>
            </v-layout>
        </v-card>
        <v-navigation-drawer id="menu" :class="(darked) ? null: 'blue lighten-3'" permanent :dark="darked" :mini-variant.sync="drawer">
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img :src="user.avatar" />
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{user.name+" "+user.forename}}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.native.stop="drawer = !drawer">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list dense>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Dashboard</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to="/user" exact>
                        <v-list-tile-action>
                            <v-icon>home</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Home</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>email</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Box</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile :to="'/user/profile/'+user.id">
                        <v-list-tile-action>
                            <v-avatar
                                    size="30px"
                            >
                                <img :src="user.avatar" alt="avatar">
                            </v-avatar>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Profile</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>book</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Courses</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>Exercises</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>Tests</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>Programms</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>school</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Universities</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>Germany</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>Austria</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>Swiss</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>apps</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>More</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>whatshot</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Actualities</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>school</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Scholarship</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>forum</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Forum</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>settings</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Parameters</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile to="/user/account">
                        <v-list-tile-action>
                            <v-icon>person</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Account</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="logout">
                        <v-list-tile-action>
                            <v-icon>exit_to_app</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Log out</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-group>
                    <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                            <v-icon>settings_applications</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Application</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>bug_report</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Signal bug</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>info</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>About us</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>invert_colors</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <v-tooltip top>
                                    <v-switch slot="activator" v-model="darked"></v-switch>
                                    <span>Change the background color to black</span>
                                </v-tooltip>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-footer class="pa-3">
            <v-spacer></v-spacer>
            <div>Copyright © {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
    import cardPublication from '../card/CardPublication.vue'
    export default{
        components:{cardPublication},
        data(){
            return {
                darked: false,
                drawer: true,
                speedDial: false,
                dialogPublication: false
            }
        },
        computed:{
            user(){
                return this.$store.state.user.user
            },
            loading(){
                return this.$store.state.setting.loading
            }
        },
        methods:{
            logout(){
                this.$http.get('/log_out',).then(response => {
                    if (response.body.status === 1) {
                        this.$store.dispatch("user/delete")
                        this.$router.push('/')
                    }
                })
            }
        },
        mounted(){
            this.darked = this.$store.state.setting.darked
        },
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
        }
    }
</script>

<style scoped>
    .input-group--solo .input-group__input .input-group__append-icon{display:none !important}
</style>
<style>
    .menuCover{
        width:350px !important;
        height:200px !important;
    }
    .card__media__content{
        white-space: pre-line;
        margin-bottom: -4px;
        padding-left: 10px;
        margin-top: -4px;
        margin: -4px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    .card__media{
        color: rgba(255,255,255,1.00);
        font-size: 30px;
        line-height: 1.2000em;
        text-align: center;
        font-family: monospace
    }
    .blackForm .emojionearea{
        background-color: #424242 !important;
        color: white !important;
    }
    .blackForm .emojionearea-editor{
        color: white !important;
    }
    .emojionearea .emojionearea-picker .emojionearea-search > input{
        color: black;
    }
    .card--flex-toolbar {
        margin-top: 64px;
    }
    .application .theme--dark.toolbar, .theme--dark .toolbar{
        background-color: inherit;
    }
    #menu{
        margin-top:128.49px !important;
        position: fixed;
    }
    .background0{
        background-color: #ddd !important;
    }
    .background1{
        background-color: transparent !important;
        color: black !important;
        text-align: left !important;
    }
    .background2{
        background-color:rgba(0,244,255,1.00);background-image:-webkit-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(0,244,255,1.00) 0%),color-stop(rgba(17,55,173,1.00) 100%));background-image:linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background3{
        background-color:rgba(23,172,255,1.00);background-image:-webkit-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(102,244,133,1.00) 0%),color-stop(rgba(23,172,255,1.00) 100%));background-image:linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background4{
        background-color:rgba(5,174,53,1.00);background-image:-webkit-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(248,240,35,1.00) 0%),color-stop(rgba(5,174,53,1.00) 100%));background-image:linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background5{
        background-color:rgba(255,0,71,1.00);background-image:-webkit-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(255,0,71,1.00) 0%),color-stop(rgba(44,52,199,1.00) 100%));background-image:linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background6{
        background-color:rgba(115,33,173,1.00);background-image:-webkit-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-moz-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-ms-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-o-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-webkit-gradient(left top,right bottom,color-stop(rgba(115,33,173,1.00) 0%),color-stop(rgba(72,229,169,1.00) 100%));background-image:linear-gradient(135deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background7{
        background-color:rgba(167,183,216,1.00);background-image:-webkit-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(167,183,216,1.00) 0%),color-stop(rgba(22,24,29,1.00) 100%));background-image:linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%) !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background8{
        background-color:rgba(93,63,218,1.00);background-image:-webkit-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(252,54,253,1.00) 0%),color-stop(rgba(93,63,218,1.00) 100%));background-image:linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .background9{
        background: url(https://fb-s-b-a.akamaihd.net/h-ak-fbx/v/t39.10873-6/21624555_753398934860280_5226642317791723520_n.jpg?oh=5e66dc787dfbb00fa0fba58e552f6b47&oe=5ACE152C&__gda__=1522286412_69dab1e2c504c8b996f49800a61c1edd) center center / cover no-repeat !important;
        color: white !important;
        text-align: center !important;
        justify-content: center;
        flex-direction: column;
        font-size: 30px !important;
    }
    .backgroundSmall9{
        background: url(https://fb-s-a-a.akamaihd.net/h-ak-fbx/v/t39.10873-6/p32x32/21274785_753398928193614_2779422909477683200_n.jpg?oh=562d5b1b9d519375f9eca0af689328d1&oe=5ACE57F0&__gda__=1522048561_b99ec82924cf40a75352e7e8db4e84f9) center center / cover no-repeat !important
    }
</style>