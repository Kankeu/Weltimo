<template>
    
    <v-app :dark="darked">
         <v-card :dark="darked"  :color="(darked) ? null :'grey lighten-5'" flat>
            <v-toolbar :dark="darked"  :color="(darked) ? null : 'primary'" prominent fixed flat extended>
            <v-toolbar-side-icon class="white--text" @click="drawer=!drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">Weltimo</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="white--text"><v-icon>notifications</v-icon></v-btn>
            </v-toolbar>
            <v-layout row>
            <v-flex xs8 offset-xs2>
                <v-card :dark="darked" class="card--flex-toolbar">
                <v-toolbar dark card :color="(darked) ? null : 'white'" style="z-index:2;width:66.66666666666666%;position:fixed" prominent>
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
                <v-divider></v-divider>
                <route></route>
                <v-card-text></v-card-text>
                </v-card>
            </v-flex>
            </v-layout>
        </v-card>
         <v-navigation-drawer id="menu" permanent :dark="darked" :mini-variant.sync="drawer">
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
                <v-list-group value="true">
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
                    <v-list-tile to="/user/profile">
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
                    <v-list-tile @click="">
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
    import route from '../route/Route.vue'

    export default{
        components:{route},
        data(){
            return {
                darked: false,
                drawer: true
            }
        },
        computed:{
            user(){
                return this.$store.state.user.user
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
        watch:{
            darked(data){
                console.log(data)
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
    .card--flex-toolbar {
        margin-top: 64px;
    }
    #menu{
        margin-top:128.49px !important;
        position: fixed;
    }
</style>