import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  beurt: 1,
  player1: {
    name: '',
    value: 501,
    history: [],
    last: 999,
    wins: 0
  },
  player2: {
    name: '',
    value: 501,
    history: [],
    last: 999,
    wins: 0
  },
  player3: {
    name: '',
    value: 501,
    history: [],
    last: 999,
    wins: 0
  },
  player4: {
    name: '',
    value: 501,
    history: [],
    last: 999,
    wins: 0
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
