import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:5250/admin/api/'
})

export default http