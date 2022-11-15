/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { getListAsset } from '../../../../utils/api/assets'
import { getListParties } from '../../../../utils/api/parties'
import { getListTransactions } from '../../../../utils/api/transactions'
import { VisitsDashboard } from '../../../components/Dashboard'
import { Loading } from '../../../components/Loading'

type Props = {
  className: string
}

const TablesDashboard: React.FC<Props> = ({className}) => {
  const [listParties, setListParties] = useState<Array<any>>([])
  const [listAssets, setListAssets] = useState<Array<any>>([])
  const [listTransactions, setListTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [params, setParams] = useState({
    sort_name: '',
    sort_type: '',
    limit: '',
  })

  const fetchList = async (params) => {
    try {
      const resAssets = await getListAsset(params)
      let resParties = await getListParties()
      const resTransactions = await getListTransactions(params)
      resAssets && setListAssets(resAssets?.data || [])
      resParties && setListParties(resParties?.data?.parties || [])
      resTransactions && setListTransactions(resTransactions?.data || [])
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchList(params)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='row g-xxl-9'>
            <div className='col-xxl-4'>
              <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
                <div className='card-body pb-0'>
                  <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'>
                    {listAssets.length}
                  </span>
                  <span className='fs-5 fw-semibold text-gray-600 pb-5 d-block'>Assets</span>
                </div>
              </div>
            </div>
            <div className='col-xxl-4'>
              <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
                <div className='card-body pb-0'>
                  <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'>
                    {listParties.length}
                  </span>
                  <span className='fs-5 fw-semibold text-gray-600 pb-5 d-block'>Parties</span>
                </div>
              </div>
            </div>
            <div className='col-xxl-4'>
              <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
                <div className='card-body pb-0'>
                  <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'>
                    {listTransactions.length}
                  </span>
                  <span className='fs-5 fw-semibold text-gray-600 pb-5 d-block'>Transactions</span>
                </div>
                <div className='card-body pb-10'></div>
                <div className='card-body pb-15'></div>
              </div>
            </div>
          </div>

          <div className='row g-xxl-9'>
            <div className='col-xxl-4 mb-5 mb-xl-0'>
              <VisitsDashboard />
            </div>
            <div className='col-xxl-4 mb-5 mb-xl-0'>
              <VisitsDashboard />
            </div>
            <div className='col-xxl-4 mb-5 mb-xl-0'>
              <VisitsDashboard />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export { TablesDashboard }

