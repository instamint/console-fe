import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/authentication/login`
export const REGISTER_URL = `${API_URL}/authentication/sign-up`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Login
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    username: email,
    password: password,
  })
}

// Get token user
export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}

// Server should return AuthModel
export function register(
  namespace: string,
  email: string,
  password: string,
  firstname: string,
  lastname: string,
) {
  return axios.post(REGISTER_URL, {
    namespace, 
    username: email,
    password,
    firstname,
    lastname,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}
