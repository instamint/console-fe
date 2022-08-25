import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const GET_LIST_POOLS = `${API_URL}/portfolio`
export const ADD_POOL = `${API_URL}/portfolio/add`

export const getListPools = async (): Promise<any> => {
  const response = await axios.get<any>(GET_LIST_POOLS)
  return response.data
}

export const createPool = async (pool_name: string, list_assets_id: Array<string | number>): Promise<any> => {
  const response = await axios.post<any>(ADD_POOL, {
    name: pool_name,
    assetIds: list_assets_id,
  })
  return response.data
}