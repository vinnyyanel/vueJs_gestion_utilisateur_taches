<template>
  <div class="container">
    <h2>informations</h2>
    <div class="info" v-if="message">
        <span>{{ message }}</span>
    </div>
    <div class="form">
    <form  @submit.prevent="submitForm">
  <div class="row mb-3">
    <label for="inputName3" class="col-sm-2 col-form-label">nom:</label>
    <div class="col-sm-10">
      <input type="text" v-model="user.name" class="form-control" id="inputName3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10">
      <input type="email" v-model="user.email" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">mot de passe:</label>
    <div class="col-sm-10">
      <input type="password" v-model="user.password" class="form-control" id="inputPassword3" >
    </div>
  </div>
  <button type="submit" class="btn btn-info">modifier</button>
</form>
</div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
export default {
    props:['id'],
    data(){
        return {
            user:[],
            message:''
        }
    },
    methods:{
        getUser(userId){
                axios.get(`http://localhost:8000/api/user/${userId}`)
                .then(response => {
                    this.user = response.data;
                })
                .catch( error => {
                    console.log('erreur lors de la recuperation de l user',error);
                });
            
        },
        updateUser(userId,userUpdate){
            console.log('update user');
            axios.put(`http://localhost:8000/api/user/${userId}`,userUpdate)
                .then( response => {
                    this.message = response.data;
                    this.$router.push('/home');
                })
                .catch( error=>{
                    console.error('erreur lors de la modification',error);
                });

        },

        submitForm(){
            const userUpdate={
                name:this.user.name,
                email:this.user.email,
                password:this.user.password,
            };
            console.log('submitform');
            console.log(userUpdate);
            this.updateUser(this.id,userUpdate);
        }

    },
    mounted(){
        this.getUser(this.id);
        //this.info;
    }
}
</script>

<style>

</style>