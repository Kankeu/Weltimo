<template>
    <v-app id="inspire" :dark="darked">
        <v-navigation-drawer
                fixed
                clipped
                app
                v-model="drawer"
        >
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
                            <v-icon>report</v-icon>
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
        <v-toolbar
                color="primary"
                dark
                app
                clipped-left
                fixed
        >
            <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-xs-only">Weltimo</span>
            </v-toolbar-title>
            <v-flex lg6 xs6>
                <v-select
                        light
                        solo
                        placeholder="Search"
                        prepend-icon="search"
                        autocomplete
                ></v-select>
            </v-flex>
            <div class="d-flex align-center" style="margin-left: auto">
                <v-btn icon>
                    <v-icon>notifications</v-icon>
                </v-btn>
            </div>
        </v-toolbar>
        <v-content>
            <route></route>
        </v-content>
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
                drawer: null
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
        }
    }
</script>

<style scoped>
    .input-group--solo .input-group__input .input-group__append-icon{display:none !important}
</style>