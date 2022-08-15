/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useState} from 'react'
import { convertTimeZone } from '../../../../_metronic/helpers/format/datetime'
import FilterSearch from '../../../components/FilterSearch'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const fakeData = () => {
  let arr = []
  let obj = {
    poolname: 'New pool name',
    timestamp: '2022-08-14T13:00:45.405Z',
    list_assets: ['Asset 1', ' Asset 2', ' Asset 3'],
  }
  for (let i = 0; i < 30; i++) {
    arr.push({
      ...obj,
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    })
  }
  return arr || []
}

const TablesPools: React.FC<Props> = ({className}) => {
  const [listPools, setListPools] = useState(fakeData() || [])
  const {searched, setSearch, results} = useSearch(listPools, ['name', 'namespace'])

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
                  <span className='text-dark fw-bold fs-7'>{item?.poolname}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{convertTimeZone(item?.timestamp)}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.list_assets?.toString()}</span>
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
          <span className='card-label fw-bold fs-3 mb-1'>Yours Pools</span>
        </h3>
        <FilterSearch setSearch={setSearch} />
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
                <th className='min-w-60px'>#</th>
                <th className='min-w-150px'>POOL NAME</th>
                <th className='min-w-150px'>POOL CREATE TIMESTAMP</th>
                <th className='min-w-100px'>OF ASSETS IN THE POOL</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>{renderList()}</tbody>
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

export {TablesPools}
