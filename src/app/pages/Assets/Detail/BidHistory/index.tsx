import React, {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'
import {getListBidHistory} from '../../../../../utils/api/assets'
import {convertTimeZone} from '../../../../../_metronic/helpers/format/datetime'
import ICSort from '../../../../components/Sort'

export default function BidHistory({idAsset}) {
  const [listBidHistory, setListBidHistory] = useState([])
  const [sort_name, set_sort_name] = useState('')
  const [sort_type, set_sort_type] = useState('')
  const [params, setParams] = useState({
    sort_name: '',
    sort_type: '',
    limit: '',
  })

  const handleSort = (name) => {
    let sortTypeNow = sort_type === 'ASC' ? 'DESC' : 'ASC'
    if (sort_name !== name) {
      sortTypeNow = 'ASC'
    }
    setParams({
      ...params,
      sort_name: name,
      sort_type: sortTypeNow,
    })
    set_sort_name(name)
    set_sort_type(sortTypeNow)
  }
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
            <td className=''>{item?.bid || ''}</td>
          </tr>
        )
      }),
    [listBidHistory]
  )

  return (
    <>
      <h3 className='card-title align-items-start flex-column mb-5 mt-2'>
        <span className='card-label fw-bold fs-3'>Bid History</span>
      </h3>
      <div className='table-responsive'>
        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
          <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
            <tr className='fw-bold text-muted'>
              <th className='w-250px'>
                <SpanThTable className='cursor-pointer' onClick={() => handleSort('createdAt')}>
                  TIMESTAMP <ICSort type={sort_name === 'createdAt' ? sort_type : 'default'} />
                </SpanThTable>
              </th>
              <th>
                <SpanThTable
                  className='cursor-pointer'
                  onClick={() => handleSort('bidder.name')}
                  style={{paddingTop: '0px'}}
                >
                  BIDDER <ICSort type={sort_name === 'bidder.name' ? sort_type : 'default'} />
                </SpanThTable>
              </th>
              <th>
                <SpanThTable
                  className='cursor-pointer'
                  onClick={() => handleSort('bid')}
                  style={{paddingTop: '0px'}}
                >
                  BID <ICSort type={sort_name === 'bid' ? sort_type : 'default'} />
                </SpanThTable>
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

const SpanThTable = styled.span`
  width: max-content;
  display: flex;
  align-items: center;
`