<template>
    <v-card :dark="darked">
        <v-card-title>
            {{users.length}} Users
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
                v-bind:items="users"
                v-bind:search="search"
        >
            <tr slot="items" style="cursor: pointer" slot-scope="props">
                <td>
                    <v-edit-dialog
                            @click="open(props.item)"
                            lazy
                    > {{ props.item.name }}
                        <v-text-field
                                slot="input"
                                label="Edit"
                                v-model="props.item.name"
                                single-line
                                counter
                                :rules="[max25chars]"
                        ></v-text-field>
                    </v-edit-dialog>
                </td>
                <td class="text-xs-right" @click="open(props.item)">{{ props.item.forename }}</td>
                <td class="text-xs-right" @click="open(props.item)">{{ props.item.email }}</td>
                <td class="text-xs-right" @click="open(props.item)">{{ props.item.level }}</td>
                <td class="text-xs-right" @click="open(props.item)">{{ props.item.avatar }}</td>
                <td class="text-xs-right" @click="open(props.item)">{{ props.item.cover }}</td>
                <td class="text-xs-right">
                    <v-edit-dialog
                            @open="tmp = props.item.confirmated"
                            @save="props.item.confirmated = tmp || props.item.confirmated"
                            large
                            lazy
                    >
                        <div>{{ props.item.confirmated }}</div>
                        <div slot="input" class="mt-3 title">Update confirmated</div>
                        <v-text-field
                                slot="input"
                                label="Edit"
                                v-model="tmp"
                                single-line
                                counter
                                autofocus
                                :rules="[max25chars]"
                        ></v-text-field>
                    </v-edit-dialog>
                </td>
                <td class="text-xs-right" @click="open(props.item)"><timeago :since="props.item.created_at" :auto-update="86400" :max-time="86400 * 365"></timeago></td>
                <td class="text-xs-right" @click="open(props.item)"><timeago :since="props.item.updated_at" :auto-update="86400" :max-time="86400 * 365"></timeago></td>
            </tr>
            <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                From {{ pageStart }} to {{ pageStop }}
            </template>
        </v-data-table>
        <dialog-user :users="users" :user="user" :open="openDialogUser" @close="openDialogUser=!openDialogUser" ></dialog-user>
    </v-card>
</template>

<script>
    import dialogUser from './users/DialogUser.vue'
    import store from './users/Store.js'
    export default {
        components:{dialogUser},
        computed:{
            darked(){
                return this.$store.state.setting.darked
            },
            users(){
                return store.get("users")
            }
        },
        data () {
            return {
                openDialogUser: false,
                max25chars: (v) => v.length <= 25 || 'Input too long!',
                tmp: '',
                search: '',
                pagination: {},
                headers: [
                    {text: 'Name', value: 'name', align: 'left'},
                    {text: 'Forename', value: 'forename'},
                    { text: 'Email', value: 'email' },
                    { text: 'Level', value: 'level' },
                    { text: 'Avatar', value: 'avatar' },
                    { text: 'Cover', value: 'cover' },
                    { text: 'Confirmated', value: 'confirmated' },
                    { text: 'Created at', value: 'created_at' },
                    { text: 'Updated at', value: 'updated_at' },
                ],
                store: store,
                user: {}
            }
        },
        methods:{
            open(user){
                this.openDialogUser = true
                this.user = user
            }
        },
        mounted(){
            this.$http.get('/admin/user').then(response=>{
                this.store.addUser(response.body)
            })
        }
    }
</script>