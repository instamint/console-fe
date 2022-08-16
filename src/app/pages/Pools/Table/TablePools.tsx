/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {getListPools} from '../../../../utils/api/pools'
import {convertTimeZone} from '../../../../_metronic/helpers/format/datetime'
import FilterSearch from '../../../components/FilterSearch'
import {Loading} from '../../../components/Loading'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const TablesPools: React.FC<Props> = ({className}) => {
  const [listPools, setListPools] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {searched, setSearch, results} = useSearch(listPools, ['name', 'namespace'])

  const fetchListPools = async () => {
    setIsLoading(true)
    try {
      const reps = await getListPools()
      reps && setListPools(reps)
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  const listAssetsInPool = (list_assets) => {
    if (list_assets?.length > 0) {
      return list_assets?.map((item, index) => {
        return (
          <Link
            key={index}
            to={{
              pathname: '/assets/detail',
              search: `?id=${item?.id}`,
            }}
            className='text-dark fw-bold fs-7'
            style={{marginRight: '4px'}}
          >
            <NameAssets>{item?.id}</NameAssets>
            {index + 1 === list_assets?.length ? '' : ', '}
          </Link>
        )
      })
    } else return ''
  }

  useEffect(() => {
    fetchListPools()
  }, [])

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
                  <span className='text-dark fw-bold fs-7'>{item?.name}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{convertTimeZone(item?.createAt)}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start'>
                  {listAssetsInPool(item?.assets)}
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
        {isLoading ? (
          <Loading />
        ) : (
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
              <tbody>
                {listPools?.length > 0 ? (
                  renderList()
                ) : (
                  <tr>
                    <td colSpan={4} className='text-center'>
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

export {TablesPools}



const NameAssets = styled.span`
  &:hover {
    color: #009ef7
  }
`