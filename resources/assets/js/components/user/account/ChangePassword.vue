<template>
    <v-form @submit.prevent="save">
        <v-text-field
                label="Last password"
                type="password"
                v-if="user.hasPassword"
                v-model.trim="data.lpassword"
                :error-messages="errors.collect('lPassword')"
                v-validate="'required'"
                data-vv-name="lPassword"
                data-vv-as="last password"
                name="lPassword"
        ></v-text-field>
        <v-text-field
                :label="user.hasPassword ? 'New password' : 'Password' "
                v-model.trim="data.password"
                type="password"
                :append-icon="visibility ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (visibility = !visibility)"
                :type="visibility ? 'text' : 'password'"
                :error-messages="errors.collect('password')"
                v-validate="'required|min:6'"
                data-vv-name="password"
                data-vv-as="new password"
                name="password"
        ></v-text-field>
        <v-text-field
                :label="user.hasPassword ? 'Confirm new password' : 'Confirm password'"
                type="password"
                v-model.trim="data.cPassword"
                :error-messages="errors.collect('cPassword')"
                v-validate="'required|confirmed:password'"
                data-vv-name="cPassword"
                data-vv-as="new password"
        ></v-text-field>
        <v-snackbar
                :timeout="6000"
                top
                right
                v-model="snackbar"
        >
            Password had been updated!
            <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
        <v-btn color="primary" style="margin: 0" type="submit">Save</v-btn>
    </v-form>
</template>

<script>
    export default{
        $validates: true,
        data: () => ({
            visibility:false,
            snackbar: false,
            data: {
                password:null,
                cPassword:null,
                lPassword:null,
            }
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            }
        },
        methods: {
            save(event) {
                this.$validator.validateAll().then((validated)=>{
                    if(validated){
                        let formdata = new FormData(event.target)
                        this.$http.put('user/'+this.user.id,formdata).then((response)=>{
                            this.snackbar = true
                            this.clear()
                        })
                    }
                })
            },
            clear(){
                this.data = {password:null, cPassword:null, lPassword:null}
                this.visibility = false
            }
        },
    }
</script>