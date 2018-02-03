<template>
    <v-layout column>
        <v-flex>
            <v-card class="elevation-0">
                <v-toolbar class="elevation-0" style="background:transparent">
                    <v-avatar
                            @click="$router.push('profile/'+user.id)"
                            style="cursor: pointer;margin-left: 10px;margin-right: 10px"
                            size="40px"
                    >
                        <img :src="user.avatar" alt="avatar">
                    </v-avatar>
                    <div>
                        {{"  "+user.name+" "+user.forename+"  "}}
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            @click="userDelete=true"
                            outline
                    >
                        <v-icon>delete</v-icon>Delete
                    </v-btn>
                    <v-menu>
                        <v-btn flat slot="activator" icon>
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                        <v-list>
                            <v-list-tile  @click="">
                                <v-list-tile-action>
                                    <v-icon>edit</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>Edit</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </v-toolbar>
                <v-divider></v-divider>
                <div style="padding: 10px">

                </div>
            </v-card>
        </v-flex>
        <v-dialog v-model="userDelete" max-width="290">
            <v-card>
                <v-progress-linear v-bind:indeterminate="true" v-if="loading" style="margin:0"></v-progress-linear>
                <v-card-title class="headline">Deleting the User</v-card-title>
                <v-card-text>
                    Are you sure you want to delete this User?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat="flat" @click.native="userDelete = false">Cancel</v-btn>
                    <v-btn color="primary" flat="flat" @click.native="destroy">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import store from './Store'
    export default{
        props:{
            user: Object
        },
        data(){
            return {
                loading:false,
                userDelete: false
            }
        },
        computed:{
            darked(){
                return this.$store.state.setting.darked
            }
        },
        methods:{
            destroy(){
                this.$http.delete('/admin/user/'+this.user.id).then(response=>{
                    if(response.body.status === 1){
                        store.deleteUser(this.user.id)
                    }
                })
            }
        }
    }
</script>