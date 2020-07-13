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
      .then(response => {
        commit('ADD_MESSAGE', response.data)
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
  },

  editMessage({ commit }, message) {
    return GuestbookService.editMessage(message).then(response => {
      commit('EDIT_MESSAGE', response.data)
    })
  }
}

export const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
  },
  ADD_MESSAGE(state, message) {
    state.messages.unshift(message)
  },
  DELETE_MESSAGE(state, messageId) {
    state.messages = state.messages.filter(message => message.id !== messageId)
  },
  EDIT_MESSAGE(state, message) {
    state.messages = state.messages.map(m => {
      if (m.id === message.id) {
        m = message
      }
      return m
    })
  }
}

export const getters = {
  messages: state => state.messages
}
