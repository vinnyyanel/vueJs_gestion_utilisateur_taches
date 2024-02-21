<template>
    <div class="container">
      <h2>informations</h2>
      <div class="info" v-if="message">
          <span>{{ message }}</span>
      </div>
      <div class="form">
      <form  @submit.prevent="submitForm">
    <div class="row mb-3">
      <label for="inputTitre3" class="col-sm-2 col-form-label">Titre:</label>
      <div class="col-sm-10">
        <input type="text" v-model="tache.titre" class="form-control" id="inputTitre3">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Description:</label>
      <div class="col-sm-10">
        <input type="text" v-model="tache.description" class="form-control" id="inputEmail3">
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
              tache:[],
              message:''
          }
      },
      methods:{
          getTache(tacheId){
                  axios.get(`http://localhost:8000/api/tache/${tacheId}`)
                  .then(response => {
                      this.tache = response.data;
                  })
                  .catch( error => {
                      console.log('erreur lors de la recuperation de l user',error);
                  });
              
          },
          updateTache(tacheId,tacheUpdate){
              console.log('update tache');
              axios.put(`http://localhost:8000/api/tache/${tacheId}`,tacheUpdate)
                  .then( response => {
                      this.message = response.data;
                      this.$router.push({name:'dashboard', params: { id: this.tache.user_id }});
                  })
                  .catch( error=>{
                      console.error('erreur lors de la modification',error);
                  });
  
          },
  
          submitForm(){
              const tacheUpdate={
                  titre:this.tache.titre,
                  description:this.tache.description,
                  user_id:this.tache.user_id,
              };
              console.log('submitform');
              console.log(tacheUpdate);
              this.updateTache(this.id,tacheUpdate);
          }
  
      },
      mounted(){
          this.getTache(this.id);
          //this.info;
      }
  }
  </script>
  
  <style>
  
  </style>