import GuestbookService from '@/services/GuestbookService'

export const namespaced = true

export const state = {
  messages: []
}

export const actions = {
  fetchMessages({ commit }) {
    return GuestbookService.getMessages()
      .then(response => {
        commit('SET_MESSAGES', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },

  addMessage({ commit }, message) {
    return GuestbookService.addMessage(message)
      .then(() => {
        commit('ADD_MESSAGE', message)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
  },
  ADD_MESSAGE(state, message) {
    state.messages.push(message)
  }
}

export const getters = {
  messages: state => state.messages
}
