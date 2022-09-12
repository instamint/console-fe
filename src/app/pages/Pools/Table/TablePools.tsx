/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import {getListPools} from '../../../../utils/api/pools'
import {shortAddress, shortAddressMaxLength} from '../../../../_metronic/helpers/format'
import {convertTimeZone} from '../../../../_metronic/helpers/format/datetime'
import FilterSearch from '../../../components/FilterSearch'
import {Loading} from '../../../components/Loading'
import ICSort from '../../../components/Sort'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const TablesPools: React.FC<Props> = ({className}) => {
  const [listPools, setListPools] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {searched, setSearch, results} = useSearch(listPools, ['name', 'namespace'])
  const [params, setParams] = useState({
    sort_name: '',
    sort_type: '',
    limit: '',
  })
  const [sort_name, set_sort_name] = useState('')
  const [sort_type, set_sort_type] = useState('')

  const fetchListPools = async (params) => {
    try {
      const reps = await getListPools(params)
      reps && setListPools(reps?.data)
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
    fetchListPools(params)
  }, [params])

  const renderList = useCallback(
    () =>
      Array.isArray(listPools) &&
      listPools?.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{index + 1}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span data-tip={item?.uuid} className='text-dark fw-bold fs-7'>
                    {shortAddress(item?.uuid)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span data-tip={item?.name} className='text-dark fw-bold fs-7'>
                    {shortAddressMaxLength(item?.name, 10)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{convertTimeZone(item?.createdAt)}</span>
                </div>
              </div>
            </td>
          </tr>
        )
      }),
    [listPools]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Yours Portfolios</span>
        </h3>
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
                  <th className='min-w-60px'>#</th>
                  <th className='min-w-60px'>
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
                      onClick={() => !isLoading && handleSort('name')}
                    >
                      PORTFOLIO NAME <ICSort type={sort_name === 'name' ? sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className='min-w-150px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('createdAt')}
                    >
                      PORTFOLIO CREATE TIMESTAMP{' '}
                      <ICSort type={sort_name === 'createdAt' ? sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {listPools?.length > 0 ? (
                  renderList()
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

export {TablesPools}

const SpanThTable = styled.span`
  width: max-content;
  display: flex;
  align-items: center;
`