import Vue from 'vue'
import Vuex from 'vuex'
import * as guestbook from './modules/guestbook'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    guestbook
  }
})
