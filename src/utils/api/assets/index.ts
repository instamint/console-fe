import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_LIST_ASSETS = `${API_URL}/asset`
export const GET_DETAIL_ASSETS = (id) => `${API_URL}/asset/detail/${id}`
export const ADD_NOTE = `${API_URL}/note/add`
export const GET_LIST_NOTE = (id) => `${API_URL}/note/${id}`
export const GET_LIST_BID_HISTORY = (id) => `${API_URL}/bid-history/${id}`
export const GET_LIST_AUCTION_TYPE = `${API_URL}/auction_type`
export const CREATE_AUCTION = (id) => `${API_URL}/asset/auction/${id}`
export const END_AUCTION = (id) => `${API_URL}/asset/end-auction/${id}`

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

export function getListNote(id: string | number, params) {
  let url = `${GET_LIST_NOTE(id)}?`
  if (params) {
    Object.keys(params).map((key) => {
      url += key + '=' + params[key] + '&'
    })
  }
  return axios.get(url)
}

export function getListAuctionType() {
  return axios.get(GET_LIST_AUCTION_TYPE)
}

export const createAuction = async (params): Promise<any> => {
  const response = await axios.post<any>(CREATE_AUCTION(params?.id), params)
  return response.data
}

export const endAuction = async (id: string | number): Promise<any> => {
  const response = await axios.patch<any>(END_AUCTION(id))
  return response.data
}

export function getListBidHistory(id: string | number, params) {
  let url = `${GET_LIST_BID_HISTORY(id)}?`
  if (params) {
    Object.keys(params).map((key) => {
      url += key + '=' + params[key] + '&'
    })
  }
  return axios.get(url)
}