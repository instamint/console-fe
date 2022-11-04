import checkErrorsType from '../../../../utils/errors-type'
import {AuthModel} from './_models'

const AUTH_LOCAL_STORAGE_KEY = 'kt-auth-react-v'
const getAuth = (): AuthModel | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
  if (!lsValue) {
    return
  }

  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel
    if (auth) {
      // You can easily check auth_token expiration also
      return auth
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}

const setAuth = (auth: AuthModel) => {
  if (!localStorage) {
    return
  }

  try {
    const lsValue = JSON.stringify(auth)
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeAuth = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}

const logoutApp = () => {
  removeAuth()
  if (window.location.pathname !== '/auth' && window.location.pathname !== '/auth/login') {
    window.location.href = '/auth/login'
  }
}

export function setupAxios(axios: any) {
  const token = process.env.REACT_APP_TOKEN_API
  console.log('token', token)
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config: {headers: {Authorization: string}}) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (err: any) => Promise.reject(err)
  )
  axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error?.response?.status) {
        checkErrorsType(error?.response?.status)
      } 
      return Promise.reject(error)
    }
  )
}

export {getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY, logoutApp}
