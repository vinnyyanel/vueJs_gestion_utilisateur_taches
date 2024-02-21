import { createRouter, createWebHistory } from 'vue-router'
import Liste from '../views/Listes/listeGet.vue'
import creerUserVue from '@/views/Listes/creerUser.vue'
import updateUserVue from '@/views/Listes/updateUser.vue'
import showUserVue from '@/views/Listes/showUser.vue'
import connexionVue from '@/views/connexion/connexion.vue'
import listTache from '@/views/taches/listTache.vue'
import creerTache from '@/views/taches/creerTache.vue'
import modifierTache from '@/views/taches/updateTache.vue'
import detailsTache from '@/views/taches/showTache.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Liste',
      component: Liste
    },
    {
      path:'/inscription',
      name:'creer',
      component: creerUserVue
    },
    {
      path:'/modifier/:id',
      name:'modifier',
      component:updateUserVue,
      props:true
    },
    {
      path:'/show/:id',
      name:'show',
      component:showUserVue,
      props:true
    },
    {
      path:'/',
      name: 'connexion',
      component: connexionVue
    },
    {
      path:'/dashboard/:id',
      name: 'dashboard',
      component: listTache,
      props:true
    },
    {
      path:'/tache/:id',
      name: 'tache',
      component: creerTache,
      props:true
    },
    {
      path:'/modifierTache/:id',
      name: 'modifierTache',
      component: modifierTache,
      props:true
    },
    {
      path:'/detailsTache/:id',
      name: 'detailsTache',
      component: detailsTache,
      props:true
    },
  ]
})

export default router
