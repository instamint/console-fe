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
            <td className=''>{item?.auctionType}</td>
            <td className=''>{item?.bestBidderName}</td>
            <td className=''>{item?.startTime && convertTimeZone(item?.startTime)}</td>
            <td className=''>{item?.endTime && convertTimeZone(item?.endTime)}</td>
            <td className=''>{item?.reserve}</td>
            <td className=''>{item?.netTradeAmount}</td>
            <td className=''>{item?.grossTradeAmount}</td>
            <td className=''>{item?.expired ? 'TRUE' : 'FALSE'}</td>
            <td className=''>{item?.duration}</td>
            <td className=''>{item?.currency}</td>
            <td className=''>{item?.closed ? 'TRUE' : 'FALSE'}</td>
            <td className=''>{item?.bestBid}</td>
            <td className=''>{item?.ask}</td>
          </tr>
        )
      }),
    [listAuctionHistory]
  )

  return (
    <>
      <div className='table-responsive'>
        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
          <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
            <tr className='fw-bold text-muted'>
              <th className='min-w-150px'>
                <span>AUCTION TYPE</span>
              </th>
              <th className='min-w-200px'>
                <span>BEST BIDDER NAME</span>
              </th>
              <th className='min-w-150px'>
                <span>START TIME</span>
              </th>
              <th className='min-w-150px'>
                <span>END TIME</span>
              </th>
              <th>
                <span>RESERVE</span>
              </th>
              <th className='min-w-200px'>
                <span>NET TRADE AMOUNT</span>
              </th>
              <th className='min-w-200px'>
                <span>GROSS TRADE AMOUNT</span>
              </th>
              <th>
                <span>EXPIRED</span>
              </th>
              <th>
                <span>DURATION</span>
              </th>
              <th>
                <span>CURRENCY</span>
              </th>
              <th>
                <span>CLOSED</span>
              </th>
              <th className='min-w-100px'>
                <span>BEST BID</span>
              </th>
              <th>
                <span>ASK</span>
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