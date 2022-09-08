/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from 'react'
import ReactTooltip from 'react-tooltip'
import { getListTransactions, getListTransactionsByAsset } from '../../../../utils/api/transactions'
import {shortAddress} from '../../../../_metronic/helpers/format'
import FilterSearch from '../../../components/FilterSearch'
import useSearch from '../../../hooks/useSearch'
import styled from 'styled-components'
import ICSort from '../../../components/Sort'
import { Loading } from '../../../components/Loading'
import { Search } from '../../../components/FilterSearch/search'
import { convertTimeZone } from '../../../../_metronic/helpers/format/datetime'

type Props = {
  className?: string
  idAsset?: string | number
}

const TablesTransactions: React.FC<Props> = ({className, idAsset}) => {
  const [listTransactions, setListTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {searched, setSearch, results} = useSearch(listTransactions, [
    'id',
    'uuid',
    'type',
    'cost',
    'costUnits',
    'createdAt',
  ])
  const [params, setParams] = useState({
    sort_name: '',
    sort_type: '',
  })
  const [sort_name, set_sort_name] = useState('')
  const [sort_type, set_sort_type] = useState('')

  const fetchListTransactions = async (params) => {
    try {
      let reps = idAsset
        ? await getListTransactionsByAsset(idAsset, params)
        : await getListTransactions(params)
      if (reps?.data?.length) {
        reps?.data?.forEach((item) => {
          if (item?.createdAt) {
            item.createdAt = convertTimeZone(item.createdAt)
          }
        })
      }
      reps && setListTransactions(reps?.data)
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

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

  useEffect(() => {
    fetchListTransactions(params)
  }, [params])

  const renderList = useCallback(
    () =>
      Array.isArray(results) &&
      results?.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.id}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span data-tip={item?.uuid} className='text-dark fw-bold fs-7'>
                    {shortAddress(item?.uuid || '')}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.type}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.cost}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.costUnits}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.createdAt}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex justify-content-end flex-shrink-0'>
                <a href='#' className='btn btn-sm fw-bold btn-primary'>
                  Details
                </a>
              </div>
            </td>
          </tr>
        )
      }),
    [results]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5 d-flex align-items-center'>
        <Search title='Search Transactions' setSearch={setSearch} searched={searched} />
        <FilterSearch setSearch={setSearch} />
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-4'>
        {/* begin::Table container */}
        {isLoading ? (
          <Loading />
        ) : (
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='min-w-60px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('id')}
                    >
                      ID <ICSort type={sort_name === 'id' ? sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className='min-w-150px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('uuid')}
                    >
                      UUID <ICSort type={sort_name === 'uuid' ? sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className='min-w-150px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('transactionType.type')}
                    >
                      TRANSACTION TYPE{' '}
                      <ICSort type={sort_name === 'transactionType.type' ? sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className='min-w-100px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('cost')}
                    >
                      COST <ICSort type={sort_name === 'cost' ? sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className='min-w-100px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('costUnits')}
                    >
                      COST UNIT <ICSort type={sort_name === 'costUnits' ? sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className='min-w-100px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('createdAt')}
                    >
                      TIMESTAMP <ICSort type={sort_name === 'createdAt' ? sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className=''></th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {results?.length > 0 ? (
                  renderList()
                ) : (
                  <tr>
                    <td colSpan={7} className='text-center'>
                      <h4 className='mt-5 d-flex justify-content-center'>
                        There is currently no data available
                      </h4>
                    </td>
                  </tr>
                )}
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
        )}
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesTransactions}

const SpanThTable = styled.span`
  width: max-content;
  display: flex;
  align-items: center;
`