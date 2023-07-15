import axios from 'axios'


const service = axios.create({
  baseURL: '',
  timeout: 20000
})

// request interceptor
// response interceptor


export default service
