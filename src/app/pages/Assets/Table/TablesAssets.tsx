/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useState} from 'react'
import { shortAddress, shortAddressBehind } from '../../../../_metronic/helpers/format'
import FilterSearch from '../../../components/FilterSearch'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const fakeData = () => {
  let arr = []
  let obj = {
    id: 0,
    creator_name: 'Ana Simmons',
    owner_name: 'Ana Simmons',
    custodian_name: 'Ana Simmons',
    chain: '0xD9A7A340FC2bBAaD61063FA64b8553eeaCbdd9A4',
    token_id: '0xD9A7A340FC2bBAaD61063FA64b8553eeaCbdd9A4',
    ipfs_url: '0xD9A7A340FC2bBAaD61063FA64b8553eeaCbdd9A4',
  }
  for (let i = 0; i < 30; i++) {
    arr.push({
      ...obj,
      id: Math.floor(Math.random()*(999-100+1)+100)
    })
  }
  return arr || []
}

const TablesAssets: React.FC<Props> = ({className}) => {
  const [listAssets, setListAssets] = useState(fakeData() || [])
  const {searched, setSearch, results} = useSearch(listAssets, ['name', 'namespace'])

  const renderList = useCallback(
    () =>
      Array.isArray(listAssets) &&
      listAssets?.map((item, index) => {
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
                    <span className='text-dark fw-bold fs-7'>{item?.creator_name}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>{item?.owner_name}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>{item?.custodian_name}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>
                      {shortAddress(item?.chain || '')}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>
                      {shortAddress(item?.token_id || '')}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>
                      {shortAddressBehind(item?.ipfs_url)}
                    </span>
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
                </div>
              </td>
            </tr>
        )
      }),
    [listAssets]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Yours Assets</span>
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
                <th className='min-w-60px'>ID </th>
                <th className='min-w-150px'>CREATOR NAME</th>
                <th className='min-w-150px'>OWNER NAME</th>
                <th className='min-w-150px'>CUSTODIAN NAME</th>
                <th className='min-w-80px'>CHAIN</th>
                <th className='min-w-80px'>TOKEN ID</th>
                <th className='min-w-150px'>IPFS URL</th>
                <th className=''></th>
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

export {TablesAssets}
