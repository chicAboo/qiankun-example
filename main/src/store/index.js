import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    routes: [],
  },
  getters: {
    routes: (state) => {
      return state.routes
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROUTES: (state, routes) => {
      state.routes = [...state.routes, ...routes]
    },
  },
  actions: {},
  modules: {},
})
