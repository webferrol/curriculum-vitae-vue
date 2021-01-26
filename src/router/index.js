import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/work-experience',
    name: 'WorkExperience',
    component: () => import('../views/WorkExperience.vue')
  },
  {
    path: '/projects/:id?', //la interrogación es importante. Si no se pone la página aparece en blanco si no recibe el parámetro id
    name: 'projects',
    component: () => import('../views/Projects.vue')
  }
]

const router = new VueRouter({
  mode: 'history',//para quitar el slash de las rutas
  routes
})

export default router
