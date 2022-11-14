/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useState} from 'react'
import FilterSearch from '../../../../components/FilterSearch'
import useSearch from '../../../../hooks/useSearch'

type Props = {
  className: string
}

const fakeData = () => {
  let arr = []
  let obj = {
    username: 'Ana Simmons',
    timestamp: 'Ana Simmons',
    result: 'Ana Simmons',
  }
  for (let i = 0; i < 30; i++) {
    arr.push(obj)
  }
  return arr || []
}

const TablesLogin: React.FC<Props> = ({className}) => {
  const [listLogin, setListLogin] = useState(fakeData() || [])
  const {searched, setSearch, results} = useSearch(listLogin, ['name', 'namespace'])

  function TDTable({ text }) {
    return (
      <td  >
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
      Array.isArray(listLogin) && listLogin?.length && 
      listLogin?.map((item, index) => {
        return (
          <tr key={index}>
            {Object.values(item).map((i, idx) => (
              <TDTable text={i} key={idx}/>
            ))}
          </tr>
        )
      }),
    [listLogin]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Login List</span>
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
                <th className='min-w-200px'>User Name</th>
                <th className='min-w-200px'>Timestamp</th>
                <th className='min-w-200px'>Result</th>
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

export {TablesLogin}
