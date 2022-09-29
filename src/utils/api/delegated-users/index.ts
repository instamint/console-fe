import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_DELEGATED_USERS = `${API_URL}/delegated-user`

export const getDelegatedUser = async (): Promise<any> => {
  return axios.get(GET_DELEGATED_USERS)
}