import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enlacesMenuPrincipal: [
      {id: 1, texto: 'Home', enlace: '/'},
      {id: 2, texto: 'Sobre', enlace: '/about'},
      {id: 3, texto: 'Experiencia laboral', enlace: '/work-experience'},
      {id: 4, texto: 'Proyectos', enlace: '/projects'}
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
