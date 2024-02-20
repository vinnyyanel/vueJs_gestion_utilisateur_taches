import { createRouter, createWebHistory } from 'vue-router'
import Liste from '../views/Listes/listeGet.vue'
import creerUserVue from '@/views/Listes/creerUser.vue'
import updateUserVue from '@/views/Listes/updateUser.vue'
import showUserVue from '@/views/Listes/showUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
    }
  ]
})

export default router
