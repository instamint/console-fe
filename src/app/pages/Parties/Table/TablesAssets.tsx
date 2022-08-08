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
    id: 0,
    party_name: 'Ana Simmons',
    namespace: 'Ana Simmons',
  }
  for (let i = 0; i < 30; i++) {
    arr.push({
      ...obj,
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    })
  }
  return arr || []
}

type Disable = boolean

const TablesParties: React.FC<Props> = ({className}) => {
  const [listParties, setListParties] = useState(fakeData() || [])
  const {searched, setSearch, results} = useSearch(listParties, ['name', 'namespace'])
  const [disable, setDisable] = useState<Disable>(false)

  const renderList = useCallback(
    () =>
      Array.isArray(listParties) &&
      listParties?.map((item, index) => {
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
                  <span className='text-dark fw-bold fs-7'>{item?.party_name}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.namespace}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex justify-content-end flex-shrink-0'>
                <a
                  href='#'
                  className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary'
                >
                  Details
                </a>
                <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid form-ml-4'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    name='notifications'
                    defaultChecked={disable}
                    onChange={() => setDisable(!disable)}
                  />
                  <label className='form-check-label fw-bold'>Disable</label>
                </div>
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
          <span className='card-label fw-bold fs-3 mb-1'>Yours Parties</span>
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
                <th className='min-w-80px'>ID</th>
                <th className='min-w-200px'>PARTY NAME</th>
                <th className='min-w-200px'>NAMESPACE</th>
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

export { TablesParties }

