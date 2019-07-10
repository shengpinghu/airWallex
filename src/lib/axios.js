import axios from 'axios'

class HttpRequest {
 
 
 
  interceptors (instance) {
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
     // const { data } = res
      return res
    }, error => {
      return Promise.reject(error.response.data)
    })
  }
  request (options) {
    const instance = axios.create()
    this.interceptors(instance)
    return instance(options)
  }
}
export default HttpRequest
