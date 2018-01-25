<template>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon @click.native="dialog = false" dark>
                    <v-icon>close</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click.native="confirmRestart = true">restart <v-icon>refresh</v-icon></v-btn>
                </v-toolbar-items>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click.native="confirmRun = true">run</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-card>
                <v-card-title>
                    {{jobs.length}} Jobs
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
                        v-bind:items="jobs"
                        v-bind:search="search"
                >
                    <tr slot="items" style="cursor: pointer" slot-scope="props">
                        <td>
                            <v-edit-dialog
                                    lazy
                            > {{ props.item.id }}
                            </v-edit-dialog>
                        </td>
                        <td class="text-xs-right">{{ props.item.queue }}</td>
                        <td class="text-xs-right">{{ props.item.payload }}</td>
                        <td class="text-xs-right">{{ props.item.attempts }}</td>
                        <td class="text-xs-right"><timeago :since="props.item.reserved_at" :auto-update="86400" :max-time="86400 * 365"></timeago></td>
                        <td class="text-xs-right"><timeago :since="props.item.available_at" :auto-update="86400" :max-time="86400 * 365"></timeago></td>
                        <td class="text-xs-right"><timeago :since="props.item.created_at" :auto-update="86400" :max-time="86400 * 365"></timeago></td>
                    </tr>
                    <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                        From {{ pageStart }} to {{ pageStop }}
                    </template>
                </v-data-table>
            </v-card>
        </v-card>
        <v-dialog v-model="confirmRun" max-width="290">
            <v-card>
                <v-card-title class="headline">Queue system</v-card-title>
                <v-card-text>
                    Are you sure you want to run the queue?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat="flat" @click.native="confirmRun = false">Cancel</v-btn>
                    <v-btn color="primary" flat="flat" @click.native="run">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="confirmRestart" max-width="290">
            <v-card>
                <v-card-title class="headline">Queue system</v-card-title>
                <v-card-text>
                    Are you sure you want to restart the queue?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat="flat" @click.native="confirmRestart = false">Cancel</v-btn>
                    <v-btn color="primary" flat="flat" @click.native="restart">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-dialog>
</template>

<script>
    export default {
        props:{
            jobs: Array,
            open: Boolean
        },
        data () {
            return {
                dialog: false,
                max25chars: (v) => v.length <= 25 || 'Input too long!',
                tmp: '',
                search: '',
                pagination: {},
                confirmRun: false,
                confirmRestart: false,
                headers: [
                    {
                        text: 'Id',
                        align: 'left',
                        sortable: false,
                        value: 'id'
                    },
                    { text: 'Queue', value: 'queue' },
                    { text: 'Payload', value: 'payload' },
                    { text: 'Attempts', value: 'attempts' },
                    { text: 'Reserved at', value: 'reserved_at' },
                    { text: 'Available at', value: 'available_at' },
                    { text: 'Created_at', value: 'created_at' },
                ],
            }
        },
        methods:{
            run(){
                this.$http.get('/admin/queue/run')
                this.confirmRun = false
            },
            restart(){
                this.$http.get('/admin/queue/restart')
                this.confirmRestart = false
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