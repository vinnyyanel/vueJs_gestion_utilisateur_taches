<template>
    <div class="container">
     <h2>details sur la tache</h2> 
     <div class="info">
         <p>Titre: {{ tache.titre}}</p>
         <p>Description: {{ tache.description}}</p>
         <p>Date de la creation: {{ tache.created_at}}</p>
         <p>date de la derniere modification: {{ tache.updated_at}}</p>
     </div>
    </div>
 </template>
 
 <script>
 import axios from 'axios';
 export default {
     props: ['id'],
     data(){
         return {
             tache:[]
         };
     },
     methods:{
    fetchtacheDetails(tacheId) {
       axios.get(`http://localhost:8000/api/tache/${tacheId}`)
         .then(response => {
           this.tache = response.data;
           // Faites quelque chose avec les détails de l'utilisateur si nécessaire
           console.log(this.user);
         })
         .catch(error => {
           console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
         });
     }
 },
     mounted(){
         this.fetchtacheDetails(this.id);
     }
 
 }
 </script>
 
 <style>
 
 </style>