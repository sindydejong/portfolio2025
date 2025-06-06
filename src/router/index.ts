import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {   return { top: 0 }  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
     {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
      {
      path: '/project/:name',
      name: 'ProjectDetail',
      component: () => import('../views/ProjectDetailView.vue'),
      props: true // Hiermee worden route-params als props doorgegeven aan ProjectDetailView
    },

  ]
})

export default router
