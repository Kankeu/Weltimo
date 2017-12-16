<template>
  <div>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs0 lg1>

            </v-flex>
            <v-flex xs12 lg10>
                <v-stepper v-model="step" class="elevation-10">
                    <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin: 0"></v-progress-linear>
                    <v-stepper-header>
                        <v-stepper-step step="1" :complete="step > 1">Step 1</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="2" :complete="step > 2">Step 2</v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="3">Step 3</v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <forminscription @next="next" @load="load" @stop="stop"></forminscription>
                        </v-stepper-content>
                        <v-stepper-content step="2">
                            <testniveau @next="next" @load="load" @stop="stop"></testniveau>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <setphoto @load="load" @stop="stop"></setphoto>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-flex>
            <v-flex xs0 lg1>

            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
  import testniveau from './Testniveau'
  import forminscription from './Forminscription'
  import setphoto from './Setphoto'
  export default {
    components: {testniveau,forminscription,setphoto},
    $validates: true,
    data: () => ({
        step:1,
        loading:false
    }),
    methods: {
        next(){
            this.step++
        },
        load(){
            this.loading = true
        },
        stop(){
            this.loading = false
        }
    },
  }
</script>