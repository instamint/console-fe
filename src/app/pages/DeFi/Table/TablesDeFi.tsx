/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react'
// import styled from 'styled-components'
import { Loading } from '../../../components/Loading'
import Pagination from '../../../components/Pagination'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const TablesDeFi: React.FC<Props> = ({className}) => {
  const [listDeFi, setListDeFi] = useState<Array<any>>([])
  const {searched, setSearch, results} = useSearch(listDeFi, [])
  const [isLoading, setIsLoading] = useState(false)
  const [paginate, setPaginate] = useState(null)

  const [sort, setSort] = useState({sort_type: '', sort_name: ''})
  const [page, setPage] = useState<string | number>(1)


  const filterListResults = (results, page) => {
    let newList = [...results]
    return newList
  }

  const renderList = useCallback(
    () =>
      Array.isArray(filterListResults(results, page)) &&
      filterListResults(results, page)?.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.protocol}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.chain}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.address}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.tlv}</span>
                </div>
              </div>
            </td>
          </tr>
        )
      }),
    [results, searched, sort]
  )

  return (
    <div className={`card ${className}`}>
      <div className='card-body py-4'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bold text-muted'>
                <th>
                  <span className='cursor-pointer'>PROTOCOL</span>
                </th>
                <th>
                  <span className='cursor-pointer'>CHAIN</span>
                </th>
                <th>
                  <span className='cursor-pointer'>ADDRESS</span>
                </th>
                <th>
                  <span className='cursor-pointer'>TLV</span>
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
                  <td colSpan={4} className='text-left'>
                    <h4 className='mt-5 d-flex justify-content-center'>
                      There is currently no data available
                    </h4>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        </div>
        {paginate?.total_page > 0 && (
          <div className='card-footer-v2'>
            <Pagination setIsLoading={setIsLoading} paginate={paginate} setPage={setPage} />
          </div>
        )}
      </div>
    </div>
  )
}

export { TablesDeFi }

// const NameDropdow = styled.div`
//   padding: 5px;
//   font-size: 15px;
//   min-width: 100px;
//   display: flex;
//   cursor: pointer;
//   border-radius: 4px;
//   &:hover {
//     color: #fff;
//     background-color: #009ef7;
//     transition: all 0.2s ease;
//   }
// `
// const IconDrop = styled.i`
//   margin-left: 15px;
//   margin-bottom: 2px;
// `