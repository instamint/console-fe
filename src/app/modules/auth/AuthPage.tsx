/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import { ForgotPassword } from './components/ForgotPassword'
import { Login } from './components/Login'
import { Registration } from './components/Registration'

const AuthPage = () => {
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  return (
    <>
      <div className=' d-flex flex-column flex-lg-row flex-column-fluid' id='kt_login'>
        {/* begin::Aside */}
        <div
          className='d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative'
          style={{backgroundColor: `#F2C98A`}}
        >
          {/* begin::Aside Top */}
          <div className='d-flex flex-column-auto flex-column pt-lg-40 pt-15'>
            {/* begin::Aside header*/}
            <a href='#' className='text-center mb-10'>
              <img src={toAbsoluteUrl('/media/logos/logo-2.svg')} className='max-h-70px' alt='' />
            </a>
            {/* end::Aside Header */}
            {/* begin::Aside title*/}
            <h3
              className='font-weight-bolder text-center font-size-h4 font-size-h1-lg'
              style={{color: `#986923`}}
            >
              The Modern NFT platform
              <br />
              for platforms
            </h3>
            {/* end::Aside title */}
          </div>
          {/* end::Aside Top */}
          {/* begin::Aside Bottom*/}

          <div
            className='aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center'
            style={{
              backgroundImage: `url(/metronic/theme/html/demo1/dist/assets/media/svg/illustrations/login-visual-1.svg)`,
            }}
          ></div>
          {/* end::Aside Bottom */}
        </div>

        <div
          className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
          style={{
            backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
          }}
        >
          <div className='d-flex flex-column flex-lg-row-fluid py-10'>
            {/* begin::Content */}
            <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
              {/* begin::Logo */}
              <a href='#' className='mb-12'>
                <img
                  alt='Logo'
                  src={toAbsoluteUrl('/media/logos/instamint_logo.png')}
                  className='h-45px'
                />
              </a>
              {/* end::Logo */}
              {/* begin::Wrapper */}
              <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
                <Routes>
                    <Route path='login' element={<Login />} />
                    <Route path='registration' element={<Registration />} />
                    <Route path='forgot-password' element={<ForgotPassword />} />
                    <Route index element={<Login />} />
                </Routes>
              </div>
              {/* end::Wrapper */}
            </div>
          </div>
          {/* end::Content */}
          {/* begin::Footer */}
          <div className='d-flex flex-center flex-column-auto p-10'>
            <div className='d-flex align-items-center fw-bold fs-6'>
              <a href='#' className='text-muted text-hover-primary px-2'>
                About
              </a>

              <a href='#' className='text-muted text-hover-primary px-2'>
                Contact
              </a>

              <a href='#' className='text-muted text-hover-primary px-2'>
                Contact Us
              </a>
            </div>
          </div>
        </div>
        {/* end::Footer */}
      </div>
    </>
  )
}
 


export { AuthPage }

