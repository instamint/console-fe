/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {login} from '../core/_requests'
import {useAuth} from '../core/Auth'
import AmericanFlag from '../../../images/american-flag.svg'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('The value is not a valid email address')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('UserName is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: 'jamiel@instamint.com',
  password: 'jamiel@123',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.email, values.password)
        saveAuth(auth)
        setCurrentUser(auth)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('Login information is incorrect, please try again')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <div className='d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px'>
      <div className='d-flex flex-stack py-2'>
        <div className='me-2' />
        <div className='m-0'>
          <span className='text-gray-400 fw-bold fs-5 me-2' data-kt-translate='sign-in-head-desc'>
            Join the Token Revolution
          </span>
          <Link
            to={'/auth/registration'}
            className='link-primary fw-bold fs-5'
            data-kt-translate='sign-in-head-link'
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className='py-20'>
        <form className='form' onSubmit={formik.handleSubmit} noValidate id='kt_login_signin_form'>
          <div className='card-body'>
            <div className='text-start mb-10'>
              <h1 className='text-dark mb-3 fs-3x' data-kt-translate='sign-in-title'>
                Sign In
              </h1>
              <div className='text-gray-400 fw-semibold fs-6' data-kt-translate='general-desc'>
                Instamint is for tokens what Stripe is for payments
              </div>
            </div>
            <div className='fv-row mb-8 fv-plugins-icon-container'>
              <input
                placeholder='Email'
                {...formik.getFieldProps('email')}
                className={clsx('form-control form-control-lg form-control-solid')}
                type='text'
                name='email'
                autoComplete='off'
              />
              {formik.touched.email && formik.errors.email && (
                <div className='fv-plugins-message-container mt-2'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='fv-row mb-7 fv-plugins-icon-container'>
              <input
                type='password'
                placeholder='Password'
                autoComplete='off'
                {...formik.getFieldProps('password')}
                className={clsx('form-control form-control-lg form-control-solid')}
              />
              {formik.touched.password && formik.errors.password && (
                <div className='fv-plugins-message-container mt-2'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.password}</span>
                  </div>
                </div>
              )}
            </div>
            {formik?.status && formik?.status && (
              <div className='fv-plugins-message-container mb-2'>
                <span className='fv-help-block' role='alert'>
                  {formik?.status}
                </span>
              </div>
            )}
            <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-10'>
              <div />
              <Link
                to={'/auth/forgot-password'}
                className='link-primary'
                data-kt-translate='sign-in-forgot-password'
              >
                Forgot Password ?
              </Link>
            </div>

            <div className='d-flex flex-stack'>
              <button
                type='submit'
                id='kt_sign_in_submit'
                className='btn btn-primary me-2 flex-shrink-0'
              >
                {!loading && (
                  <span className='indicator-label' data-kt-translate='sign-in-submit'>
                    Sign In
                  </span>
                )}
                {loading && (
                  <span className='indicator-progress' style={{display: 'block'}}>
                    Processing...
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </div>
          </div>
          <div />
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
  )
}
