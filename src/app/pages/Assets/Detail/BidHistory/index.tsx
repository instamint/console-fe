import { useCallback, useEffect, useState } from 'react'
import { getListBidHistory } from '../../../../../utils/api/assets'
import { convertTimeZone } from '../../../../../_metronic/helpers/format/datetime'

export default function BidHistory({idAsset}) {
  const [listBidHistory, setListBidHistory] = useState([])
  const [sort_name, set_sort_name] = useState('')
  const [sort_type, set_sort_type] = useState('')
  const [params, setParams] = useState({
    sort_name: '',
    sort_type: '',
    limit: '10',
  })

  const fetchListBidHistory = async (id, params) => {
    try {
      const reps = await getListBidHistory(id, params)
      reps && setListBidHistory(reps?.data)
    } catch (error) {
      console.error({error})
    }
  }

  useEffect(() => {
    idAsset && fetchListBidHistory(idAsset, params)
  }, [idAsset, params])

  const renderListBidHistory = useCallback(
    () =>
      Array.isArray(listBidHistory) &&
      listBidHistory?.map((item, index) => {
        return (
          <tr key={index}>
            <td className='w-250px'>{convertTimeZone(item?.createdAt)}</td>
            <td className=''>{item?.partyName || ''}</td>
            <td className=''>${item?.bid || 0}</td>
          </tr>
        )
      }),
    [listBidHistory]
  )

  return (
    <>
      <div className='table-responsive'>
        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
          <thead style={{verticalAlign: 'top'}}>
            <tr className='fw-bold text-muted'>
              <th className='w-250px'>
                <span>Timestamp</span>
              </th>
              <th>
                <span>Bidder</span>
              </th>
              <th>
                <span>Bid</span>
              </th>
            </tr>
          </thead>
          <tbody className='fs-6 fw-semibold'>
            {listBidHistory?.length > 0 ? (
              renderListBidHistory()
            ) : (
              <tr>
                <td colSpan={3} className='text-center'>
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