
<template>
  <v-app id="inspire" :dark="darked">
      <v-navigation-drawer
              fixed
              clipped
              app
              v-model="drawer"
      >
          <v-list dense>
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
                              <v-switch slot="activator" v-model="darked"></v-switch>
                              <span>Change the background color to black</span>
                          </v-tooltip>
                      </v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-navigation-drawer>
      <v-toolbar
              :color="(darked) ? null: 'primary'"
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
              <v-dialog scrollable v-model="dialogLog_on" max-width="300px">
                  <v-btn @click.native="loginWithToken" slot="activator" icon>
                      <v-icon>person</v-icon>
                  </v-btn>
                  <v-card>
                      <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
                      <v-card-title>
                          <span class="headline">Log in</span>
                      </v-card-title>
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
                                                    required></v-text-field>
                                  </v-flex>
                                  <v-flex xs12>
                                      <v-text-field label="Password" type="password"
                                                    :append-icon="visibility ? 'visibility' : 'visibility_off'"
                                                    :append-icon-cb="() => (visibility = !visibility)"
                                                    :type="visibility ? 'text' : 'password'"
                                                    :error-messages="errors.collect('password')"
                                                    v-validate="'required|min:6'"
                                                    data-vv-name="password"
                                                    v-model.trim="data.password"
                                                    required></v-text-field>
                                  </v-flex>
                              </v-layout>
                          </v-container>
                      </v-card-text>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" flat @click.native="dialogLog_on = false">Close</v-btn>
                          <v-btn color="blue darken-1" flat @click.native="login">Save</v-btn>
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
  </v-app>
</template>

<script>
    import route from "../route/Route"
    export default {
        components:{route},
        data: () => ({
            drawer: null,
            dialogLog_on: false,
            visibility: false,
            darked:false,
            error: null,
            loading: false,
            alertLogin: true,
            data:{
                email:null,
                password:null
            },
        }),
        methods:{
            loginWithToken(){
                this.$http.get('/log_in').then(response=>{
                    if (response.body.id) {
                        this.$store.dispatch("user/save", response.body)
                        this.$router.push('/user')
                    }else{
                        this.dialogLog_on = true
                    }
                })
            },
            login(){
                this.$validator.validateAll().then((validated) => {
                    if (validated) {
                        this.loading = true
                        this.$http.post('/log_in', this.data).then(response => {
                            if (response.body.id) {
                                this.$store.dispatch("user/save", response.body)
                                this.$store.dispatch("users/save", response.body)
                                this.dialogLog_on = false
                                this.$router.push('/user')
                            }else if(response.body.status === 0){
                                this.error = response.body.message
                                this.alertLogin = true
                            }
                            this.loading = false
                        })
                    }
                })
            },
        },
        mounted(){
            this.darked = this.$store.state.setting.darked
        },
        watch:{
            darked(){
                this.$store.dispatch('setting/invertcolor')
            }
        }
    }
</script>

<style scoped>
    .input-group--solo .input-group__input .input-group__append-icon{display:none !important}
</style>
