<template>
    <div>
        <v-form>
            <v-text-field
                    label="Name"
                    v-model.trim="data.name"
                    :error-messages="errors.collect('name')"
                    v-validate="'required'"
                    data-vv-name="name"
                    required
            ></v-text-field>
            <v-text-field
                    label="Forename"
                    v-model.trim="data.forename"
                    :error-messages="errors.collect('forename')"
                    v-validate="'required'"
                    data-vv-name="forename"
                    value="dfsdf"
                    required
            ></v-text-field>
            <v-text-field
                    label="E-mail"
                    v-model.trim="data.email"
                    :error-messages="errors.collect('email')"
                    v-validate="'required|email'"
                    data-vv-name="email"
                    required
            ></v-text-field>
            <v-text-field
                    label="Password"
                    v-model.trim="data.password"
                    type="password"
                    :append-icon="visibility ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (visibility = !visibility)"
                    :type="visibility ? 'text' : 'password'"
                    :error-messages="errors.collect('password')"
                    v-validate="'required|min:6'"
                    data-vv-name="password"
                    name="password"
                    required
            ></v-text-field>
            <v-text-field
                    label="Password"
                    type="password"
                    v-model.trim="data.cPassword"
                    :error-messages="errors.collect('cPassword')"
                    v-validate="'required|confirmed:password'"
                    data-vv-name="cPassword"
                    data-vv-as="password"
                    required
            ></v-text-field>
        </v-form>
        <v-btn color="primary" @click.native="save">Continue</v-btn>
        <v-btn @click.native="clear" flat>Cancel</v-btn>
    </div>
</template>

<script>
    export default{
        $validates: true,
        data: () => ({
            visibility:false,
            data:{
                name:null,
                forename:null,
                email: null,
                password:null,
                cPassword:null,
            }
        }),
        computed:{
            user(){
                return this.$store.state.user.user
            }
        },
        methods: {
            save() {
                this.$validator.validateAll().then((validated)=>{
                    if(validated){
                        delete this.data.cPassword
                        this.$http.put('user/',this.user.id).then((response)=>{
                            if(response.body.id){
                                this.$store.dispatch("user/update", response.body)
                                this.clear()
                            }
                        })
                    }
                })
            },
            clear () {
                this.data.name = null
                this.data.forename = null
                this.data.email = null
                this.data.password = null
                this.data.cPassword = null
                this.$validator.clean()
            },
        },
    }
</script>

