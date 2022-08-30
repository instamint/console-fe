import {useEffect, useState} from 'react'
import {useNavigate, useParams, } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { getPartieDetail } from '../../../../utils/api/parties'
import { shortAddress } from '../../../../_metronic/helpers/format'
import { convertTimeZone } from '../../../../_metronic/helpers/format/datetime'
import {PageTitle} from '../../../../_metronic/layout/core'
import { Loading } from '../../../components/Loading'

export default function PartiesDetail() {
  const params = useParams()
  const navigate = useNavigate()
  const id = params?.[Object.keys(params)?.[0]] || null
  const [dataDetail, setDataDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchPartieDetail = async (id) => {
    setIsLoading(true)
    try {
      const reps = await getPartieDetail(id)
      setDataDetail(reps?.data)
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!id) {
      navigate('/parties')
    } else {
      fetchPartieDetail(id)
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

        {isLoading ? (
          <Loading />
        ) : (
          <DivContainer className='row mt-2'>
            <DivContent className={`card card-xxl-stretch mb-5 mb-xl-8`}>
              {dataDetail ? (
                <>
                  <div className='card-title'>
                    <h2 className='fw-bold'>Party’s Details</h2>
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
                                  <span data-tip={dataDetail?.uuid}>
                                    {shortAddress(dataDetail?.uuid)}
                                  </span>
                                  <ReactTooltip place='top' effect='solid' />
                                </td>
                              </tr>
                              <tr>
                                <td className='text-gray-400'>Name:</td>
                                <td className='text-gray-800'>{dataDetail?.name}</td>
                              </tr>
                              <tr>
                                <td className='text-gray-400'>Name Space</td>
                                <td className='text-gray-800'>{dataDetail?.namespace}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className='flex-equal'>
                          <table className='table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0'>
                            <tbody>
                              <tr>
                                <td className='text-gray-400 min-w-175px w-175px'>Hash ID:</td>
                                <td className='text-gray-800 min-w-200px'>
                                  <span data-tip={dataDetail?.hashId}>
                                    {shortAddress(dataDetail?.hashId)}
                                  </span>
                                  <ReactTooltip place='top' effect='solid' />
                                </td>
                              </tr>
                              <tr>
                                <td className='text-gray-400'>Created At:</td>
                                <td className='text-gray-800'>
                                  {convertTimeZone(dataDetail?.createdAt)}
                                </td>
                              </tr>
                              <tr>
                                <td className='text-gray-400'>Coss Reference Id:</td>
                                <td className='text-gray-800'>
                                  <span>{dataDetail?.b2BcrossReferenceId}</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <h4 className='d-flex justify-content-center'>
                  This asset does not exist. Please try again
                </h4>
              )}
            </DivContent>
          </DivContainer>
        )}
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