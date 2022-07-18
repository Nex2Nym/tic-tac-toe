import Vue from 'vue'
import Vuex from 'vuex'
import { mainStore } from './modules/mainStore'
import { gameBoard } from './modules/gameBoard'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    mainStore,
    gameBoard
  }
})
