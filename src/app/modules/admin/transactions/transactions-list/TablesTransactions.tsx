/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useState} from 'react'
import ReactTooltip from 'react-tooltip'
import { shortAddress } from '../../../../../_metronic/helpers/format'
import FilterSearch from '../../../../components/FilterSearch'
import useSearch from '../../../../hooks/useSearch'

type Props = {
  className: string
}

const fakeData = () => {
  let arr = []
  let obj = {
    id: 0,
    chain: '0xD9A7A340FC2bBAaD61063FA64b8553eeaCbdd9A4',
    transaction_type: 'NFT',
    from: 'VietNam',
    to: 'USA',
    timestamp: +new Date(),
  }
  for (let i = 0; i < 30; i++) {
    arr.push({
      ...obj,
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    })
  }
  return arr || []
}

const TablesTransactions: React.FC<Props> = ({className}) => {
  const [listTransactions, setListTransactions] = useState(fakeData() || [])
  const {searched, setSearch, results} = useSearch(listTransactions, ['name', 'namespace'])

  const renderList = useCallback(
    () =>
      Array.isArray(listTransactions) &&
      listTransactions?.map((item, index) => {
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
                  <span data-tip={item?.chain} className='text-dark fw-bold fs-7'>
                    {shortAddress(item?.chain || '')}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.transaction_type}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.from}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.to}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.timestamp}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex justify-content-end flex-shrink-0'>
                <a href='#' className='btn btn-sm fw-bold btn-primary'>
                  Details
                </a>
              </div>
            </td>
          </tr>
        )
      }),
    [listTransactions]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Yours Transactions</span>
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
                <th className='min-w-150px'>CHAIN</th>
                <th className='min-w-150px'>TRANSACTION TYPE</th>
                <th className='min-w-100px'>FROM</th>
                <th className='min-w-100px'>TO</th>
                <th className='min-w-150px'>TIMESTAMP</th>
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

export {TablesTransactions}
