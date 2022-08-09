/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from 'react'
import {getListParties} from '../../../../utils/api/parties'
import { shortAddress } from '../../../../_metronic/helpers/format'
import FilterSearch from '../../../components/FilterSearch'
import { Loading } from '../../../components/Loading'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

type Disable = boolean

const TablesParties: React.FC<Props> = ({className}) => {
  const [listParties, setListParties] = useState<Array<any>>([])
  const {searched, setSearch, results} = useSearch(listParties, ['name', 'namespace'])
  const [isLoading, setIsLoading] = useState(true)
  const [disable, setDisable] = useState<Disable>(false)

  const fetchListParties = async () => {
    try {
      setIsLoading(true)
      const responsive = await getListParties()
      setListParties(responsive?.data || [])
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  const convertTimeZone = (date) => {
    const dateToTime = (date) =>
      date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

    const dateString = date
    const userOffset = new Date().getTimezoneOffset() * 60 * 1000
    const localDate = new Date(dateString)
    const utcTime = new Date(localDate.getTime() + userOffset)
    return `${dateToTime(utcTime)}`
  }

  useEffect(() => {
    fetchListParties()
  }, [])

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
                  <span className='text-dark fw-bold fs-7'>{shortAddress(item?.uuid || '')}</span>
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
                  <span className='text-dark fw-bold fs-7'>{item?.namespace}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>
                    {shortAddress(item?.currentApiKey || '')}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>
                    {convertTimeZone(item?.createdAt)}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.b2BcrossReferenceId}</span>
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
        {isLoading ? (
          <Loading />
        ) : (
          <div className='table-responsive'>
            {/* begin::Table */}

            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted'>
                  <th>ID</th>
                  <th>UUID</th>
                  <th>NAME</th>
                  <th>NAME SPACE</th>
                  <th>CURRENT API KEY</th>
                  <th>CREATED AT</th>
                  <th>COSS REFERENCE ID</th>
                  <th></th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {listParties?.length > 0 ? (
                  renderList()
                ) : (
                  <tr>
                    <td colSpan={7} className='text-left'>
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

export {TablesParties}
