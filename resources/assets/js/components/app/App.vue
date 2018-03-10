
<template>
    <v-app id="inspire">
        <v-toolbar
                clipped-left
                fixed
                style="box-shadow: none;background-color: black;opacity:.5;color: white;height: 60px"
        >
            <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px;align-self: flex-end;'" class="ml-0 pl-3">
                <span>Weltimo</span>
            </v-toolbar-title>
            <v-spacer v-if="$vuetify.breakpoint.smAndUp"></v-spacer>
            <v-toolbar-items>
                <v-list style="display: flex;background-color: transparent;">
                    <v-list-tile to="/" exact>
                        <v-list-tile-content style="color: white;">
                            <v-list-tile-title>Home</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile to="/sign_in">
                        <v-list-tile-content style="color: white;">
                            <v-list-tile-title>Sign in</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="dialogLog_on=true">
                        <v-list-tile-content style="color: white;">
                            <v-list-tile-title>Log in</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar-items>
            <div class="d-flex align-center" style="margin-left: auto">
                <v-dialog scrollable v-model="dialogLog_on" max-width="300px">
                    <v-card>
                        <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
                        <v-card-title>
                            <span class="headline" v-if="isPasswordReset">Password Reset</span>
                            <span class="headline" v-else-if="isPasswordForgot">Password Forgot</span>
                            <span class="headline" v-else>Log in</span>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-alert color="error" icon="warning" v-if="error" v-model="alertLogin" outline dismissible>
                                {{error}}
                            </v-alert>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12>
                                        <v-text-field label="Email"
                                                      :error-messages="errors.collect('email')"
                                                      v-validate="'required|email'"
                                                      data-vv-name="email"
                                                      v-model.trim="data.email"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex  v-if="isPasswordReset" xs12>
                                        <v-text-field
                                                label="New password"
                                                v-model.trim="data.password"
                                                type="password"
                                                :append-icon="visibility ? 'visibility' : 'visibility_off'"
                                                :append-icon-cb="() => (visibility = !visibility)"
                                                :type="visibility ? 'text' : 'password'"
                                                :error-messages="errors.collect('password')"
                                                v-validate="'required|min:6'"
                                                data-vv-name="password"
                                                data-vv-as="new password"
                                                name="password"
                                                @keyup.13.prevent.stop="save"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex  v-if="!isPasswordForgot" xs12>
                                        <v-text-field label="Password" type="password"
                                                      :append-icon="visibility ? 'visibility' : 'visibility_off'"
                                                      :append-icon-cb="() => (visibility = !visibility)"
                                                      :type="visibility ? 'text' : 'password'"
                                                      :error-messages="errors.collect('password')"
                                                      v-validate="'required|min:6'"
                                                      data-vv-name="password"
                                                      v-model.trim="data.password"
                                                      @keyup.13.prevent.stop="login"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <a href="/#/password/forgot" style="text-decoration: none" v-if="!isPasswordForgot">I have my password forgot!</a>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-card-actions v-if="isPasswordReset">
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat to="/" exact>Cancel</v-btn>
                            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                        </v-card-actions>
                        <v-card-actions v-else-if="isPasswordForgot">
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat to="/" exact>Cancel</v-btn>
                            <v-btn color="blue darken-1" flat @click.native="sendEmail">Send</v-btn>
                        </v-card-actions>
                        <v-card-actions v-else>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click.native="dialogLog_on = false">Close</v-btn>
                            <v-btn color="blue darken-1" flat @click.native="login">Log in</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </v-toolbar>
        <v-content>
            <route></route>
        </v-content>
        <v-footer class="pa-3">
            <v-spacer></v-spacer>
            <div>Copyright © {{ new Date().getFullYear() }}</div>
        </v-footer>
        <v-snackbar
                :timeout="6000"
                top
                right
                v-model="snackbar"
        >
            {{text}}
            <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>
    import VeeValidate from 'vee-validate'
    Vue.use(VeeValidate)
    import route from "../route/Route"
    export default {
        $validates: true,
        components:{route},
        data: () => ({
            isPasswordForgot: false,
            isPasswordReset: false,
            snackbar: false,
            token: null,
            text: '',
            dialogLog_on: false,
            visibility: false,
            error: null,
            loading: false,
            alertLogin: true,
            data:{
                email:null,
                password:null,
            },
        }),
        methods:{
            login(){
                this.$validator.validateAll().then((validated) => {
                    if (validated) {
                        this.loading = true
                        this.$http.post('/login', this.data).then(response => {
                            if (response.body.id) {
                                this.dialogLog_on = false
                                window.location.href =  window.location.protocol+window.location.host
                                window.location.reload()
                            }else if(response.body.status === 0){
                                this.error = response.body.message
                                this.alertLogin = true
                            }
                            this.loading = false
                        })
                    }
                })
            },
            sendEmail(){
                this.$validator.validateAll().then((validated) => {
                    if (validated) {
                        this.loading = true
                        this.$http.post('/password/email', this.data).then(response => {
                            if (response.body.id) {
                                this.text = "A recovery email has been sent to your mailbox!"
                                this.snackbar = true
                            }else if(response.body.status === 0){
                                this.error = response.body.message
                                this.alertLogin = true
                            }
                            this.loading = false
                        })
                    }
                })
            },
            save(){
                this.$validator.validateAll().then((validated) => {
                    if (validated) {
                        this.loading = true
                        let data = this.data
                        data['token'] = this.token
                        data['password_confirmation'] = this.data.password
                        this.$http.post('/password/reset', data).then(response => {
                            this.dialogLog_on = false
                            window.location.href = window.location.protocol+window.location.host
                            window.location.reload()
                            this.clear()
                            this.loading = false
                        })
                    }
                })
            },
            clear(){
                this.data = {
                    email:null,
                    password:null,
                }
            }
        },
        mounted(){
            if(this.$route.params.token){
                this.token = this.$route.params.token
                this.dialogLog_on = true
                this.isPasswordForgot = true
                this.isPasswordReset = true
            }else if(this.$route.fullPath==='/password/forgot'){
                this.dialogLog_on = true
                this.isPasswordForgot = true
            }
            this.text = "This site uses cookies to personalize content, to provide social media features and to analyze traffic to the site."
            this.snackbar = true
        },
        watch:{
            '$route.params.token'(token){
                this.token = token
                this.dialogLog_on = true
                this.isPasswordForgot = true
                this.isPasswordReset = true
            },
            '$route.fullPath'(url){
                if(url==='/password/forgot'){
                    this.dialogLog_on = true
                    this.isPasswordForgot = true
                }else if(url==='/'){
                    this.isPasswordForgot = false
                    this.isPasswordReset = false
                }
            }
        }
    }
</script>

<style scoped>
    .input-group--solo .input-group__input .input-group__append-icon{display:none !important}
</style>
