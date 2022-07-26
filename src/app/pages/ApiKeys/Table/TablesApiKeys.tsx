/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react'
import FilterSearch from '../../../components/FilterSearch'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const fakeData = () => {
  let arr = []
  let obj = {
    api_key: 0,
    date_issued: '30/7/2022',
    invocations: 'Invocations Text',
  }
  for (let i = 0; i < 30; i++) {
    arr.push({
      ...obj,
      api_key: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    })
  }
  return arr || []
}

const TablesApiKeys: React.FC<Props> = ({className}) => {
  const [listApiKeys, setListApiKeys] = useState(fakeData() || [])
  const {searched, setSearch, results} = useSearch(listApiKeys, ['name', 'namespace'])

  const renderList = useCallback(
    () =>
      Array.isArray(listApiKeys) &&
      listApiKeys?.map((item, index) => {
        return (
            <tr key={index}>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>{item?.api_key}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>{item?.date_issued}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>{item?.invocations}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex justify-content-end flex-shrink-0'>
                  <a
                    href='#'
                    className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary'
                  >
                    Revoke
                  </a>
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
          <div className='d-flex justify-content-end flex-shrink-0'>
            <span className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary'>
              Issue
            </span>
          </div>
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
                <th className='min-w-100px'>API KEY</th>
                <th className='min-w-200px'>DATE ISSUED</th>
                <th className='min-w-200px'>INVOCATIONS</th>
                <th className='min-w-100px'></th>
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

