import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://192.168.1.120:8081/DEV/hs/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/getEvents')
  },
}
