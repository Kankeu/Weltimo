<template>
    <v-card class="elevation-0" style="height: 100%;width: 100%">
        <v-toolbar class="elevation-0" style="background: none">
            <v-toolbar-title class="text-xs-center">Activities</v-toolbar-title>
        </v-toolbar>
        <v-layout row wrap justify-space-between>
            <v-flex lg6>
                <v-layout column>
                    <v-flex>
                        <v-btn flat color="primary" @click="openDialogJob=true">Jobs</v-btn>
                    </v-flex>
                    <v-flex>
                        <v-progress-circular
                                v-bind:size="100"
                                v-bind:width="15"
                                v-bind:rotate="360"
                                v-bind:value="this.jobs.length*100"
                                color="primary"
                        >
                            {{ this.jobs.length }}
                        </v-progress-circular>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex lg6>
                <v-layout style="align-items: flex-end;" column>
                    <v-flex>
                        <v-btn flat color="red" @click="openDialogFailedJob=true">Failed Jobs</v-btn>
                    </v-flex>
                    <v-flex>
                        <v-progress-circular
                                v-bind:size="100"
                                v-bind:width="15"
                                v-bind:rotate="360"
                                v-bind:value="this.failedJobs.length*100"
                                color="red"
                        >
                            {{ this.failedJobs.length }}
                        </v-progress-circular>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <job :jobs="jobs" :open="openDialogJob" @close="openDialogJob=!openDialogJob"></job>
        <failed-job :failedJobs="failedJobs" :open="openDialogFailedJob" @close="openDialogFailedJob=!openDialogFailedJob"></failed-job>
    </v-card>
</template>

<script>
    import job from './home/Job.vue'
    import failedJob from './home/FailedJob.vue'
    export default{
        components:{failedJob,job},
        data(){
            return {
                failedJobs: [],
                jobs: [],
                openDialogFailedJob: false,
                openDialogJob: false
            }
        },
        methods:{

        },
        mounted(){
            this.$http.get('/admin/queue/failedJob').then(response=>{
                this.failedJobs = response.body
            })
            this.$http.get('/admin/queue/job').then(response=>{
                this.jobs = response.body
            })
        }
    }
</script>

<style scoped>
    .progress-circular{
        margin: 1em;
    }
</style>