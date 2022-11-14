/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { getDelegatedUser } from '../../../../utils/api/delegated-users'
import { shortAddress } from '../../../../_metronic/helpers/format'
import { convertTimeZone } from '../../../../_metronic/helpers/format/datetime'
import { Loading } from '../../../components/Loading'
import Pagination from '../../../components/Pagination'
import ICSort, { sortRows } from '../../../components/Sort'
import useSearch from '../../../hooks/useSearch'
import IconCompleted from '../../../images/icon-completed.svg'

type Props = {
  className: string
}

const TablesDelegatedUsers: React.FC<Props> = ({className}) => {
  const [listDelegatedUsers, setListDelegatedUsers] = useState<Array<any>>([])
  const {searched, setSearch, results} = useSearch(listDelegatedUsers, [
    'clientAdmin',
    'createdAt',
    'firstName',
    'lastName',
    'partyName',
    'platformAdmin',
    'username',
    'uuid',
  ])
  const [isLoading, setIsLoading] = useState(true)
  const [paginate, setPaginate] = useState(null)

  const [sort, setSort] = useState({sort_type: '', sort_name: ''})
  const [page, setPage] = useState<string | number>(1)

  const fetchListDelegatedUsers = async () => {
    try {
      let responsive = await getDelegatedUser()
      if (responsive) {
        setListDelegatedUsers(responsive?.data || [])
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
    fetchListDelegatedUsers()
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
                  <span className='text-dark fw-bold fs-7'>{item?.username}</span>
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
                  <span className='text-dark fw-bold fs-7'>{item?.partyName}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.firstName}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.lastName}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>
                    {item?.createdAt && convertTimeZone(item?.createdAt)}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>
                    {item?.clientAdmin ? (
                      <img width={19} src={IconCompleted} alt='icon-completed' />
                    ) : (
                      ''
                    )}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>
                    {item?.platformAdmin ? (
                      <img width={19} src={IconCompleted} alt='icon-completed' />
                    ) : (
                      ''
                    )}
                  </span>
                </div>
              </div>
            </td>
          </tr>
        )
      }),
    [results, searched, page, sort]
  )

  return (
    <div className={`card ${className}`}>
      <div className='card-body py-4'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}

          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('username')}
                  >
                    User Name{' '}
                    <ICSort type={sort.sort_name === 'username' ? sort.sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('uuid')}
                  >
                    Uuid{' '}
                    <ICSort
                      type={sort.sort_name === 'uuid' ? sort.sort_type : 'default'}
                    />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('partyName')}
                  >
                    Party Name{' '}
                    <ICSort type={sort.sort_name === 'partyName' ? sort.sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('firstName')}
                  >
                    First Name{' '}
                    <ICSort
                      type={sort.sort_name === 'firstName' ? sort.sort_type : 'default'}
                    />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('lastName')}
                  >
                    Last Name{' '}
                    <ICSort
                      type={sort.sort_name === 'lastName' ? sort.sort_type : 'default'}
                    />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('createdAt')}
                  >
                    Created At{' '}
                    <ICSort
                      type={sort.sort_name === 'createdAt' ? sort.sort_type : 'default'}
                    />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('clientAdmin')}
                  >
                    Client Admin{' '}
                    <ICSort
                      type={sort.sort_name === 'clientAdmin' ? sort.sort_type : 'default'}
                    />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('platformAdmin')}
                  >
                    Platform Admin{' '}
                    <ICSort
                      type={sort.sort_name === 'platformAdmin' ? sort.sort_type : 'default'}
                    />
                  </SpanThTable>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Loading />
              ) : filterListResults(results, page)?.length > 0 ? (
                renderList()
              ) : (
                <tr>
                  <td colSpan={8} className='text-left'>
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

export { TablesDelegatedUsers }

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

const SpanThTable = styled.span`
  width: max-content;
  display: flex;
  align-items: center;
`
