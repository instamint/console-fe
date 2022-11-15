/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import {getListParties} from '../../../../utils/api/parties'
import {shortAddress} from '../../../../_metronic/helpers/format'
import {Search} from '../../../components/FilterSearch/search'
import {Loading} from '../../../components/Loading'
import Pagination from '../../../components/Pagination'
import ICSort, { sortRows } from '../../../components/Sort'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const TablesParties: React.FC<Props> = ({className}) => {
  const [listParties, setListParties] = useState<Array<any>>([])
  const {searched, setSearch, results} = useSearch(listParties, [
    'partyName',
    'partyID',
    'algorandAddress',
    'ethereumAddress',
    'opsIncurred',
  ])
  const [isLoading, setIsLoading] = useState(true)
  const [paginate, setPaginate] = useState(null)
  
  const [sort, setSort] = useState({sort_type: '', sort_name: ''})
  const [page, setPage] = useState<string | number>(1)

  const fetchListParties = async () => {
    try {
      let responsive = await getListParties()
      if (responsive) {
        setListParties(responsive?.data?.parties || [])
      }
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  const handleSort = (name) => {
    let sortTypeNow = sort.sort_type === 'ASC' ? 'DESC' : 'ASC'
    if (sort.sort_name !== name) {
      sortTypeNow = 'ASC'
    }
    setPage(1) //return the page to 1 when sorting
    setSort({
      sort_name: name,
      sort_type: sortTypeNow,
    })
  }

  const filterListResults = (results, page) => {
    let newList = [...results]
    if (sort?.sort_name !== '' && sort?.sort_type !== '') {
      newList = sortRows(newList, sort)
    }
    if (page) {
      const start = (page - 1) * 30
      const end = start + 30
      newList = newList.slice(start, end)
    } 
    return newList
  }

  useEffect(() => {
    setPaginate({
      current_page: page || 1,
      record_per_page: 30,
      total_page: Math.ceil(results?.length / 30) ?? 0,
      total_record: results?.length ?? 0,
    })
  }, [results, page])

  useEffect(() => {
    fetchListParties()
  }, [])

  const renderList = useCallback(
    () =>
      Array.isArray(filterListResults(results, page)) &&
      filterListResults(results, page)?.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.partyName}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span data-tip={item?.partyID} className='text-dark fw-bold fs-7'>
                    {shortAddress(item?.partyID)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span data-tip={item?.algorandAddress} className='text-dark fw-bold fs-7'>
                    {shortAddress(item?.algorandAddress)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span data-tip={item?.ethereumAddress} className='text-dark fw-bold fs-7'>
                    {shortAddress(item?.ethereumAddress)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>
                    {item?.opsIncurred}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex justify-content-start flex-shrink-0'>
                <Link
                  to={{
                    pathname: `/parties/detail/${item?.partyID}`,
                  }}
                  className='btn btn-sm fw-bold btn-primary'
                >
                  Details
                </Link>
              </div>
            </td>
          </tr>
        )
      }),
    [results, searched, page, sort]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5 d-flex align-items-center'>
        <Search title='Search Parties' setSearch={setSearch} searched={searched} />
        <div className='d-flex flex-wrap flex-stack'>
          <div className='d-flex align-items-center'>
            <div
              className='btn btn-primary me-5'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-start'
              data-kt-menu-flip='top-end'
            >
              Action
              <IconDrop className='fa-solid fa-caret-down'></IconDrop>
            </div>
            <div
              className='menu menu-sub menu-sub-dropdown w-250px w-md-150px p-4'
              data-kt-menu='true'
            >
              <div className='d-flex flex-column'>
                <NameDropdow>Run</NameDropdow>
                <NameDropdow>Jump</NameDropdow>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-4'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}

          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('partyName')}
                  >
                    Name{' '}
                    <ICSort type={sort.sort_name === 'partyName' ? sort.sort_type : 'default'} />
                  </span>
                </th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('partyID')}
                  >
                    ID <ICSort type={sort.sort_name === 'partyID' ? sort.sort_type : 'default'} />
                  </span>
                </th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('algorandAddress')}
                  >
                    Algorand Address{' '}
                    <ICSort
                      type={sort.sort_name === 'algorandAddress' ? sort.sort_type : 'default'}
                    />
                  </span>
                </th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('ethereumAddress')}
                  >
                    Ethereum Address{' '}
                    <ICSort
                      type={sort.sort_name === 'ethereumAddress' ? sort.sort_type : 'default'}
                    />
                  </span>
                </th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('opsIncurred')}
                  >
                    Ops Incurred{' '}
                    <ICSort
                      type={sort.sort_name === 'opsIncurred' ? sort.sort_type : 'default'}
                    />
                  </span>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {isLoading ? (
                <Loading />
              ) : filterListResults(results, page)?.length > 0 ? (
                renderList()
              ) : (
                <tr>
                  <td colSpan={5} className='text-left'>
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
        {paginate?.total_page > 0 && (
          <div className='card-footer-v2'>
            <Pagination setIsLoading={setIsLoading} paginate={paginate} setPage={setPage} />
          </div>
        )}
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesParties}

const NameDropdow = styled.div`
  padding: 5px;
  font-size: 15px;
  min-width: 100px;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background-color: #009ef7;
    transition: all 0.2s ease;
  }
`
const IconDrop = styled.i`
  margin-left: 15px;
  margin-bottom: 2px;
`