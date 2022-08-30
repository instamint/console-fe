import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_LIST_ASSETS = `${API_URL}/asset`
export const GET_DETAIL_ASSETS = (id) => `${API_URL}/asset/detail/${id}`
export const ADD_NOTE = `${API_URL}/note/add`
export const GET_LIST_NOTE = (id) => `${API_URL}/note/${id}`

// get all list assets
export function getListAsset(params) {
  let url = `${GET_LIST_ASSETS}?`
  if (params) {
    Object.keys(params).map((key) => {
      url += key + '=' + params[key] + '&'
    })
  }
  return axios.get(url)
}

export function getDetailAsset(id: string | number) {
  return axios.get(GET_DETAIL_ASSETS(id))
}

export function AddNote(note: string, assetId: string | number) {
  return axios.post(ADD_NOTE, {
    note: note,
    assetId: assetId,
  })
}

export function getListNote(id: string | number) {
  return axios.get(GET_LIST_NOTE(id))
}