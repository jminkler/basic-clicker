import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalScore: 0,
    currentScore: 0,
    towers: {
      grandmas: 0
    }
  },
  mutations: {
    increment (state, cookies) {
      state.totalScore += cookies
      state.currentScore += cookies
    },
    addTower (state, tower) {
      state.towers['grandmas'] += tower.grandma 
    },
    buy (state, cost) {
      state.currentScore -= cost
    }
  },
  actions: {
    bakeCookie({commit}, cookies) {
      if (!cookies) { cookies = 1}
      commit('increment', cookies)
    },

    buyGrandma ({commit}, cost) {
      commit('addTower', {grandma: 1})
      commit('buy', cost)
    }
  }
})
