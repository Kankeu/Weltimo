<template>
  <div>
    <v-select
    v-bind:items="levels"
    v-model="level"
    label="What is your level of knowledge of the German language"
    ></v-select>
    <div class="text-xs-center">
      <v-btn round outline color="primary" @click.stop="sendLevel" v-if="level!=='Beginner' && level && !corrected" dark>Start the language test</v-btn>
    </div>
    <v-btn color="primary" v-if="continuable" @click.native="next">Continue</v-btn>
       <v-dialog
      v-model="startTest"
      fullscreen
      transition="dialog-bottom-transition"
      :overlay="false"
      scrollable
    >
      <v-card>
          <v-toolbar style="flex: 0 0 auto;" dark class="primary">
          <v-btn icon @click.native="startTest = false" v-if="!corrected" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>language Test {{level}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
              <v-btn flat @click.native="correct" v-if="!corrected">Correct</v-btn>
              <v-btn flat @click.native="next" fab large dark v-else>
                  <v-icon>navigate_next</v-icon>
              </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
         <v-container fluid grid-list-md>
          <v-carousel :lazy="true" hide-delimiters :light="true" :cycle="false" v-if="exercises">
            <div class="note" :style="(note<exercises.length*0.6) ? 'color:#FF5252' : null " v-if="note!==null">
                {{note}}/{{exercises.length}}<br>
                <span v-if="note===exercises.length">excellent</span>
                <span v-else-if="note>=exercises.length*0.9">very good</span>
                <span v-else-if="note>=exercises.length*0.8">good</span>
                <span v-else-if="note>=exercises.length*0.7">pretty good</span>
                <span v-else-if="note>=exercises.length*0.6">sufficient</span>
                <span v-else-if="note<exercises.length*0.6">bad</span>
            </div>
            <v-carousel-item src="" v-for="(exercise,i) in exercises" :key="i">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs0 lg2>

                  </v-flex>
                  <v-flex xs12 lg8>
                  <v-layout v-if="exercise.just===1 || corrected && exercise.answers[exercise.response].just===1" justify-center>
                      <div>
                      <v-tooltip top>
                          <v-btn flat color="success" slot="activator" fab large dark>
                              <v-icon style="font-size: 50px">sentiment_very_satisfied</v-icon>
                          </v-btn>
                          <span>This answer ist right. congratulations</span>
                      </v-tooltip>
                    </div>
                  </v-layout>
                  <v-layout v-else-if="exercise.just===0 || corrected && exercise.answers[exercise.response].just===0" justify-center>
                      <div>
                          <v-tooltip top>
                              <v-btn flat color="error" slot="activator" fab large dark>
                                  <v-icon style="font-size: 50px">sentiment_very_dissatisfied</v-icon>
                              </v-btn>
                              <span>This answer ist wrong. Please try again</span>
                          </v-tooltip>
                      </div>
                  </v-layout>
                  <v-flex>{{exercise.sentence}}</v-flex>
                  <v-flex>
                    <v-radio-group  v-model="exercise.response" :row="$vuetify.breakpoint.smAndUp"  :column="!$vuetify.breakpoint.smAndUp">
                      <v-radio :label="answer.sentence" :color="color(answer,exercise.response,index)" v-for="(answer,index) in exercise.answers" :key="index" :value="index" ></v-radio>
                    </v-radio-group>
                  </v-flex>
                  </v-flex>
                  <v-flex xs0 lg2>

                  </v-flex>
                </v-layout>
              </v-container>
            </v-carousel-item>
          </v-carousel>
         </v-container>
        </v-card-text>
          <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
  export default {
    data: ()=>{
      return {
        levels:['Beginner','A1','A2','B1','B2','C1'],
        level: null,
        startTest:false,
        continuable: false,
        exercises: null,
        corrected: false,
        note: null,
          event:null,
      }
    },
    computed: {
        user(){
            return this.$store.state.user.user
        },
    },
    methods:{
      color(answer,response,index){
          if(this.corrected && answer.just===1){
              return 'success'
          }else if(this.corrected && response===index && answer.just === 0){
              return 'error'
          }
          return 'primary'
      },
      correct(){
          if(!this.exercises.find((exercise)=>exercise.response===undefined)){
              this.note = 0
              this.exercises.map((exercise)=>{
                  if(exercise.answers[exercise.response].just === 1){
                      exercise.just = 1
                      this.note++
                  }else{
                      exercise.just = 0
                  }
                  this.corrected = true
              })
          }
      },
      next(){
          this.startTest = false
          this.$emit("next")
      },
        sendLevel(){
            this.$emit("load")
            this.$http.put('/sign_in/'+this.user.id, {level:this.level}).then((response)=>{
                this.startTest = true
                this.exercises = (response.body.length>0) ? response.body : null
                this.$store.dispatch('user/update', {level:this.level})
                this.$emit("stop")
                this.bindEvent()
            })
        },
        bindEvent(){
            this.event = (event)=>{
                if(event.code === "ArrowRight"){
                    document.querySelector(".carousel__right button").click()
                }else if(event.code === "ArrowLeft"){
                    document.querySelector(".carousel__left button").click()
                }
            }
            window.addEventListener("keydown", this.event)
        }
    },
    watch:{
      level(data){
        if(data==="Beginner"){
            this.continuable = true
        }else{
            this.continuable = false
        }
      }
    },
      destroyed(){
          window.removeEventListener("keydown",this.event)
      }
  }
</script>

<style scoped lang="scss">
  .note{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    text-align: center;
    font-size: 50px;
    color:#1976D2;
    & span{
        font-size: 20px;
        text-transform: uppercase;
    }
  }
  .card__text{
    padding: 0 !important;
  }
</style>
