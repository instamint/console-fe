import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../core/_requests'
import AmericanFlag from '../../../images/american-flag.svg'

const initialValues = {
  email: 'jamiel@instamint.com',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('The value is not a valid email address')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        requestPassword(values.email)
          .then(({data: {result}}) => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <>
      <div className='d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px'>
        <div className='d-flex flex-stack py-2'>
          <div className='me-2'>
            <Link to={'/auth/login'} className='btn btn-icon bg-light rounded-circle'>
              <span className='svg-icon svg-icon-2 svg-icon-gray-800'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.60001 11H21C21.6 11 22 11.4 22 12C22 12.6 21.6 13 21 13H9.60001V11Z'
                    fill='currentColor'
                  />
                  <path
                    opacity='0.3'
                    d='M9.6 20V4L2.3 11.3C1.9 11.7 1.9 12.3 2.3 12.7L9.6 20Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
            </Link>
          </div>
          <div className='m-0'>
            <span
              className='text-gray-400 fw-bold fs-5 me-2'
              data-kt-translate='password-reset-head-desc'
            >
              Already a member ?
            </span>
            <Link
              to={'/auth/login'}
              className='link-primary fw-bold fs-5'
              data-kt-translate='password-reset-head-link'
            >
              Sign In
            </Link>
          </div>
        </div>
        <div className='py-20'>
          <form
            className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
            noValidate
            id='kt_login_password_reset_form'
            onSubmit={formik.handleSubmit}
          >
            <div className='text-start mb-10'>
              <h1 className='text-dark mb-3 fs-3x' data-kt-translate='password-reset-title'>
                Forgot Password ?
              </h1>
              <div
                className='text-gray-400 fw-semibold fs-6'
                data-kt-translate='password-reset-desc'
              >
                Enter your email to reset your password.
              </div>
            </div>
            <div className='fv-row mb-10'>
              <input
                type='email'
                placeholder=''
                autoComplete='off'
                {...formik.getFieldProps('email')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.email && formik.errors.email},
                  {
                    'is-valid': formik.touched.email && !formik.errors.email,
                  }
                )}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='fv-plugins-message-container mt-2'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='d-flex flex-stack'>
              <div className='m-0'>
                <button
                  type='submit'
                  id='kt_password_reset_submit'
                  className='btn btn-primary me-2'
                  data-kt-translate='password-reset-submit'
                >
                  <span className='indicator-label'>Submit</span>
                  <span className='indicator-progress'>
                    Please wait...
                    <span className='spinner-border spinner-border-sm align-middle ms-2' />
                  </span>
                </button>
                <Link className='btn btn-lg btn-light-primary fw-bold' to='/auth/login'>
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className='m-0'>
          <button
            className='btn btn-flex btn-link rotate'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-start'
            data-kt-menu-offset='0px, 0px'
          >
            <img
              data-kt-element='current-lang-flag'
              className='w-25px h-25px rounded-circle me-3'
              src={AmericanFlag}
              alt=''
            />
            <span data-kt-element='current-lang-name' className='me-2'>
              English
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
