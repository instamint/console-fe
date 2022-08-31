/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import {getListParties} from '../../../../utils/api/parties'
import {shortAddress} from '../../../../_metronic/helpers/format'
import { convertTimeZone } from '../../../../_metronic/helpers/format/datetime'
import {Loading} from '../../../components/Loading'
import ICSort from '../../../components/Sort'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

type Disable = boolean

const TablesParties: React.FC<Props> = ({className}) => {
  const [listParties, setListParties] = useState<Array<any>>([])
  const {searched, setSearch, results} = useSearch(listParties, ['name', 'namespace'])
  const [isLoading, setIsLoading] = useState(true)
  const [sort_name, set_sort_name] = useState('')
  const [sort_type, set_sort_type] = useState('')
  const [params, setParams] = useState({
    sort_name: '',
    sort_type: '',
  })

  const fetchListParties = async (params) => {
    try {
      // setIsLoading(true)
      const responsive = await getListParties(params)
      setListParties(responsive?.data || [])
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
    fetchListParties(params)
  }, [params])

  const renderList = useCallback(
    () =>
      Array.isArray(listParties) &&
      listParties?.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.name}</span>
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
                  <span className='text-dark fw-bold fs-7'>{convertTimeZone(item?.createdAt)}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex justify-content-start flex-shrink-0'>
                <Link
                  to={{
                    pathname: `detail/${item?.id}`,
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
    [listParties]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Parties</span>
        </h3>
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
                  <span className='cursor-pointer' onClick={() => !isLoading && handleSort('name')}>
                    NAME <ICSort type={sort_name === 'name' ? sort_type : 'default'} />
                  </span>
                </th>
                <th>
                  <span className='cursor-pointer' onClick={() => !isLoading && handleSort('uuid')}>
                    UUID <ICSort type={sort_name === 'uuid' ? sort_type : 'default'} />
                  </span>
                </th>
                <th>
                  <span className='cursor-pointer' onClick={() => !isLoading && handleSort('createdAt')}>
                    TIMESTAMP <ICSort type={sort_name === 'createdAt' ? sort_type : 'default'} />
                  </span>
                </th>
                <th>ACTION</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {isLoading ? (
                <Loading />
              ) : listParties?.length > 0 ? (
                renderList()
              ) : (
                <tr>
                  <td colSpan={7} className='text-left'>
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