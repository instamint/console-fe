import {Formik} from 'formik'
import {Form} from 'react-bootstrap'
import styled from 'styled-components'
import {KTSVG} from '../../../../../../_metronic/helpers'
import * as Yup from 'yup'
import {useState} from 'react'
import { generateApiKey } from '../../../../../../utils/api/acccount-setting/api-key'

const validateSchema = Yup.object().shape({
})

export default function CreateKey({
  setShowModalCreate,
  setShowModalKey,
  handleSetApiKey,
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [scopes, setScopes] = useState({
    apis: [
      {
        id: 1,
        name: 'Meta',
        key: 'accessMeta',
        checked: false,
      },
      {
        id: 2,
        name: 'Disburse',
        key: 'accessDisburse',
        checked: false,
      },
      {
        id: 3,
        name: 'Yield',
        key: 'accessYield',
        checked: false,
      },
    ],
    data: [
      {
        id: 4,
        name: 'Websocket',
        key: 'websockets',
        checked: false,
      },
      {
        id: 5,
        name: 'Tableau',
        key: 'tableau',
        checked: false,
      },
      {
        id: 6,
        name: 'GraphQL',
        key: 'graphQL',
        checked: false,
      },
    ],
  })

  const handleSubmit = async (values) => {
    setIsLoading(true)
    try {
      let chooseScopes = {}
      Object.keys(values?.scopes)?.forEach((item) => {
        values?.scopes[item]?.length > 0 &&
          values?.scopes[item]?.forEach((i) => {
            chooseScopes[i.key] = i?.checked
          })
      })
      const reps = await generateApiKey(chooseScopes)
      if (reps?.apiKey) {
        handleSetApiKey(reps?.apiKey)
      }
    } catch (error) {
      console.error({error})
    } finally {
      setShowModalCreate(false)
      setShowModalKey(true)
      setIsLoading(false)
    }
  }

  const handleChecked = (scope, type, values, setFieldValue) => {
    let tmpScopes = {...values.scopes}
    tmpScopes?.[type]?.forEach((item, index) => {
      if (item?.id === scope?.id) {
        tmpScopes[type][index].checked = !tmpScopes[type][index].checked
      }
    })
    setFieldValue('scopes', tmpScopes)
  }

  const switchNameScopes = (item) => {
    switch (item) {
      case 'apis':
        return 'APIs'
      case 'data':
        return 'Data'
      default:
        return 'APIs'
    }
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          scopes: scopes,
        }}
        validate={(values) => {
          let errors = {}
          let arrScope = values.scopes.apis.concat(values.scopes.data)
          if (!arrScope?.some((item) => item?.checked === true)) {
            errors['scopes'] = 'Please choose at least one scope!'
          }
          return errors
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
                <p className='fw-bold mt-3 fs-6'>Choose scopes:</p>
                {Object.keys(values?.scopes)?.length > 0 &&
                  Object.keys(values?.scopes)?.map((item, index) => {
                    return (
                      <div key={index} className='d-flex mt-4'>
                        <TitelModalKey>{switchNameScopes(item)}</TitelModalKey>
                        <div className='flex-column'>
                          {values.scopes[item]?.length &&
                            values.scopes[item]?.map((i, idx) => {
                              return (
                                <div key={idx} className='d-flex' style={{marginBottom: '10px'}}>
                                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                    <input
                                      className='form-check-input'
                                      type='checkbox'
                                      value='1'
                                      checked={i.checked}
                                      data-kt-check-target='.widget-9-check'
                                      onChange={() => handleChecked(i, item, values, setFieldValue)}
                                    />
                                  </div>
                                  <TextInput className=''>{i.name}</TextInput>
                                </div>
                              )
                            })}
                        </div>
                      </div>
                    )
                  })}
                {touched?.scopes && errors?.scopes && (
                  <DivError className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{errors?.scopes as string}</span>
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
                <button
                  type='submit'
                  className='btn btn-primary'
                  data-bs-dismiss='modal'
                  disabled={isLoading}
                >
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


const TextInput = styled.span`
  margin-left: 7px;
`

const DivError = styled.div`
  margin-left: 137px;
`