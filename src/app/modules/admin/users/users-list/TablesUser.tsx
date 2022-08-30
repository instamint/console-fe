/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react'
import FilterSearch from '../../../../components/FilterSearch'
import useSearch from '../../../../hooks/useSearch'

type Props = {
  className: string
}

const fakeData = () => {
  let arr = []
  let obj = {
    username: 'Ana Simmons',
    firstname: 'Ana Simmons',
    lastname: 'Ana Simmons',
  }
  for (let i = 0; i < 30; i++) {
    arr.push({
      ...obj,
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    })
  }
  return arr || []
}

const TablesUsers: React.FC<Props> = ({className}) => {
  const [listUsers, setListUsers] = useState(fakeData() || [])
  const {searched, setSearch, results} = useSearch(listUsers, ['name', 'namespace'])

  const renderList = useCallback(
    () =>
      Array.isArray(listUsers) &&
      listUsers?.map((item, index) => {
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
                  <span className='text-dark fw-bold fs-7'>{item?.firstname}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.lastname}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex justify-content-end flex-shrink-0'>
                <span className='btn btn-sm fw-bold btn-primary'>Revoke</span>
              </div>
            </td>
          </tr>
        )
      }),
    [listUsers]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Users List</span>
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
                <th className='min-w-200px'>USER NAME</th>
                <th className='min-w-200px'>FIRST NAME</th>
                <th className='min-w-200px'>LAST NAME</th>
                <th className='min-w-200px'></th>
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

export { TablesUsers }

