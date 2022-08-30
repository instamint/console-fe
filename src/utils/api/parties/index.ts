import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_LIST_PARTIES = `${API_URL}/party`
export const GET_PARTIE_DETAIL = (id) => `${API_URL}/party/detail/${id}`

// get all list parties
export function getListParties(params) {
  let url = `${GET_LIST_PARTIES}?`
  if (params) {
    Object.keys(params).map((key) => {
      url += key + '=' + params[key] + '&'
    })
  }
  return axios.get(url)
}

export function getPartieDetail(id) {
  return axios.get(GET_PARTIE_DETAIL(id))
}
