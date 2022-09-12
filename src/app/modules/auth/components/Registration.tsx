/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {getUserByToken, register} from '../core/_requests'
import {Link} from 'react-router-dom'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import {useAuth} from '../core/Auth'
import AmericanFlag from '../../../images/american-flag.svg'
import {useAlert} from 'react-alert'

const initialValues = {
  firstname: '',
  lastname: '',
  namespace: '',
  email: '',
  password: '',
  changepassword: '',
  // acceptTerms: false,
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string().trim().max(50, 'Maximum 50 symbols').required('First name is required'),
  email: Yup.string()
    .trim()
    .email('Wrong email format')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  namespace: Yup.string().trim().max(50, 'Maximum 50 symbols').required('Namespace is required'),
  lastname: Yup.string().trim().max(50, 'Maximum 50 symbols').required('Last name is required'),
  password: Yup.string()
    .trim()
    .max(50, 'Maximum 50 symbols')
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^:-_+=();"'{}<>,.?/|-])[A-Za-z\d@$!%*#?&:^-_+=();"'{}<>,.?/|-]{8,}$/,
      'Use 8 or more characters with a mix of letters, numbers & symbols.'
    ),
  changepassword: Yup.string()
    .trim()
    .required('Password confirmation is required')
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
    }),
  // acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})

export function Registration() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()
  const alert = useAlert()

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting, resetForm}) => {
      setLoading(true)
      try {
        await register(
          values.namespace,
          values.email,
          values.password,
          values.firstname,
          values.lastname
        )
        resetForm()
        alert.success('Successful account registration!')
      } catch (error) {
        console.error({error})
        setStatus(
          (error?.response?.data && (error?.response?.data !== undefined)) ?
            'The registration details is incorrect' : null
        )
        alert.error('The registration details is incorrect')
      } finally {
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
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
          <span className='text-gray-400 fw-bold fs-5 me-2' data-kt-translate='sign-up-head-desc'>
            Already a member ?
          </span>
          <Link
            to={'/auth/login'}
            className='link-primary fw-bold fs-5'
            data-kt-translate='sign-up-head-link'
          >
            Sign In
          </Link>
        </div>
      </div>

      <div className='py-20'>
        <form
          className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
          noValidate
          id='kt_login_signup_form'
          onSubmit={formik.handleSubmit}
        >
          <div className='text-start mb-10'>
            <h1 className='text-dark mb-3 fs-3x' data-kt-translate='sign-up-title'>
              Create an Account
            </h1>
            <div className='text-gray-400 fw-semibold fs-6' data-kt-translate='general-desc'>
              Tokenize everything.
            </div>
          </div>
          {formik.status && (
            <div className='mb-lg-5 alert alert-danger'>
              <div className='alert-text font-weight-bold'>{formik.status}</div>
            </div>
          )}
          <div className='row fv-row mb-7 fv-plugins-icon-container'>
            <div className='col-xl-6'>
              <input
                placeholder='First name'
                type='text'
                autoComplete='off'
                {...formik.getFieldProps('firstname')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {
                    'is-invalid': formik.touched.firstname && formik.errors.firstname,
                  },
                  {
                    'is-valid': formik.touched.firstname && !formik.errors.firstname,
                  }
                )}
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <div className='fv-plugins-message-container mt-2'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.firstname}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='col-xl-6'>
              <input
                placeholder='Last name'
                type='text'
                autoComplete='off'
                {...formik.getFieldProps('lastname')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {
                    'is-invalid': formik.touched.lastname && formik.errors.lastname,
                  },
                  {
                    'is-valid': formik.touched.lastname && !formik.errors.lastname,
                  }
                )}
              />
              {formik.touched.lastname && formik.errors.lastname && (
                <div className='fv-plugins-message-container mt-2'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.lastname}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
            <input
              placeholder='Email'
              type='email'
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
          <div className='fv-row mb-10 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid'>
            <input
              placeholder='Namespace'
              type='text'
              autoComplete='off'
              {...formik.getFieldProps('namespace')}
              className={clsx('form-control form-control-lg form-control-solid', {
                'is-invalid': formik.touched.namespace && formik.errors.namespace,
              })}
            />
            {formik.touched.namespace && formik.errors.namespace && (
              <div className='fv-plugins-message-container mt-2'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.namespace}</span>
                </div>
              </div>
            )}
          </div>
          <div className='fv-row mb-10 fv-plugins-icon-container' data-kt-password-meter='true'>
            <div className='mb-1'>
              <div className='position-relative mb-3'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  autoComplete='off'
                  {...formik.getFieldProps('password')}
                  className={clsx('form-control form-control-lg form-control-solid', {
                    'is-invalid': formik.touched.password && formik.errors.password,
                  })}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className='fv-plugins-message-container mt-2'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.password}</span>
                    </div>
                  </div>
                ) : (
                  <span
                    className='btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2'
                    data-kt-password-meter-control='visibility'
                    onClick={() => setShowPassword((preState) => !preState)}
                  >
                    {showPassword ? (
                      <i className='bi bi-eye fs-2' />
                    ) : (
                      <i className='bi bi-eye-slash fs-2' />
                    )}
                  </span>
                )}
              </div>
              <div
                className='d-flex align-items-center mb-3'
                data-kt-password-meter-control='highlight'
              >
                <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2' />
                <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2' />
                <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2' />
                <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px' />
              </div>
            </div>
            <div className='text-muted' data-kt-translate='sign-up-hint'>
              Use 8 or more characters with a mix of letters, numbers &amp; symbols.
            </div>
            <div className='fv-plugins-message-container mt-2 invalid-feedback' />
          </div>
          <div className='fv-row mb-10 fv-plugins-icon-container'>
            <input
              type='password'
              placeholder='Confirm Password'
              autoComplete='off'
              {...formik.getFieldProps('changepassword')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {
                  'is-invalid': formik.touched.changepassword && formik.errors.changepassword,
                },
                {
                  'is-valid': formik.touched.changepassword && !formik.errors.changepassword,
                }
              )}
            />
            {formik.touched.changepassword && formik.errors.changepassword && (
              <div className='fv-plugins-message-container mt-2'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.changepassword}</span>
                </div>
              </div>
            )}
          </div>
          <div className='d-flex flex-stack'>
            <button
              id='kt_sign_up_submit'
              className='btn btn-primary'
              data-kt-translate='sign-up-submit'
            >
              {!loading ? (
                <span className='indicator-label'>Submit</span>
              ) : (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
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
