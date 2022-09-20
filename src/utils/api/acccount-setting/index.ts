import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_DATA_PROFILE = `${API_URL}/client/profile`

export const getDataProfile = async (): Promise<any> => {
  const response = await axios.get<any>(GET_DATA_PROFILE)
  return response.data
}
