import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  beurt: 1,
  player1: {
    name: 'Rick',
    value: 501
  },
  player2: {
    name: 'Sem',
    value: 501
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
