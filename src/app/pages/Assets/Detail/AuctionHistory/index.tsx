import { useCallback, useEffect, useState } from 'react'
import { getListAuctionHistory } from '../../../../../utils/api/assets'
import { convertTimeZone } from '../../../../../_metronic/helpers/format/datetime'

export default function AuctionHistory({idAsset}) {
  const [listAuctionHistory, setListAuctionHistory] = useState([])
  const [sort_name, set_sort_name] = useState('')
  const [sort_type, set_sort_type] = useState('')
  const [params, setParams] = useState({
    limit: '10',
  })

  const fetchListAuctionHistory = async (id, params) => {
    try {
      const reps = await getListAuctionHistory(id, params)
      reps && setListAuctionHistory(reps?.data)
    } catch (error) {
      console.error({error})
    }
  }

  useEffect(() => {
    idAsset && fetchListAuctionHistory(idAsset, params)
  }, [idAsset, params])

  const renderListAuctionHistory = useCallback(
    () =>
      Array.isArray(listAuctionHistory) &&
      listAuctionHistory?.map((item, index) => {
        return (
          <tr key={index}>
            <td className=''>{item?.bestBidderName}</td>
            <td className=''>{item?.startTime && convertTimeZone(item?.startTime)}</td>
            <td className=''>{item?.endTime && convertTimeZone(item?.endTime)}</td>
            <td className=''>{item?.grossTradeAmount && `$${item?.grossTradeAmount}`}</td>
            <td className=''>{item?.expired ? 'TRUE' : 'FALSE'}</td>
            <td className=''>{item?.currency && `$${item?.currency}`}</td>
            <td className=''>{item?.closed ? 'TRUE' : 'FALSE'}</td>
          </tr>
        )
      }),
    [listAuctionHistory]
  )

  return (
    <>
      <div className='table-responsive'>
        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
          <thead style={{verticalAlign: 'top'}}>
            <tr className='fw-bold text-muted'>
              <th className='min-w-200px'>
                <span>Best Bidder Name</span>
              </th>
              <th className='min-w-150px'>
                <span>Start Time</span>
              </th>
              <th className='min-w-150px'>
                <span>End Time</span>
              </th>
              <th className='min-w-200px'>
                <span>Gross Trade Amount</span>
              </th>
              <th>
                <span>Expried</span>
              </th>
              <th>
                <span>Currency</span>
              </th>
              <th>
                <span>Closed</span>
              </th>
            </tr>
          </thead>
          <tbody className='fs-6 fw-semibold'>
            {listAuctionHistory?.length > 0 ? (
              renderListAuctionHistory()
            ) : (
              <tr>
                <td colSpan={13} className='text-center'>
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