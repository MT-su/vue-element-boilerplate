import {
  get,
  post
} from '@/lib/http.js'

const getList = (params) => {
  return get('/api/blog/list', params)
}
const login = (params) => {
  return post('/api/user/login', params)
}

export default {
  getList,
  login
}
