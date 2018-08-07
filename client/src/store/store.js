import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    name: null,
    islogged: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.islogged = true
      } else {
        state.islogged = false
      }
    },
    setName (state, name) {
      state.name = name
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setName ({commit}, name) {
      commit('setName', name)
    }
  }
})
