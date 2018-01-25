<template>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon @click.native="dialog = false" dark>
                    <v-icon>close</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click.native="confirmRetryAll = true">retry all <v-icon>refresh</v-icon></v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-card>
                <v-card-title>
                    {{failedJobs.length}} Failed Jobs
                    <v-spacer></v-spacer>
                    <v-text-field
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                            v-model="search"
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        v-bind:headers="headers"
                        v-bind:items="failedJobs"
                        v-bind:search="search"
                >
                    <tr slot="items" style="cursor: pointer" @click="confirmRetry=true;job=props.item" slot-scope="props">
                        <td>
                            <v-edit-dialog
                                    lazy
                            > {{ props.item.id }}
                            </v-edit-dialog>
                        </td>
                        <td class="text-xs-right">{{ props.item.connection }}</td>
                        <td class="text-xs-right">{{ props.item.queue }}</td>
                        <td class="text-xs-right">{{ props.item.payload }}</td>
                        <td class="text-xs-right">{{ props.item.exception }}</td>
                        <td class="text-xs-right"><timeago :since="props.item.failed_at" :auto-update="86400" :max-time="86400 * 365"></timeago></td>
                    </tr>
                    <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                        From {{ pageStart }} to {{ pageStop }}
                    </template>
                </v-data-table>
            </v-card>
        </v-card>
        <v-dialog v-model="confirmRetryAll" max-width="290">
            <v-card>
                <v-card-title class="headline">Queue system</v-card-title>
                <v-card-text>
                    Are you sure you want to retry all the jobs?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat="flat" @click.native="confirmRetryAll = false">Cancel</v-btn>
                    <v-btn color="primary" flat="flat" @click.native="retryAll">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="confirmRetry" max-width="290">
            <v-card>
                <v-card-title class="headline">Queue system</v-card-title>
                <v-card-text>
                    Are you sure you want to retry this job?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat="flat" @click.native="confirmRetry = false">Cancel</v-btn>
                    <v-btn color="primary" flat="flat" @click.native="retry">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-dialog>
</template>

<script>
    export default {
        props:{
            failedJobs: Array,
            open: Boolean
        },
        data () {
            return {
                dialog: false,
                max25chars: (v) => v.length <= 25 || 'Input too long!',
                tmp: '',
                search: '',
                confirmRetryAll: false,
                job: null,
                confirmRetry: false,
                pagination: {},
                headers: [
                    {
                        text: 'Id',
                        align: 'left',
                        sortable: false,
                        value: 'id'
                    },
                    { text: 'Connection', value: 'connection' },
                    { text: 'Queue', value: 'queue' },
                    { text: 'Payload', value: 'payload' },
                    { text: 'Exception', value: 'exception' },
                    { text: 'Failed at', value: 'failed_at' },
                ],
            }
        },
        methods:{
            retry(){
                this.$http.get('/admin/queue/retry/'+this.job.id)
                this.confirmRetry = false
            },
            retryAll(){
                this.$http.get('/admin/queue/retry')
                this.confirmRetryAll = false
            }
        },
        watch:{
            open(data){
                if(data) this.dialog = data
            },
            dialog(data){
                if(!data) this.$emit("close")
            }
        }
    }
</script>

<style>
    .text-xs-right{
    max-width: 300px !important;
    overflow:auto !important;
    }
</style>