import http from './http'
export default {
  say() {
    return http.get('/user/list')
  }
}