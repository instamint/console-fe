import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_LIST_CONTRACTS = `${API_URL}/ethereum-contract`

export const getListContracts = async (): Promise<any> => {
  const response = await axios.get<any>(GET_LIST_CONTRACTS)
  return response.data
}