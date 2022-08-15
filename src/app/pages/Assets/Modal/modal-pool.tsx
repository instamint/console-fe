import { Form, Formik } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import { KTSVG } from '../../../../_metronic/helpers'

const PoolSchema = Yup.object().shape({
  poolname: Yup.string().max(50, 'Maximum 50 symbols').required('Pool Name is required'),
})

interface MyFormValues {
  poolname: string
}

export default function ModalPool({modalPool, setModalPool, handlePool}) {
  const handleSubmit = (values, {setSubmitting}) => {
    setSubmitting(true)
    handlePool(values)
  }

  const initialValues: MyFormValues = {poolname: ''}

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
                Add Pool
              </h5>
              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => setModalPool(false)}
              >
                <KTSVG
                  path='/media/icons/duotune/arrows/arr061.svg'
                  className='svg-icon svg-icon-2x'
                />
              </div>
            </div>
            <div className='modal-body'>
              <div className='flex-column align-items-center'>
                <Title>Pool Name:</Title>
                <InputName
                  name='poolname'
                  value={values?.poolname}
                  onChange={(e) => setFieldValue('poolname', e?.target?.value)}
                ></InputName>
              </div>
              {touched?.poolname && errors?.poolname ? (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{errors?.poolname as string}</span>
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
                  onClick={() => setModalPool(false)}
                >
                  Cancel
                </button>
                <button type='submit' className='btn btn-success'>
                  OK
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
  height: 34px;
  width: 100%;
  padding: 0px 10px;
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
