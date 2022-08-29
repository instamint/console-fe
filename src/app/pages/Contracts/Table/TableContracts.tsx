/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { getListContracts } from '../../../../utils/api/contracts'
import { shortAddress, shortAddressBehind } from '../../../../_metronic/helpers/format'
import FilterSearch from '../../../components/FilterSearch'
import { Loading } from '../../../components/Loading'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const TablesContracts: React.FC<Props> = ({className}) => {
  const [listContracts, setListContracts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {searched, setSearch, results} = useSearch(listContracts, ['name', 'namespace'])

  const fetchListContracts = async () => {
    setIsLoading(true)
    try {
      const reps = await getListContracts()
      reps && setListContracts(reps)
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  const openTab = (url) => {
    window.open(url)
  }

  useEffect(() => {
    fetchListContracts()
  }, [])

  const renderList = useCallback(
    () =>
      Array.isArray(listContracts) &&
      listContracts?.map((item: any, index) => {
        return (
          <tr key={index}>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span data-tip={item?.address} className='text-dark fw-bold fs-7'>
                    {shortAddress(item?.address)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.description}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span
                    data-tip={item?.etherscanUrl}
                    className='text-dark fw-bold fs-7 text-hover-primary cursor-pointer'
                    onClick={() => openTab(item?.etherscanUrl)}
                  >
                    {shortAddressBehind(item?.etherscanUrl)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.shortName}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.chainName}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.lastUsedTokenId}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>
                    {item?.contractTypeResponseDto?.type}
                  </span>
                </div>
              </div>
            </td>
          </tr>
        )
      }),
    [listContracts]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Yours Contracts</span>
        </h3>
        <FilterSearch setSearch={setSearch} />
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-4'>
        {/* begin::Table container */}
        {isLoading ? (
          <Loading />
        ) : (
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='min-w-150px'>ADDRESS</th>
                  <th className='min-w-150px'>DESCRIPTION</th>
                  <th className='min-w-150px'>ETHERSCAN URL</th>
                  <th className='min-w-150px'>SHORT NAME</th>
                  <th className='min-w-150px'>CHAIN</th>
                  <th className='min-w-150px'>LAST USED TOKEN ID</th>
                  <th className='min-w-150px'>CONTRACT TYPE</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {listContracts?.length > 0 ? (
                  renderList()
                ) : (
                  <tr>
                    <td colSpan={7} className='text-center'>
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
        )}
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { TablesContracts }



const NameAssets = styled.span`
  &:hover {
    color: #009ef7
  }
`