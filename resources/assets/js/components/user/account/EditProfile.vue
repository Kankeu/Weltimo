<template>
    <v-form @submit.prevent="save">
        <v-text-field
                label="Name"
                v-model.trim="user.name"
                :error-messages="errors.collect('name')"
                v-validate="'required'"
                data-vv-name="name"
                name="name"
        ></v-text-field>
        <v-text-field
                label="Forename"
                name="forename"
                v-model.trim="user.forename"
                :error-messages="errors.collect('forename')"
                v-validate="'required'"
                data-vv-name="forename"
                class="input-group--focused"
        ></v-text-field>
        <v-text-field
                label="E-mail"
                name="email"
                v-model.trim="user.email"
                :error-messages="errors.collect('email')"
                v-validate="'required|email'"
                data-vv-name="email"
        ></v-text-field>
        <v-text-field
                label="Who I am?"
                name="title"
                v-model.trim="user.title"
                data-vv-name="title"
                counter="50"
                maxlength="50"
        ></v-text-field>
        <v-text-field
                name="biography"
                label="Biography"
                v-model.trim="user.biography"
                counter="300"
                maxlength="300"
                textarea
        ></v-text-field>
        <v-snackbar
                :timeout="6000"
                top
                right
                v-model="snackbar"
        >
            Profile had been updated!
            <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
        <v-btn color="primary" type="submit" style="margin: 0">Save</v-btn>
    </v-form>
</template>

<script>
    export default{
        $validates: true,
        data: ()=>({
            snackbar: false
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
                            if(response.body.id){
                                this.$store.dispatch("user/update", response.body)
                                this.snackbar = true
                            }
                        })
                    }
                })
            },
        },
    }
</script>