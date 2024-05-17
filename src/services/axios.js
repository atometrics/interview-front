import axios from 'axios'
import qs from 'qs'

function paramsSerializer(params) {
  return qs.stringify(params, { arrayFormat: 'repeat' })
}

export const AXIOS = axios.create({
  baseURL: `/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: {
      toString() {
        return localStorage.token
      }
    }
  },
  paramsSerializer
})