<template>
    <div style="margin-top: 20px">
        <v-tabs centered>
            <v-tabs-bar class="cyan" dark>
                <v-tabs-slider class="yellow"></v-tabs-slider>
                <v-tabs-item
                        href="#profile"
                >
                    Edit Profile
                </v-tabs-item>
                <v-tabs-item
                        href="#password"
                >
                    Change Password
                </v-tabs-item>
            </v-tabs-bar>
            <v-tabs-items>
                <v-tabs-content
                        id="profile"
                >
                    <v-card flat>
                        <v-card-text>
                            <edit-profile></edit-profile>
                        </v-card-text>
                    </v-card>
                </v-tabs-content>
                <v-tabs-content
                        id="password"
                >
                    <v-card flat>
                        <v-card-text>
                            <change-password></change-password>
                        </v-card-text>
                    </v-card>
                </v-tabs-content>
            </v-tabs-items>
        </v-tabs>
    </div>
</template>

<script>
    import editProfile from './account/EditProfile.vue'
    import changePassword from './account/ChangePassword.vue'
    export default{
        components:{editProfile,changePassword},
        computed:{
            user(){
                return this.$store.state.user.user
            }
        },
    }
</script>

