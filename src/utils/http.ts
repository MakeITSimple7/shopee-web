import axios, { type AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify';

class Http {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Add a response interceptor
    this.instance.interceptors.response.use(
      function(response: any) {
        return response
      }, function(error: any) {
        if (error.response.status != HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        console.log(error)
        return Promise.reject(error)
      })
  }
}

const http = new Http().instance

export default http