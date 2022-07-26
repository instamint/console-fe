import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_LIST_CONTRACTS = `${API_URL}/ethereum-contract`

export const getListContracts = async (params): Promise<any> => {
  let url = `${GET_LIST_CONTRACTS}?`
  if (params) {
    Object.keys(params).map((key) => {
      url += key + '=' + params[key] + '&'
    })
  }
  return axios.get(url)
}