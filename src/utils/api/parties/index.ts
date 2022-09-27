import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_LIST_PARTIES = `${API_URL}/party`
export const GET_PARTIE_DETAIL = (id) => `${API_URL}/party/detail/${id}`

// get all list parties
export function getListParties() {
  return axios.get(GET_LIST_PARTIES)
}

export function getPartieDetail(id) {
  return axios.get(GET_PARTIE_DETAIL(id))
}
