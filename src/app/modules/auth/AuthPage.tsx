/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {Registration} from './components/Registration'
import BackgroundImage from '../../images/background-login.png'

import LogoIstamint from '../../images/instamint.png'

const AuthPage = () => {
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  return (
    <>
      <div className='d-flex flex-column flex-root' id='kt_app_root'>
        <div className='d-flex flex-column flex-lg-row flex-column-fluid'>
          <a className='d-block d-lg-none mx-auto py-20'>
            <img alt='Logo' src={LogoIstamint} className='theme-light-show h-35px' />
          </a>
          <div className='d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10'>
            <Routes>
              <Route path='login' element={<Login />} />
              <Route path='registration' element={<Registration />} />
              <Route path='forgot-password' element={<ForgotPassword />} />
              <Route index element={<Login />} />
            </Routes>
          </div>
          <div
            className='d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat'
            style={{
              backgroundImage: `url(${BackgroundImage})`,
            }}
          />
        </div>
      </div>
    </>
  )
}

export {AuthPage}
