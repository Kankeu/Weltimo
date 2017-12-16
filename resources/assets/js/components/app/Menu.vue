<template>
    <v-navigation-drawer
            fixed
            clipped
            app
            v-model="menuDrawer"
    >
        <v-list v-if="connected===1">
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
                <v-list-tile @click="">
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
                <v-list-tile @click="$emit('logout')">
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
                                <v-switch slot="activator" v-model="modeNuit"></v-switch>
                                <span>Change the background color to black</span>
                            </v-tooltip>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-group>
        </v-list>
        <v-list dense v-else>
            <v-list-tile to="/" exact>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/sign_in">
                <v-list-tile-action>
                    <v-icon>account_circle</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Sign in</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/actus">
                <v-list-tile-action>
                    <v-icon>whatshot</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Actuality</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/about">
                <v-list-tile-action>
                    <v-icon>info</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>About us</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>invert_colors</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        <v-tooltip top>
                            <v-switch slot="activator" v-model="modeNuit"></v-switch>
                            <span>Change the background color to black</span>
                        </v-tooltip>
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default{
        props:{
            connected: Number,
            drawer: Boolean
        },
        data(){
            return {
                modeNuit:false,
                menuDrawer: null,
            }
        },
        computed:{
            user(){
                return this.$store.state.user.user
            }
        },
        watch:{
            modeNuit(){
                this.$emit("invert_colors")
            },
            menuDrawer(data){
                this.$emit("drawer",data)
            },
            drawer(data){
                this.menuDrawer = data
            }
        }
    }
</script>
