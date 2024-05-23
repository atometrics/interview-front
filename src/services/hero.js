import { AXIOS } from '@/services/axios.js'

export function getHeroes(filters) {
  return AXIOS.get(`/heroes`, {params: filters})
}