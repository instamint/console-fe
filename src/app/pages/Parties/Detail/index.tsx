import {useEffect} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import {PageTitle} from '../../../../_metronic/layout/core'

export default function PartiesDetail() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const id: string | number = searchParams.get('id')

  useEffect(() => {
    if (!id) {
      navigate('/parties')
    }
  }, [id])

  return (
    <>
      <PageTitle>Parties</PageTitle>
      <div>
        <div>
          <div className='d-flex align-items-center'>
            <button onClick={() => navigate(-1)} className='btn btn-primary me-5'>
              <i className='fa-solid fa-arrow-left'></i> Back
            </button>
          </div>
        </div>

        <DivContainer className='row mt-2'>
          <DivContent className={`card card-xxl-stretch mb-5 mb-xl-8`}>
            <div className='card-title'>
              <h2 className='fw-bold'>Parties Details</h2>
            </div>
            <div className=''>
              <div className='mb-10'>
                <div className='d-flex flex-wrap py-5'>
                  <div className='flex-equal me-5'>
                    <table className='table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0'>
                      <tbody>
                        <tr>
                          <td className='text-gray-400 min-w-175px w-175px'>UUID:</td>
                          <td className='text-gray-800'>
                            <span
                              data-tip={
                                '1d7710ee669e95c74fdcf2517e22676216d4e8579eac9746912bfd284cc57a14'
                              }
                            >
                              1d77..7a14
                            </span>
                            <ReactTooltip place='top' effect='solid' />
                          </td>
                        </tr>
                        <tr>
                          <td className='text-gray-400'>Name:</td>
                          <td className='text-gray-800'>Instamint</td>
                        </tr>
                        <tr>
                          <td className='text-gray-400'>Name Space</td>
                          <td className='text-gray-800'>instamint.com</td>
                        </tr>
                        <tr>
                          <td className='text-gray-400'>Disable</td>
                          <td>
                            <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                name='notifications'
                                // defaultChecked={disable}
                                // onChange={() => setDisable(!disable)}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='flex-equal'>
                    <table className='table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0'>
                      <tbody>
                        <tr>
                          <td className='text-gray-400 min-w-175px w-175px'>Current API Key:</td>
                          <td className='text-gray-800 min-w-200px'>
                            <span
                              data-tip={
                                '1d7710ee669e95c74fdcf2517e22676216d4e8579eac9746912bfd284cc57a14'
                              }
                            >
                              1d77..7a14
                            </span>
                            <ReactTooltip place='top' effect='solid' />
                          </td>
                        </tr>
                        <tr>
                          <td className='text-gray-400'>Created At:</td>
                          <td className='text-gray-800'>August 14, 2022 at 1:00 PM</td>
                        </tr>
                        <tr>
                          <td className='text-gray-400'>Coss Reference Id:</td>
                          <td className='text-gray-800'>
                            <span
                              data-tip={
                                '1d7710ee669e95c74fdcf2517e22676216d4e8579eac9746912bfd284cc57a14'
                              }
                            >
                              1d77..7a14
                            </span>
                            <ReactTooltip place='top' effect='solid' />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </DivContent>
        </DivContainer>
      </div>
    </>
  )
}

const DivContainer = styled.div`
  width: 800px;
  margin: auto;
`
const DivContent = styled.div`
  padding: 30px 30px;
`