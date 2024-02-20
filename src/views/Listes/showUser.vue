<template>
   <div class="container">
    <h2>details sur l'utilisateur</h2> 
    <div class="info">
        <p>Nom: {{ user.name}}</p>
        <p>Email: {{ user.email}}</p>
        <p>passport: {{ user.password}}</p>
    </div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['id'],
    data(){
        return {
            user:[]
        };
    },
    methods:{
    fetchUserDetails(userId) {
      axios.get(`http://localhost:8000/api/user/${userId}`)
        .then(response => {
          this.user = response.data;
          // Faites quelque chose avec les détails de l'utilisateur si nécessaire
          console.log(this.user);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
        });
    }
},
    mounted(){
        this.fetchUserDetails(this.id);
    }

}
</script>

<style>

</style>