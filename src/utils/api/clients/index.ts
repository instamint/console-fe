import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_LIST_CLIENTS = `${API_URL}/client`
export const CHANGE_REVOKED = (id) => `${API_URL}/client/change-revoked/${id}`

export const getListClients = async (params): Promise<any> => {
  let url = `${GET_LIST_CLIENTS}?`
  if (params) {
    Object.keys(params).map((key) => {
      url += key + '=' + params[key] + '&'
    })
  }
  return axios.get(url)
}

export const changeRevoked = async (id: string | number) => {
  return axios.patch(CHANGE_REVOKED(id))
}