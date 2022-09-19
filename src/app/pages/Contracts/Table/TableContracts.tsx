/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { getListContracts } from '../../../../utils/api/contracts'
import { openTab } from '../../../../_metronic/helpers/actions'
import { shortAddress, shortAddressBehind } from '../../../../_metronic/helpers/format'
import FilterSearch from '../../../components/FilterSearch'
import { Loading } from '../../../components/Loading'
import ICSort, { sortRows } from '../../../components/Sort'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const TablesContracts: React.FC<Props> = ({className}) => {
  const [listContracts, setListContracts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {searched, setSearch, results} = useSearch(listContracts, ['name', 'namespace'])
  const [params, setParams] = useState({
    sort_name: '',
    sort_type: '',
    limit: '',
  })
  const [sort, setSort] = useState({sort_type: '', sort_name: ''})

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

  const fetchListContracts = async (params) => {
    try {
      const reps = await getListContracts(params)
      reps && setListContracts(reps?.data || [])
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  const filterList = (results) => {
    let newListAssets = [...results]
    if (sort?.sort_name !== '' && sort?.sort_type !== '') {
      newListAssets = sortRows(newListAssets, sort)
    }
    return newListAssets
  }

  useEffect(() => {
    fetchListContracts(params)
  }, [params])

  const renderList = useCallback(
    () =>
      Array.isArray(filterList(listContracts)) &&
      filterList(listContracts)?.map((item: any, index) => {
        return (
          <tr key={index}>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span data-tip={item?.address} className='text-dark fw-bold fs-7'>
                    {shortAddress(item?.address)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.description}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span
                    data-tip={item?.etherscanurl}
                    className='text-dark fw-bold fs-7 text-hover-primary cursor-pointer'
                    onClick={() => item?.etherscanurl && openTab(item?.etherscanurl)}
                  >
                    {item?.etherscanurl && shortAddressBehind(item?.etherscanurl)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.shortName}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.chainName}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.lastUsedTokenId}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>
                    {item?.contractTypeResponseDto?.type}
                  </span>
                </div>
              </div>
            </td>
          </tr>
        )
      }),
    [listContracts, sort]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Yours Contracts</span>
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
                  <th className='min-w-150px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('address')}
                    >
                      ADDRESS{' '}
                      <ICSort type={sort.sort_name === 'address' ? sort.sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className='min-w-150px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('description')}
                    >
                      DESCRIPTION{' '}
                      <ICSort
                        type={sort.sort_name === 'description' ? sort.sort_type : 'default'}
                      />
                    </SpanThTable>
                  </th>
                  <th className='min-w-150px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('etherscanurl')}
                    >
                      ETHERSCAN URL{' '}
                      <ICSort
                        type={sort.sort_name === 'etherscanurl' ? sort.sort_type : 'default'}
                      />
                    </SpanThTable>
                  </th>
                  <th className='min-w-150px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('shortName')}
                    >
                      SHORT NAME{' '}
                      <ICSort type={sort.sort_name === 'shortName' ? sort.sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className='min-w-150px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('chainName')}
                    >
                      CHAIN{' '}
                      <ICSort type={sort.sort_name === 'chainName' ? sort.sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className='min-w-150px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('lastUsedTokenId')}
                    >
                      LAST USED TOKEN ID{' '}
                      <ICSort
                        type={sort.sort_name === 'lastUsedTokenId' ? sort.sort_type : 'default'}
                      />
                    </SpanThTable>
                  </th>
                  <th className='min-w-150px'>
                    <SpanThTable
                      className='cursor-pointer'
                      onClick={() => !isLoading && handleSort('contractTypeResponseDto.type')}
                    >
                      CONTRACT TYPE{' '}
                      <ICSort
                        type={
                          sort.sort_name === 'contractTypeResponseDto.type'
                            ? sort.sort_type
                            : 'default'
                        }
                      />
                    </SpanThTable>
                  </th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {filterList(listContracts)?.length > 0 ? (
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

export { TablesContracts }



const SpanThTable = styled.span`
  width: max-content;
  display: flex;
  align-items: center;
`