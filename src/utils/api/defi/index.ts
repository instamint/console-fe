import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL_DEFI

export const GET_LIST_DEFI = `${API_URL}/pools`

export const getListDefi = async (): Promise<any> => {
  return axios.get(GET_LIST_DEFI)
}