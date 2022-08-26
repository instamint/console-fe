import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GENERATE_API_KEY = `${API_URL}/api_keys/generate`

export const generateApiKey = async (chooseScopes: Object): Promise<any> => {
  const response = await axios.post<any>(GENERATE_API_KEY, chooseScopes)
  return response.data
}