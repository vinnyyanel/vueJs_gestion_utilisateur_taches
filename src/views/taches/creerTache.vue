<template>
  <div class="container">
    <div class="info">
        <h2>creer taches</h2>
    </div>
    <div class="form">
    <form  @submit.prevent="submitForm">
  <div class="row mb-3">
    <label for="inputtitre3" class="col-sm-2 col-form-label">Titre:</label>
    <div class="col-sm-10">
      <input type="text" v-model="titre" class="form-control" id="inputtitre3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputdescription3" class="col-sm-2 col-form-label">Description:</label>
    <div class="col-sm-10">
      <input type="text" v-model="description" class="form-control" id="inputdescription3" required>
    </div>
  </div>
  <button type="submit" class="btn btn-info">creer</button>
</form>
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
            titre:'',
            description:'',
            message:''
        }
    },
    methods:{
        creerTache(tache){
            axios.post(`http://localhost:8000/api/tache`,tache)
                .then(Response => {
                    this.message = Response.data;
                    console.log(this.message);
                    router.push({name:'dashboard', params: { id: this.id }});
                })
                .catch(error=>{
                    console.error('Erreur lors de la creation de la tache:', error);
                });
            
        },
        submitForm(){
            const tache = {
                titre:this.titre,
                description:this.description,
                user_id:this.id
            };
            this.creerTache(tache);
        }
    }

}
</script>

<style>

</style>