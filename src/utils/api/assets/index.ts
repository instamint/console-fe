import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_LIST_ASSETS = `${API_URL}/asset`

// get all list assets
export function getListAsset() {
  return axios.get(GET_LIST_ASSETS)
}