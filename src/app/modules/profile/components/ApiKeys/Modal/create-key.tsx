import { Formik } from 'formik'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import { KTSVG } from '../../../../../../_metronic/helpers'
import * as Yup from 'yup'

const validateSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
})

export default function CreateKey({setShowModalCreate, setShowModalKey}) {

  const handleSubmit = (values) => {
    setShowModalCreate(false)
    setShowModalKey(true)
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          name: '',
          billing_apis: '',
          email_apis: '',
          user_apis: '',
        }}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {({errors, touched, setSubmitting, isSubmitting, values, setFieldValue, handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' style={{color: '#5a5d72'}}>
                  Create New Api Key
                </h5>
                <div
                  className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                  onClick={() => setShowModalCreate(false)}
                >
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr061.svg'
                    className='svg-icon svg-icon-2x'
                  />
                </div>
              </div>
              <div className='modal-body'>
                <div className='d-flex align-items-center'>
                  <TitelModalKey>Name</TitelModalKey>
                  <InputName
                    value={values.name}
                    name='name'
                    onChange={(e) => setFieldValue('name', e.target.value)}
                  ></InputName>
                </div>
                {touched?.name && errors?.name && (
                  <DivError className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{errors?.name as string}</span>
                    </div>
                  </DivError>
                )}
                <p className='fw-bold mt-3 fs-6'>Choose scopes:</p>
                <div className='d-flex align-items-center mt-4'>
                  <TitelModalKey>Billing Apis</TitelModalKey>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                  <TextInput className=''>billing.quota.read</TextInput>
                </div>
                {touched?.name && errors?.name && (
                  <DivError className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{errors?.billing_apis as string}</span>
                    </div>
                  </DivError>
                )}
                <div className='d-flex align-items-start mt-5'>
                  <TitelModalKey>Email Apis</TitelModalKey>
                  <div className='d-flex flex-column'>
                    <div className='d-flex'>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value='1'
                          data-kt-check='true'
                          data-kt-check-target='.widget-9-check'
                        />
                      </div>
                      <TextInput className=''>emails.manage (manage emails)</TextInput>
                    </div>
                    <div className='d-flex mt-3'>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value='1'
                          data-kt-check='true'
                          data-kt-check-target='.widget-9-check'
                        />
                      </div>
                      <TextInput className=''>emails.read</TextInput>
                    </div>
                    <div className='d-flex mt-3'>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value='1'
                          data-kt-check='true'
                          data-kt-check-target='.widget-9-check'
                        />
                      </div>
                      <TextInput className=''>emails.send</TextInput>
                    </div>
                    <div className='d-flex mt-3'>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value='1'
                          data-kt-check='true'
                          data-kt-check-target='.widget-9-check'
                        />
                      </div>
                      <TextInput className=''>emails.delete</TextInput>
                    </div>
                  </div>
                </div>
                {touched?.name && errors?.name && (
                  <DivError className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{errors?.email_apis as string}</span>
                    </div>
                  </DivError>
                )}
                <div className='d-flex align-items-start mt-5'>
                  <TitelModalKey>User Apis</TitelModalKey>
                  <div className='d-flex flex-column'>
                    <div className='d-flex'>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value='1'
                          data-kt-check='true'
                          data-kt-check-target='.widget-9-check'
                        />
                      </div>
                      <TextInput className=''>users.manage</TextInput>
                    </div>
                    <div className='d-flex mt-3'>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value='1'
                          data-kt-check='true'
                          data-kt-check-target='.widget-9-check'
                        />
                      </div>
                      <TextInput className=''>users.read</TextInput>
                    </div>
                  </div>
                </div>
                {touched?.name && errors?.name && (
                  <DivError className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{errors?.user_apis as string}</span>
                    </div>
                  </DivError>
                )}
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-light'
                  data-bs-dismiss='modal'
                  onClick={() => setShowModalCreate(false)}
                >
                  Close
                </button>
                <button type='submit' className='btn btn-success' data-bs-dismiss='modal'>
                  Create Api Key
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}


const TitelModalKey = styled.span`
  min-width: 120px;
  text-align: end;
  font-size: 15px;
  margin-right: 17px;
`

const InputName = styled.input`
  height: 34px;
  width: 345px;
  padding: 0px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:hover {
    border: 1px solid #009ef7 !important;
  }
`

const TextInput = styled.span`
  margin-left: 7px;
`

const DivError = styled.div`
  margin-left: 137px
`