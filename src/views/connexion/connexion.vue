<template>
    
  <div class="container">
    <div class="form">
    <form  @submit.prevent="verification">
  <div class="row mb-3">
    <label for="inputName3" class="col-sm-2 col-form-label">nom:</label>
    <div class="col-sm-10">
      <input type="text" v-model="name" class="form-control" id="inputName3" required>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">mot de passe:</label>
    <div class="col-sm-10">
      <input type="password" v-model="password" class="form-control" id="inputPassword3" required>
    </div>
  </div>
  <div class="conn">
    <button type="submit" class="btn btn-info">se connecter</button>
</div>
</form>
</div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
export default {
    data(){
        return {
            name:'',
            password:'',
            message:'',
            user:[]
        }
    },
    methods:{
        verification(){
            const formData ={
                name:this.name,
            password:this.password
            };
        axios.post(`http://localhost:8000/api/login`, formData)
        .then(response => {
          // Gérez la réponse du backend (redirection, affichage de messages, etc.)
        this.message = response.data;
        const token = this.message.token;
        const user = this.message.user;

          localStorage.setItem('token',token);
          router.push({name:'dashboard',params:{id:user.id}});
          
        })
        .catch(error => {
          // Gérez les erreurs, par exemple, afficher un message à l'utilisateur
          console.error('Erreur lors de la connexion:', error);
         });
        }
    }

}
</script>

<style>
.conn{
    margin-left: 50%;
}
</style>