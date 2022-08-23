import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { getDetailAsset, getDetailChain } from '../../../../utils/api/assets'
import { shortAddress, shortAddressBehind } from '../../../../_metronic/helpers/format'
import { PageTitle } from '../../../../_metronic/layout/core'
import { Loading } from '../../../components/Loading'


export default function AssetsDetail() {
  const [searchParams] = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [dataDetail, setDataDetail] = useState<any>({})
  const [dataDetailChain, setDataDetailChain] = useState<any>({})
  const navigate = useNavigate()
  const id: string | number = searchParams.get('id')

  const fetchDetailAsset = async (id) => {
    setIsLoading(true)
    try {
      const reps = await getDetailAsset(id)
      setDataDetail(reps?.data)
      const repsChain = await getDetailChain(id)
      setDataDetailChain(repsChain)
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    if (!id) {
      navigate("/assets")
    } else {
      fetchDetailAsset(id)
    }
  }, [id])
  
  return (
    <>
      <PageTitle>Asset Details</PageTitle>
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
              <div className='card-title'>
                <h2 className='fw-bold'>Asset Details</h2>
              </div>
              <div className=''>
                <div className='mb-10'>
                  <div className='d-flex flex-wrap py-5'>
                    <div className='flex-equal me-5'>
                      <table className='table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0'>
                        <tbody>
                          <tr>
                            <td className='text-gray-400 min-w-175px w-175px'>CROSS REFERENCE:</td>
                            <td className='text-gray-800'>{dataDetail?.b2BcrossReferenceId}</td>
                          </tr>
                          <tr>
                            <td className='text-gray-400'>STATUS:</td>
                            <td className='text-gray-800'>{dataDetail?.status ? 'P' : ''}</td>
                          </tr>
                          <tr>
                            <td className='text-gray-400'>CHAIN</td>
                            <td className='text-gray-800'>{dataDetail?.chainName}</td>
                          </tr>
                          <tr>
                            <td className='text-gray-400'>HASH ID</td>
                            <td className='text-gray-800'>{shortAddress(dataDetail?.hashId)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='flex-equal'>
                      <table className='table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0'>
                        <tbody>
                          <tr>
                            <td className='text-gray-400 min-w-175px w-175px'>
                              MINT REQUEST JSON:
                            </td>
                            <td className='text-gray-800 min-w-200px'>
                              {shortAddressBehind(dataDetail?.mintRequestjson)}
                            </td>
                          </tr>
                          <tr>
                            <td className='text-gray-400'>ISSUER:</td>
                            <td className='text-gray-800'>{dataDetail?.issuerName}</td>
                          </tr>
                          <tr>
                            <td className='text-gray-400'>OWNER:</td>
                            <td className='text-gray-800'>{dataDetail?.ownerName}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className='card-title mt-4'>
                    <h2 className='fw-bold'>
                      {dataDetail?.chainName === 'ethereum' ? 'Ethereum' : 'Algorand'}
                    </h2>
                  </div>
                  <div className='flex-equal mt-4'>
                    <table className='table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0'>
                      <tbody>
                        <tr>
                          <td className='text-gray-400 min-w-175px w-175px'>CROSS REFERENCE:</td>
                          <td className='text-gray-800 min-w-200px'>
                            {dataDetailChain?.b2BcrossReferenceId}
                          </td>
                        </tr>
                        <tr>
                          <td className='text-gray-400'>UUID:</td>
                          <td className='text-gray-800'>{dataDetailChain?.uuid}</td>
                        </tr>
                        <tr>
                          <td className='text-gray-400'>Create At:</td>
                          <td className='text-gray-800'>{dataDetailChain?.createAt}</td>
                        </tr>
                        <tr>
                          <td className='text-gray-400'>Hashid:</td>
                          <td className='text-gray-800'>{dataDetailChain?.hashId}</td>
                        </tr>
                        {dataDetail?.chainName === 'ethereum' ? (
                          <tr>
                            <td className='text-gray-400'>Token ID:</td>
                            <td className='text-gray-800'>
                              {dataDetailChain?.tokenId}
                            </td>
                          </tr>
                        ) : (
                          ''
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </DivContent>
          </DivContainer>
        )}
      </div>
    </>
  )
}

const DivContainer = styled.div`
  width: 1000px;
  margin: auto;
`
const DivContent = styled.div`
  padding: 30px 30px;
`