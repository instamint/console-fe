import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_LIST_PARTIES = `${API_URL}/party`

// get all list parties
export function getListParties() {
  return axios.get(GET_LIST_PARTIES)
}
