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
    ],
    formacionAcademica:[],
    etiquetasProfesionales: []
  },
  getters:{
    getMenuPrincipal: (state) => state.enlacesMenuPrincipal
  },
  mutations: {
    obtenerFormacionAcademica(state,getFormacionAcademica){
      state.formacionAcademica = getFormacionAcademica;
    },
    getEtiquetasProfesionales(state,getEtiquetasProfesionales){
      state.etiquetasProfesionales = getEtiquetasProfesionales.etiquetas_profesionales;
    }
  },
  actions: {
    getFormacionAcademica: function({commit}){
      fetch('https://raw.githubusercontent.com/webferrol/json/master/formacion-academica.json')
      .then(data=>data.json())
      .then(obj=>obj.formacion_academica)
      .then(array=>{
        //console.log(array)
        commit('obtenerFormacionAcademica',array);
      })
      .catch(error=>console.log(error));
    },
    async getEtiquetasProfesionales(context){
      const datos = await fetch('https://raw.githubusercontent.com/webferrol/json/master/formacion-academica.json');
      context.commit('getEtiquetasProfesionales',await datos.json());
    }
  },
  modules: {
  }
})
