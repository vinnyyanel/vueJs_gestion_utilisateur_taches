<template>
  <div class="container">
    <div class="form">
    <form  @submit.prevent="SubmitForm">
  <div class="row mb-3">
    <label for="inputName3" class="col-sm-2 col-form-label">nom:</label>
    <div class="col-sm-10">
      <input type="text" v-model="name" class="form-control" id="inputName3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10">
      <input type="email" v-model="email" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">mot de passe:</label>
    <div class="col-sm-10">
      <input type="password" v-model="password" class="form-control" id="inputPassword3">
    </div>
  </div>
  <button type="submit" class="btn btn-info">s'inscrire</button>
</form>
</div>
  </div>
</template>

<script>

import router from '@/router';
import axios from 'axios';

export default {
    data(){
            return {
                name:'',
                email:'',
                password:'',
                message:[],
            }
        },
        
    methods:{
        
    fetchData (formData){
      console.log(formData);
        axios.post('http://localhost:8000/api/user', formData)
        .then(response => {
          // Gérez la réponse du backend (redirection, affichage de messages, etc.)
          this.message=response.data;
          console.log(this.message);
          router.push({name:'Liste'});
          
        })
        .catch(error => {
          // Gérez les erreurs, par exemple, afficher un message à l'utilisateur
          console.error('Erreur lors de l\'inscription:', error);
        });
    },

        SubmitForm(){
            const formData={
            name:this.name,
            email:this.email,
            password:this.password,
        }
        console.log('submit form');
        console.log(this.name);
        this.fetchData(formData);
        
        }
    },
    
    }

</script>

<style>

    .container{
        border: 1px;
        border-style: solid;
        border-radius: 20px;
        border-color: aquamarine;
        width: 55%;
        margin-top: 10%;
        background-color: azure;
        
    }
    .form{
        align-content: center;
    }
</style>