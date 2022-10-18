/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {Field, Form, Formik} from 'formik'
import {login} from '../core/_requests'
import {useAuth} from '../core/Auth'
import AmericanFlag from '../../../images/american-flag.svg'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required')
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'The value is not a valid email address'
    ),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  const onSubmit = async (values, {setStatus, setSubmitting}) => {
    setLoading(true)
    try {
      const {data: auth} = await login(values.email, values.password)
      if (auth) {
        saveAuth(auth)
        setCurrentUser(auth)
      }
    } catch (error) {
      console.error(error)
      saveAuth(undefined)
      if (error?.response?.data && typeof error?.response?.data === 'string') {
        setStatus(error?.response?.data)
      } else {
        setStatus('Login information is incorrect, please try again')
      }
      setSubmitting(false)
      setLoading(false)
    }
  }

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
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {({errors, touched, status}) => (
            <Form>
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
                  <Field
                    placeholder='Email'
                    className={clsx('form-control form-control-lg form-control-solid')}
                    type='text'
                    name='email'
                    autoComplete={`email`}
                  />
                  {touched.email && errors.email && (
                    <div className='fv-plugins-message-container mt-2'>
                      <div className='fv-help-block'>
                        <span role='alert'>{errors.email as String}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className='fv-row mb-7 fv-plugins-icon-container'>
                  <Field
                    type='password'
                    placeholder='Password'
                    autoComplete={`new-password`}
                    name='password'
                    className={clsx('form-control form-control-lg form-control-solid')}
                  />
                  {touched.password && errors.password && (
                    <div className='fv-plugins-message-container mt-2'>
                      <div className='fv-help-block'>
                        <span role='alert'>{errors.password as String}</span>
                      </div>
                    </div>
                  )}
                </div>
                {status && status && (
                  <div className='fv-plugins-message-container mb-2'>
                    <span className='fv-help-block' role='alert'>
                      {status}
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
            </Form>
          )}
        </Formik>
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
