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
  }
}

export const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
  }
}

export const getters = {
  messages: state => state.messages
}
