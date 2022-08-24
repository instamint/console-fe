/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react'
import useSearch from '../../../../../hooks/useSearch'
import FilterSearch from '../FilterSearch/index'
import Dropdown from './Dropdown'

type Props = {
  className: string
}

const fakeData = () => {
  let arr = []
  let obj = {
    name: 'Ana Simmons',
    key: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    scope: 100,
    status: 1,
    created_date: '1/8/2022',
    updated_date: '10/8/2022',
  }
  for (let i = 0; i < 30; i++) {
    arr.push(obj)
  }
  return arr || []
}

const TablesApiKeys: React.FC<Props> = ({className}) => {
  const [listApiKeys, setListApiKeys] = useState(fakeData() || [])
  const {searched, setSearch, results} = useSearch(listApiKeys, ['name', 'namespace'])

  function TDTable({text}) {
    return (
      <td>
        <div className='d-flex align-items-center'>
          <div className='d-flex justify-content-start flex-column'>
            <span className='text-dark fw-bold fs-7'>{text}</span>
          </div>
        </div>
      </td>
    )
  }

  const renderList = useCallback(
    () =>
      Array.isArray(listApiKeys) &&
      listApiKeys?.length &&
      listApiKeys?.map((item, index) => {
        return (
          <tr key={index}>
            {Object.values(item).map((i, idx) => (
              <TDTable text={i} key={idx} />
            ))}
            <td>
              <div className='d-flex justify-content-center flex-shrink-0'>
                <button
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-end'
                  data-kt-menu-flip='top-end'
                  className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary'
                >
                  <i style={{paddingRight: '0px'}} className='bi bi-gear fs-2'></i>
                </button>
                <Dropdown />
              </div>
            </td>
          </tr>
        )
      }),
    [listApiKeys]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className='d-flex align-items-center'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>API Keys</span>
          </h3>
        </div>
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
                <th className='min-w-200px'>NAME</th>
                <th className='min-w-200px'>KEY</th>
                <th className='min-w-100px'>SCOPE</th>
                <th className='min-w-100px'>STATUS</th>
                <th className='min-w-150px'>CREATED DATE</th>
                <th className='min-w-150px'>UPDATED DATE</th>
                <th className='min-w-60px'></th>
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

export { TablesApiKeys }
