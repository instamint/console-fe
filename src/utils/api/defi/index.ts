import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL_DEFI

export const GET_LIST_DEFI = `${API_URL}/pools`
export const GET_INFO_POOL_V2 = (id) =>
  `https://algoindexer.algoexplorerapi.io/v2/applications/${id}`
export const GET_INFO_POOL_V3 = (id) =>
  `https://app.yieldly.finance/staking/pools/v3/${id}`
export const GET_TOKEN_PRICE = (name) => `https://app.yieldly.finance/getTokenPrice/${name}`


export const getListDefi = async (): Promise<any> => {
  return axios.get(GET_LIST_DEFI)
}

export const getInfoPoolV2 = async (id: string | number): Promise<any> => {
  return axios.get(GET_INFO_POOL_V2(id))
}

export const getInfoPoolV3 = async (id: string | number): Promise<any> => {
  return axios.get(GET_INFO_POOL_V3(id))
}

export const getTokenPrice = async (name: string): Promise<any> => {
  return axios.get(GET_TOKEN_PRICE(name))
}
