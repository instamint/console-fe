import {Form, Formik} from 'formik'
import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {getListPools} from '../../../../utils/api/pools'
import {KTSVG} from '../../../../_metronic/helpers'
import useOnClickOutside from '../../../hooks/useOnClickOutside'

interface MyFormValues {
  poolname: string
  portfolio: Object
}

export default function ModalPool({modalShow, setModalShow, handlePool, error, setError}) {
  const refDropDown = useRef()
  useOnClickOutside(refDropDown, () => setDropDown(false))
  const [listPortfolio, setListPortfolio] = useState([
    {id: 1, name: 'abc 1'},
    {id: 2, name: 'abc 2'},
  ])
  const [dropDown, setDropDown] = useState(false)
  const handleSubmit = (values, {setSubmitting}) => {
    setSubmitting(true)
    handlePool(values)
  }

  const initialValues: MyFormValues = {poolname: '', portfolio: {}}

  const fetchListPortfolio = async () => {
    // setIsLoading(true)
    try {
      const reps = await getListPools()
      reps && setListPortfolio(reps)
    } catch (error) {
      console.error({error})
    } finally {
      // setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchListPortfolio()
    return () => {
      setError(null)
    }
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        let errors = {
          portfolio: null,
        }
        if ((!values?.poolname || values?.poolname === '') && !values?.portfolio?.name) {
          errors.portfolio =
            'Please enter a Portfolio name or select an existing Portfolio to continue'
        } else delete errors.portfolio
        return errors
      }}
      onSubmit={handleSubmit}
    >
      {({errors, values, setFieldValue, touched}) => (
        <Form>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' style={{color: '#5a5d72'}}>
                Assign To Portfolio
              </h5>
              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => setModalShow(false)}
              >
                <KTSVG
                  path='/media/icons/duotune/arrows/arr061.svg'
                  className='svg-icon svg-icon-2x'
                />
              </div>
            </div>
            <div className='modal-body'>
              <div className='flex-column align-items-center'>
                <Title>Portfolio Name:</Title>
                <InputName
                  name='poolname'
                  value={values?.poolname}
                  onChange={(e) => {
                    setError(null)
                    setFieldValue('poolname', e?.target?.value)
                  }}
                ></InputName>
              </div>
              {listPortfolio?.length > 0 && (!values?.poolname || values?.poolname?.trim() === '') ? (
                <div className='flex-column align-items-center mt-5'>
                  <Title>Existing Portfolio:</Title>
                  <DivDropDown>
                    <button
                      onClick={() => setDropDown((preState) => !preState)}
                      type='button'
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='bottom-start'
                      data-kt-menu-flip='top-end'
                      className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary d-flex align-items-center'
                    >
                      <Name>{values?.portfolio?.name || 'Options'}</Name>{' '}
                      <IconDrop className='fa-solid fa-caret-down'></IconDrop>
                    </button>
                    <div
                      ref={refDropDown}
                      className='menu menu-sub menu-sub-dropdown p-4'
                      data-kt-menu='true'
                      style={{display: dropDown ? 'block' : 'none', position: 'absolute'}}
                    >
                      <div className='d-flex flex-column'>
                        <>
                          {listPortfolio?.map((item, index) => {
                            return (
                              <NameDropdow
                                key={index}
                                onClick={() => {
                                  setFieldValue('portfolio', item)
                                  setDropDown(false)
                                }}
                              >
                                {item?.name}
                              </NameDropdow>
                            )
                          })}
                        </>
                      </div>
                    </div>
                  </DivDropDown>
                </div>
              ) : (
                ''
              )}
              {touched?.portfolio && errors?.portfolio ? (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>
                      Please enter the Portfolio name or select an existing Portfolio to continue
                    </span>
                  </div>
                </div>
              ) : (
                ''
              )}
              {error && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{error}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='modal-footer'>
              <GroupBtn>
                <button
                  type='button'
                  className='btn btn-light'
                  data-bs-dismiss='modal'
                  onClick={() => setModalShow(false)}
                >
                  Cancel
                </button>
                <button type='submit' className='btn btn-primary'>
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
const NameDropdow = styled.div`
  padding: 5px;
  min-width: 100px;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background-color: #009ef7;
    transition: all 0.2s ease;
  }
`

const Name = styled.div`
  min-width: 150px;
  display: flex;
`
const IconDrop = styled.i`
  margin-left: 5px;
  margin-bottom: 2px;
`

const DivDropDown = styled.div`
  margin-top: 7px;
  margin-bottom: 5px;
` 