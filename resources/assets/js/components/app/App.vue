
<template>
  <v-app id="inspire">
      <v-toolbar
              clipped-left
              fixed
              style="box-shadow: none;background-color: black;opacity:.5;color: white;height: 60px"
      >
          <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
              <span class="hidden-xs-only">Weltimo</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
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
    import VeeValidate from 'vee-validate'
    Vue.use(VeeValidate)
    import route from "../route/Route"
    export default {
        components:{route},
        data: () => ({
            dialogLog_on: false,
            visibility: false,
            error: null,
            loading: false,
            alertLogin: true,
            data:{
                email:null,
                password:null
            },
        }),
        methods:{
            login(){
                this.$validator.validateAll().then((validated) => {
                    if (validated) {
                        this.loading = true
                        this.$http.post('/log_in', this.data).then(response => {
                            if (response.body.id) {
                                this.dialogLog_on = false
                                window.location.href = window.location.host
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
        },
    }
</script>

<style scoped>
    .input-group--solo .input-group__input .input-group__append-icon{display:none !important}
</style>
