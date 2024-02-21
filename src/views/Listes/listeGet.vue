<template>
  
  <div class="container">
    <h2>liste des utilisateurs</h2>
    <div class="addUser">
      <button @click="ajouterUser" type="submit" class="btn btn-success" >ajouter</button>
    </div>
    <div class="decon">
      <button @click="deconnexion" type="submit" class="btn btn-success" >deconnection</button>
    </div>
    <table class="table table-bordered">
      <thead>
    <tr>
      <th>#</th>
      <th>Nom</th>
      <th>email</th>
      <th>password</th>
      <th>modifier</th>
      <th>suprimer</th>
      <th>details</th>
      <th>ajouter tache</th>
    </tr>
   </thead>
      <tbody>
        <tr v-for="(user,numero) in users" :key="user.id">
          <td>{{ numero +1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
            <td><button @click="modifier(user.id)"  type="button" class="btn btn-warning">modifier</button>
          </td>
          <td>
            <button @click="supprimer(user.id)" type="submit" class="btn btn-danger btn-sm" >supprimer</button>
          </td>
          <td>
            <button @click="details(user.id)" type="submit" class="btn btn-info" >details</button>
          </td>
          <td>
            <button @click="ajoutertache(user.id)" type="submit" class="btn btn-info" >ajoutertache</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router'
export default {
  data() {
    return {
      users:{},
      teste:0
    };
  },
  methods: {
    deconnexion(){
      // Exemple de déconnexion côté client avec Axios
  axios.post('http://localhost:8000/api/logout')
      .then(response => {
        this.message = response.data;
          // Gérer la réponse (peut-être afficher un message)
          console.log(this.message);

          // Supprimer le token côté client
          localStorage.removeItem('token');

          // Rediriger vers la page de connexion ou toute autre page appropriée
          console.log('redirection vers conn');
          router.push({ name: 'connexion' });
      })
      .catch(error => {
          // Gérer les erreurs
          console.error('Erreur lors de la déconnexion :', error);
      });
    },
    ajouterUser() {
      router.push({ name: 'creer' });
    },
    ajoutertache(userId){
        router.push({ name: 'tache', params: { id: userId } });
    },
    modifier(userId) {
      router.push({ name: 'modifier', params: { id: userId } });
    },
    details(userId){
      router.push({ name: 'show', params: { id: userId } });
    },
    fetchUser(){
      axios.get('http://localhost:8000/api/user')
      .then(response => {
        this.users = response.data; 
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
    },
    supprimer(userId) {
      axios.delete(`http://localhost:8000/api/user/${userId}`)
                .then( response => {
                  
                    this.message = response.data;
                    console.log(this.message);
                    this.fetchUser();
                })
                .catch( error=>{
                    console.error('erreur lors de la suppressio',error);
                });

      
    },
  },
  mounted() {
    this.fetchUser();

  },
  
}
</script>

<style>
 
</style>

