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
  },

  deleteMessage({ commit }, message) {
    return GuestbookService.deleteMessage(message)
      .then(() => {
        commit('DELETE_MESSAGE', message.id)
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
  },
  DELETE_MESSAGE(state, messageId) {
    state.messages = state.messages.filter(message => message.id !== messageId)
  }
}

export const getters = {
  messages: state => state.messages
}
