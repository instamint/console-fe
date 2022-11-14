/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from 'react'
import {getListParties} from '../../../../utils/api/parties'
import {getListAsset} from '../../../../utils/api/assets'
import {getListTransactions} from '../../../../utils/api/transactions'
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
        <div className='row g-xxl-9'>
        <div className='col-xxl-4'>
          <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
            <div className='card-body pb-0'>
              <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'> 
                {listAssets.length}
              </span>
              <span className='fs-5 fw-semibold text-gray-600 pb-5 d-block'>
                {listAssets.length > 1 ? 'Assets' : 'Asset' }
              </span>
            </div>
          </div>
        </div>
        <div className='col-xxl-4'>
          <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
            <div className='card-body pb-0'>
              <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'> 
                {listParties.length}
              </span>
              <span className='fs-5 fw-semibold text-gray-600 pb-5 d-block'>
               {listParties.length > 1 ? 'Parties' : 'Party'}
              </span>
            </div>
          </div>
        </div>
        <div className='col-xxl-4'>
          <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
            <div className='card-body pb-0'>
              <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'> 
                {listTransactions.length}
              </span>
              <span className='fs-5 fw-semibold text-gray-600 pb-5 d-block'>
                {listTransactions.length > 1 ? 'Transactions' : 'Transaction'}
              </span>
            </div>
          </div>
        </div>
      </div>
    )} 
    </>
  )
}

export {TablesDashboard}
