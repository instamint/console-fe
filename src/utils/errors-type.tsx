import {logoutApp} from '../app/modules/auth'

export default function checkErrorsType(type) {
  switch (type) {
    case 401:
      logoutApp()
      return
    case 403:
      logoutApp()
      return
    case 404:
      window.location.href = '/error/404'
      return
  }
}