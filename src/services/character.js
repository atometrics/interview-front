import { AXIOS } from '@/services/axios.js'

export function getCharacters(filters) {
  return AXIOS.get(`/characters`, {params: filters})
}