import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serverInfo: 'NOT LOADED'
  },
  mutations: {
    SET_SERVER_INFO (state, { serverInfo }) {
      state.serverInfo = serverInfo
    }
  },
  actions: {
    loadServerInfo ({ commit }) {
      axios.get('/info')
        .then(function (response) {
          commit('SET_SERVER_INFO', { serverInfo: response.data })
        })
        .catch(function (error) {
          commit('SET_SERVER_INFO', { serverInfo: 'ERROR:' + JSON.stringify(error) })
        })
    }
  }
})
