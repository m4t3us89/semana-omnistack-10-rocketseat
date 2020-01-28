import axios from 'axios'

const api = axios.create({
  baseURL: 'http://20.14.2.183:3000'
})

export default api
