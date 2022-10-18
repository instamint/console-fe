import {Form, Formik} from 'formik'
import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {KTSVG} from '../../../../_metronic/helpers'
import useOnClickOutside from '../../../hooks/useOnClickOutside'

export default function ModalStake({setModalShow, handleStake, setError}) {
  const refDropDown = useRef()
  useOnClickOutside(refDropDown, () => setDropDown(false))
  const [dropDown, setDropDown] = useState(false)
  const handleSubmit = (values, {setSubmitting}) => {
    setSubmitting(true)
    handleStake(values)
  }
  const optionsStake = [
    {
      key: 'yieldly',
      name: 'Yieldly',
    },
    {
      key: 'xyz_protocol',
      name: 'XYZ Protocol',
    },
  ]

  const initialValues = {
    stake: {}
  }

  useEffect(() => {
    return () => {
      setError(null)
    }
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        let errors = {
          stake: null,
        }
        if (!values?.stake?.name) {
          errors.stake = 'Please select at least one option!'
        } else delete errors.stake
        return errors
      }}
      onSubmit={handleSubmit}
    >
      {({errors, values, setFieldValue, touched}) => (
        <Form>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' style={{color: '#5a5d72'}}>
                Stake
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
              <div className='d-flex align-items-center mt-4 mb-4'>
                <Title>Choose Stake:</Title>
                <DivDropDown ref={refDropDown}>
                  <button
                    onClick={() => setDropDown((preState) => !preState)}
                    type='button'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-start'
                    data-kt-menu-flip='top-end'
                    className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary d-flex align-items-center'
                  >
                    <Name>
                      <SpanName>{values?.stake?.name || 'Options'}</SpanName>
                    </Name>{' '}
                    <IconDrop className={'fa-solid fa-caret-down'}></IconDrop>
                  </button>
                  <DivDropDownItem
                    className='menu menu-sub menu-sub-dropdown p-4'
                    data-kt-menu='true'
                    style={{display: dropDown ? 'block' : 'none', position: 'absolute'}}
                  >
                    <div className='d-flex flex-column'>
                      <>
                        {optionsStake?.map((item, index) => {
                          return (
                            <NameDropdow
                              key={index}
                              onClick={() => {
                                setFieldValue('stake', item)
                                setDropDown(false)
                              }}
                            >
                              {item?.name}
                            </NameDropdow>
                          )
                        })}
                      </>
                    </div>
                  </DivDropDownItem>
                </DivDropDown>
              </div>
              {touched?.stake && errors?.stake ? (
                <div className='fv-plugins-message-container mt-2' style={{marginLeft: '121px'}}>
                  <div className='fv-help-block'>
                    <span role='alert'>{errors?.stake as string}</span>
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
  font-size: 14px;
  font-weight: 500;
  min-width: 120px;
`

const GroupBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const NameDropdow = styled.div`
  word-break: break-all;
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
  width: 293px;
  display: flex;
`
const IconDrop = styled.i`
  position: absolute;
  right: 10px;
`

const DivDropDown = styled.div`
  position: relative;
`

const DivDropDownItem = styled.div`
  width: 328px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 300px;
`

const SpanName = styled.span`
  width: 270px;
  overflow: hidden;
  display: inline-block;
  text-align: left;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`