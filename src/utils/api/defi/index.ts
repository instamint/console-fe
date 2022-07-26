import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL_DEFI
const API_URL_ORIGIN = process.env.REACT_APP_API_URL

export const GET_LIST_DEFI = (platform) => `${API_URL}/pools/${platform}`
export const GET_INFO_POOL_V2 = (id) =>
  `https://algoindexer.algoexplorerapi.io/v2/applications/${id}`
export const GET_INFO_POOL_V3 = (id) =>
  `https://app.yieldly.finance/staking/pools/v3/${id}`
export const GET_TOKEN_PRICE = (name) => `https://app.yieldly.finance/getTokenPrice/${name}`
export const LIQUIDITY_POOL = `${API_URL}/create-pools`
export const GET_DATA_CHART_TVL = `${API_URL_ORIGIN}/timeServiceSnapShoot`

export const getListDefi = async (platform: string): Promise<any> => {
  return axios.get(GET_LIST_DEFI(platform))
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

export const createLiquidityPool = async (params: any): Promise<any> => {
  const response = await axios.post<any>(LIQUIDITY_POOL, params)
  return response.data
}

export const getDataChartTVL = async (params: any): Promise<any> => {
  let url = `${GET_DATA_CHART_TVL}?`
  if (params) {
    Object.keys(params).map((key) => {
      url += key + '=' + params[key] + '&'
    })
  }
  return axios.get(url)
}

