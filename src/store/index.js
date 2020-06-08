import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: false,
    usuario: {
      nome: "",
      bio: "",
      avatar: "",
      repositorios: [],
    },
  },
  mutations: {
    UPDATE_USUARIO(state, payload) {
      state.status = true;
      state.usuario = payload;
    },
  },
  actions: {
    preencherObjUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", payload);
    },
  },
});
