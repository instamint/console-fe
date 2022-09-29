import {FC, useCallback, useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {getListTrade, getListTradeHistory} from '../../../../../utils/api/assets'
import {Loading} from '../../../../components/Loading'
import ICSort, {sortRows} from '../../../../components/Sort'

type Props = {
  idAsset?: string | number
}

export const TradeHistory: FC<Props> = ({idAsset = null}) => {
  const location = useLocation()
  const path = location?.pathname?.split('/')?.[1] || null
  const [listTradeHistory, setListTradeHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [params, setParams] = useState({
    limit: '10',
  })
  const [sort, setSort] = useState({sort_type: '', sort_name: ''})

  const fetchListTradeHistory = async (id, params) => {
    try {
      const reps = id ? await getListTradeHistory(id, params) : await getListTrade()
      reps && setListTradeHistory(reps?.data)
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchListTradeHistory(idAsset, params)
  }, [idAsset, params])

  const filterList = (results) => {
    let newListAssets = [...results]
    if (sort?.sort_name !== '' && sort?.sort_type !== '') {
      newListAssets = sortRows(newListAssets, sort)
    }
    return newListAssets
  }

  const handleSort = (name) => {
    let sortTypeNow = sort.sort_type === 'ASC' ? 'DESC' : 'ASC'
    if (sort.sort_name !== name) {
      sortTypeNow = 'ASC'
    }
    setSort({
      sort_name: name,
      sort_type: sortTypeNow,
    })
  }

  const renderListTradeHistory = useCallback(
    () =>
      Array.isArray(filterList(listTradeHistory)) &&
      filterList(listTradeHistory)?.map((item, index) => {
        return (
          <tr key={index}>
            <td className=''>{item?.buyerName}</td>
            <td className=''>{item?.sellerName}</td>
            <td className=''>${item?.fee || 0}</td>
            <td className=''>${item?.instamintPlatformFee || 0}</td>
            <td className=''>${item?.tradeAmount || 0}</td>
          </tr>
        )
      }),
    [listTradeHistory, sort]
  )

  return (
    <>
      <div className='table-responsive'>
        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
          <thead style={{verticalAlign: 'top'}}>
            {path === 'platform' ? (
              <tr className='fw-bold text-muted'>
                <th className='min-w-150px'>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('buyerName')}
                  >
                    BUYER NAME
                    <ICSort type={sort.sort_name === 'buyerName' ? sort.sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th className='min-w-150px'>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('sellerName')}
                  >
                    SELLER NAME
                    <ICSort type={sort.sort_name === 'sellerName' ? sort.sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('fee')}
                  >
                    FEE
                    <ICSort type={sort.sort_name === 'fee' ? sort.sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th className='min-w-150px'>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('instamintPlatformFee')}
                  >
                    PLATFORM FEE
                    <ICSort
                      type={sort.sort_name === 'instamintPlatformFee' ? sort.sort_type : 'default'}
                    />
                  </SpanThTable>
                </th>
                <th className='min-w-150px'>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('tradeAmount')}
                  >
                    TRADE AMOUNT
                    <ICSort type={sort.sort_name === 'tradeAmount' ? sort.sort_type : 'default'} />
                  </SpanThTable>
                </th>
              </tr>
            ) : (
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
            )}
          </thead>
          <tbody className='fs-6 fw-semibold'>
            {isLoading ? (
              <Loading />
            ) : filterList(listTradeHistory)?.length > 0 ? (
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

const SpanThTable = styled.span`
  width: max-content;
  display: flex;
  align-items: center;
`
