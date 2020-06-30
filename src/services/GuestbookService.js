import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getMessages() {
    return apiClient.get('/messages')
  },
  addMessage(message) {
    return apiClient.post('/messages', message)
  }
}
