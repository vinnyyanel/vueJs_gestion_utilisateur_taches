<template>
 <div>
    <h2>Salut {{ this.user.name }}, bienvenue dans ton gestionnaire de taches</h2>
  <div class="container">
    <h2>liste des taches</h2>
    <div class="addUser">
      <button @click="ajoutertache(this.id)" type="submit" class="btn btn-success" >ajouter</button>
    </div>
    <div class="decon">
      <button @click="deconnexion" type="submit" class="btn btn-success" >deconnection</button>
    </div>
    <table class="table table-bordered">
      <thead>
    <tr>
      <th>#</th>
      <th>Titre</th>
      <th>modifier</th>
      <th>suprimer</th>
      <th>details</th>
    </tr>
   </thead>
      <tbody>
        <tr v-for="(tache,numero) in taches" :key="tache.id">
          <td>{{ numero +1 }}</td>
          <td>{{ tache.titre }}</td>
            <td><button @click="modifier(tache.id)"  type="button" class="btn btn-warning">modifier</button>
          </td>
          <td>
            <button @click="supprimer(tache.id)" type="submit" class="btn btn-danger btn-sm" >supprimer</button>
          </td>
          <td>
            <button @click="details(tache.id)" type="submit" class="btn btn-info" >details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import router from '@/router';
import axios from 'axios';


export default {
    props:['id'],
    data(){
        return{
            taches:[],
            user:[],
            message:''
        };
    },
    methods:{
        ajoutertache(userId){
        router.push({ name: 'tache', params: { id: userId } });
    },
    modifier(tacheId){
        router.push({ name: 'modifierTache', params: { id: tacheId } });
    },
    details(tacheId){
      router.push({ name: 'detailsTache', params: { id: tacheId } });
    },
    getUser(userId) {
      axios.get(`http://localhost:8000/api/user/${userId}`)
        .then(response => {
          this.user = response.data;
          // Faites quelque chose avec les détails de l'utilisateur si nécessaire
          console.log(this.user);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
        });
    },
    fetchTache(){
        axios.get(`http://localhost:8000/api/hom/${this.id}`)
            .then(Response => {
                this.taches = Response.data;
                console.log(this.taches);
            })
            .catch(error => {
                console.error('erreur lors de la recup tache',error)
            })
    },
    supprimer(tacheId){
        axios.delete(`http://localhost:8000/api/tache/${tacheId}`)
        .then( response => {
                  
                  this.message = response.data;
                  console.log(this.message);
                  this.fetchTache();
              })
              .catch( error=>{
                  console.error('erreur lors de la suppressio',error);
              });

    },
    },
    mounted(){
        this.fetchTache();
        this.getUser(this.id);
    }

}
</script>

<style>
.decon{
    margin-left: 80%;
}

</style>