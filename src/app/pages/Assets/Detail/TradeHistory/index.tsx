import { useCallback, useEffect, useState } from 'react'
import { getListTradeHistory } from '../../../../../utils/api/assets'
import { convertTimeZone } from '../../../../../_metronic/helpers/format/datetime'

export default function TradeHistory({idAsset}) {
  const [listTradeHistory, setListTradeHistory] = useState([])
  const [sort_name, set_sort_name] = useState('')
  const [sort_type, set_sort_type] = useState('')
  const [params, setParams] = useState({
    limit: '10',
  })

  const fetchListTradeHistory = async (id, params) => {
    try {
      const reps = await getListTradeHistory(id, params)
      reps && setListTradeHistory(reps?.data)
    } catch (error) {
      console.error({error})
    }
  }

  useEffect(() => {
    idAsset && fetchListTradeHistory(idAsset, params)
  }, [idAsset, params])

  const renderListTradeHistory = useCallback(
    () =>
      Array.isArray(listTradeHistory) &&
      listTradeHistory?.map((item, index) => {
        return (
          <tr key={index}>
            <td className=''>{item?.buyerName}</td>
            <td className=''>{item?.sellerName}</td>
            <td className=''>{item?.fee}</td>
            <td className=''>{item?.platform_fee}</td>
            <td className=''>{item?.trade_amount}</td>
          </tr>
        )
      }),
    [listTradeHistory]
  )

  return (
    <>
      <div className='table-responsive'>
        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
          <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
            <tr className='fw-bold text-muted'>
              <th className='min-w-150px'>
                <span>BUYER NAME</span>
              </th>
              <th className='min-w-150px'>
                <span>SELLER NAME</span>
              </th>
              <th>
                <span>FEE</span>
              </th>
              <th className='min-w-150px'>
                <span>PLATFORM FEE</span>
              </th>
              <th className='min-w-150px'>
                <span>TRADE AMOUNT</span>
              </th>
            </tr>
          </thead>
          <tbody className='fs-6 fw-semibold'>
            {listTradeHistory?.length > 0 ? (
              renderListTradeHistory()
            ) : (
              <tr>
                <td colSpan={5} className='text-center'>
                  <h4 className='mt-5 d-flex justify-content-center'>
                    There is currently no data available
                  </h4>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}