import {Form, Formik} from 'formik'
import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import {getListAuctionType} from '../../../../utils/api/assets'
import {KTSVG} from '../../../../_metronic/helpers'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import BigNumber from 'bignumber.js'

function toFixed(x) {
  try {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1])
      if (e) {
        x *= Math.pow(10, e - 1)
        x = '0.' + new Array(e).join('0') + x.toString().substring(2)
      }
    } else {
      var e = parseInt(x.toString().split('+')[1])
      if (e > 20) {
        e -= 20
        x /= Math.pow(10, e)
        x += new Array(e + 1).join('0')
      }
    }
    return x
  } catch (error) {
    console.error({error})
    return x
  }
}

const patternTwoDigisAfterComma = /^(\d*\.{0,1}\d{0,2}$)/
const AuctionSchema = Yup.object().shape({
  auction_type: Yup.string().trim().nullable(null).required('Auction Type is required'),
  reserve_price: Yup.number()
    .max(100000000, 'Maximum 8 digits')
    .test(
      'is-decimal',
      'Price should be a decimal with maximum two digits after comma',
      (val: any) => {
        if (val !== undefined) {
          return patternTwoDigisAfterComma.test(toFixed(val))
        }
        return true
      }
    )
    .typeError('Price should be a decimal with maximum two digits after comma'),
  buy_now_price: Yup.number()
    .max(100000000, 'Maximum 8 digits')
    .test(
      'is-decimal',
      'Price should be a decimal with maximum two digits after comma',
      (val: any) => {
        if (val !== undefined) {
          return patternTwoDigisAfterComma.test(Math.abs(toFixed(val)).toString())
        }
        return true
      }
    )
    .typeError('Price should be a decimal with maximum two digits after comma'),
})

interface MyFormValues {
  auction_type: string
  reserve_price: number
  buy_now_price: number
}

export default function ModalAuction({
  modalShow,
  setModalShow,
  handleAuction,
  setIdAssetAuction,
  error,
  setError,
}) {
  const [dropDown, setDropDown] = useState(false)
  const [listAuctionType, setListAuctionType] = useState([])
  const refDropDown = useRef()
  useOnClickOutside(refDropDown, () => setDropDown(false))

  const handleSubmit = (values, {setSubmitting}) => {
    setSubmitting(true)
    handleAuction(values)
    // setModalShow(false)
  }

  const initialValues: MyFormValues = {
    auction_type: listAuctionType?.[0] || '',
    reserve_price: 0,
    buy_now_price: -1,
  }

  const fetchListAuctionType = async () => {
    try {
      const reps = await getListAuctionType()
      reps && setListAuctionType(reps?.data)
    } catch (error) {
      console.error({error})
    }
  }

  useEffect(() => {
    fetchListAuctionType()
    return () => {
      setError(null)
      setIdAssetAuction(null)
    }
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AuctionSchema}
      validate={() => {
        let errors = {}
        return errors
      }}
      onSubmit={handleSubmit}
    >
      {({errors, values, setFieldValue, touched, handleChange}) => (
        <Form>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' style={{color: '#5a5d72'}}>
                Auction
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
              <div>
                <div className='d-flex align-items-center'>
                  <Title>Auction Type:</Title>
                  <div ref={refDropDown}>
                    <button
                      onClick={() => setDropDown((preState) => !preState)}
                      type='button'
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='bottom-start'
                      data-kt-menu-flip='top-end'
                      className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary d-flex align-items-center'
                    >
                      <Name>
                        <SpanName>{values.auction_type || 'Types'}</SpanName>
                      </Name>{' '}
                      <IconDrop className='fa-solid fa-caret-down'></IconDrop>
                    </button>
                    <DivDropDownItem
                      className='menu menu-sub menu-sub-dropdown p-4'
                      data-kt-menu='true'
                      style={{display: dropDown ? 'block' : 'none', position: 'absolute'}}
                    >
                      <div className='d-flex flex-column'>
                        {listAuctionType?.length > 0 ? (
                          <>
                            {listAuctionType?.map((item, index) => {
                              return (
                                <NameDropdow
                                  key={index}
                                  onClick={() => {
                                    setFieldValue('auction_type', item)
                                    setDropDown(false)
                                  }}
                                >
                                  {item}
                                </NameDropdow>
                              )
                            })}
                          </>
                        ) : (
                          <div>There are currently no categories</div>
                        )}
                      </div>
                    </DivDropDownItem>
                  </div>
                </div>
                {touched?.auction_type && errors?.auction_type ? (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{errors?.auction_type as string}</span>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className='mt-2'>
                <div className='d-flex align-items-center'>
                  <Title>Reserve Price:</Title>
                  <InputName
                    type='number'
                    name='reserve_price'
                    value={values?.reserve_price}
                    onChange={(e) => {
                      setFieldValue('reserve_price', e?.target?.value)
                    }}
                  ></InputName>
                </div>
                {touched?.reserve_price && errors?.reserve_price ? (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{errors?.reserve_price as string}</span>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className='mt-2'>
                <div className='d-flex align-items-center'>
                  <Title>Buy Now Price:</Title>
                  <InputName
                    type='number'
                    name='buy_now_price'
                    value={values?.buy_now_price}
                    onChange={(e) => {
                      setFieldValue('buy_now_price', e?.target?.value)
                    }}
                  ></InputName>
                </div>
                {touched?.buy_now_price && errors?.buy_now_price ? (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{errors?.buy_now_price as string}</span>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              {error && !errors?.buy_now_price && !errors?.reserve_price && (
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
  font-size: 14px;
  font-weight: 500;
  min-width: 125px;
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
  width: 277px;
  display: flex;
`
const IconDrop = styled.i`
  margin-left: 5px;
  margin-bottom: 2px;
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