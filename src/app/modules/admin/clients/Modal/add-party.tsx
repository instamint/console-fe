import {Form, Formik} from 'formik'
import { useEffect } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { KTSVG } from '../../../../../_metronic/helpers'

const PoolSchema = Yup.object().shape({
  name: Yup.string().trim().max(5000, 'Maximum 5000 symbols').required('Name is required'),
})

interface MyFormValues {
  name: string
}

export default function ModalAddParty({modalAddParty, setModalAddParty, handleAddParty, setIdClient}) {
  const initialValues: MyFormValues = {name: ''}

  const handleSubmit = (values, {setSubmitting}) => {
    setSubmitting(true)
    handleAddParty(values?.name)
  }

  useEffect(() => {
    return () => setIdClient(null)
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PoolSchema}
      validate={() => {
        let errors = {}
        return errors
      }}
      onSubmit={handleSubmit}
    >
      {({errors, values, setFieldValue, touched}) => (
        <Form>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' style={{color: '#5a5d72'}}>
                Add Party
              </h5>
              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => setModalAddParty(false)}
              >
                <KTSVG
                  path='/media/icons/duotune/arrows/arr061.svg'
                  className='svg-icon svg-icon-2x'
                />
              </div>
            </div>
            <div className='modal-body'>
              <div className='flex-column align-items-center'>
                <Title>Name:</Title>
                <InputName
                  name='name'
                  value={values?.name}
                  onChange={(e) => {
                    setFieldValue('name', e?.target?.value)
                  }}
                ></InputName>
              </div>
              {touched?.name && errors?.name ? (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{errors?.name as string}</span>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
            <div className='modal-footer'>
              <GroupBtn>
                <button
                  type='button'
                  className='btn btn-light'
                  data-bs-dismiss='modal'
                  onClick={() => setModalAddParty(false)}
                >
                  Cancel
                </button>
                <button type='submit' className='btn btn-primary'>
                  Save
                </button>
              </GroupBtn>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

const Title = styled.span`
  font-size: 15px;
  font-weight: 500;
`

const InputName = styled.input`
  height: 30px;
  width: 100%;
  padding: 10px;
  margin-top: 7px;
  margin-bottom: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:hover {
    border: 1px solid #009ef7 !important;
  }
`

const GroupBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
