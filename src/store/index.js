import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enlacesMenuPrincipal: [
      {texto: 'Home', enlace: '/'},
      {texto: 'Sobre', enlace: '/about'},
      {texto: 'Experiencia laboral', enlace: '/work-experience'},
      {texto: 'Proyectos', enlace: '/projects'}
    ]
  },
  getters:{
    getMenuPrincipal: (state) => state.enlacesMenuPrincipal
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
