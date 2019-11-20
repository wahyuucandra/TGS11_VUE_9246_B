<template>
        <v-app>
            <v-content>
                <v-container class="fill-height" fluid>
                    <v-row  justify="center">
                        <v-col cols="8" md="8">
                            <v-card>
                                <v-img :src="require('@/assets/login.svg')">
                                <v-row>
                                    <v-col cols="5">
                                    </v-col>
                                    <v-col cols="6" >
                                        <div class="header" >
                                            <div id="title">
                                                Login
                                            </div>
                                        </div>
                                        <div class="form">
                                            <v-text-field
                                                v-model="form.email"
                                                label="Email"
                                                filled
                                                rounded
                                                prepend-inner-icon="mdi-human-male"
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="form.password"
                                                label="Password"
                                                filled
                                                rounded
                                                dense
                                                prepend-inner-icon="mdi-shield-lock"
                                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="show1 ? 'text' : 'password'"
                                                @click:append="show1 = !show1"
                                            ></v-text-field>
                                                <v-btn @click="login()" block color="warning" class="elevation-0" height=40>Login</v-btn>
                                        </div>
                                    </v-col>
                                    
                                </v-row>
                                </v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
        </v-app>
</template>

<script>
export default {
    data(){
        return {
            form : {
                email: null, 
                password: null,
            },
            user : new FormData,
        }
    },
    methods:{
        login(){
            var url = this.$apiUrl + '/auth'
            this.user = new FormData()
            this.user.append('email',this.form.email);
            this.user.append('password',this.form.password);
            this.$http.post(url,this.user).then(response =>{
                if(response.data.token){
                    localStorage.setItem("token" , response.data.token)
                this.$router.push({ name : "UserController"})
                }else{
                    alert('Login Gagal')
                }
            })
        }
    }

}
</script>

<style>
.gelap{
    min-height: 100%;
    -webkit-filter: brightness(50%);
    background-position: center;
}

.form{
    background-color: aquamarine;
    margin-left: -206px;
    margin-top: 50px;
    margin-bottom: 120px;
    width:500px;
    height:300px;
    color: black;
}
</style>