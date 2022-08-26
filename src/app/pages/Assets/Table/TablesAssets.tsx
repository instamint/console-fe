/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getListAsset } from '../../../../utils/api/assets'
import FilterSearch from '../FilterSearch/index'
import { Loading } from '../../../components/Loading'
import useSearch from '../../../hooks/useSearch'
import { Modal } from 'react-bootstrap'
import ModalPool from '../Modal/modal-pool'
import { createPool } from '../../../../utils/api/pools'
import { shortAddress, shortAddressBehind } from '../../../../_metronic/helpers/format'
import ReactTooltip from 'react-tooltip'

type Props = {
  className: string
}

const TablesAssets: React.FC<Props> = ({className}) => {
  const [listAssets, setListAssets] = useState<Array<any>>([])
  const {searched, setSearch, results} = useSearch(listAssets, ['name', 'namespace'])
  const [isLoading, setIsLoading] = useState(true)
  const [selectAsset, setSelectAsset] = useState([])
  const [modalPool, setModalPool] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const fetchListAssets = async () => {
    setIsLoading(true)
    try {
      const responsive = await getListAsset()
      setListAssets(responsive?.data || [])
    } catch (error) {
      console.error({error})
    } finally {
       setIsLoading(false)
    }
  }

  const isCheckerAsset = (item: any) => {
    return selectAsset?.some(i => i?.id === item?.id)
  }

  const handleSelectAsset = (item: any) => {
    let arrSelect = [...selectAsset]
    if (item && arrSelect) {
      if (!isCheckerAsset(item)) {
        arrSelect.push(item)
      } else {
        arrSelect = arrSelect?.filter((i) => i?.id !== item?.id)
      }
    }
    setSelectAsset(arrSelect)
  }

  const openModalPool = () => {
    setModalPool(true)
  }

  const handleAddPool = async (values) => {
    try {
      const list_assets_id = selectAsset?.map((i) => i.id) || []
      const reps = await createPool(values?.poolname, list_assets_id)
      if (reps) {
        navigate('/portfolios')
      }
    } catch (error) {
      setError('Portfolio Name already exists, please try again')
      console.error({error})
    }
  }

  useEffect(() => {
    fetchListAssets()
  }, [])

  const renderList = useCallback(
    () =>
      Array.isArray(listAssets) &&
      listAssets?.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              {!item?.portfolioId ? (
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value='1'
                        data-kt-check='true'
                        data-kt-check-target='.widget-9-check'
                        checked={isCheckerAsset(item)}
                        onChange={() => handleSelectAsset(item)}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.b2BcrossReferenceId}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex justify-content-start flex-shrink-0'>
                <Link
                  to={{
                    pathname: `detail/${item?.id}`,
                  }}
                  className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary'
                >
                  Details
                </Link>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.portfolioId ? 'P' : ''}</span>
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
                  <span data-tip={item?.hashId} className='text-dark fw-bold fs-7'>
                    {shortAddress(item?.hashId)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>
                    {shortAddressBehind(item?.mintRequestjson)}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.issuerName}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.ownerName}</span>
                </div>
              </div>
            </td>
          </tr>
        )
      }),
    [listAssets, selectAsset]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Yours Assets</span>
        </h3>
        <FilterSearch
          setSearch={setSearch}
          openModalPool={openModalPool}
          selectAsset={selectAsset}
        />
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
                  <th></th>
                  <th>CROSS REFERENCE</th>
                  <th>ACTION</th>
                  <th>STATUS</th>
                  <th>CHAIN</th>
                  <th>HASH ID</th>
                  <th>MINT REQUEST JSON</th>
                  <th>ISSUER</th>
                  <th>OWNER</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {listAssets?.length > 0 ? (
                  renderList()
                ) : (
                  <tr>
                    <td colSpan={21} className='text-center'>
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
      <Modal
        className='modal fade'
        id='kt_modal_select_location'
        data-backdrop='static'
        tabIndex={-1}
        role='dialog'
        show={modalPool}
        dialogClassName='modal-ml modal-dialog-500'
        aria-hidden='true'
      >
        <ModalPool
          modalPool={modalPool}
          setModalPool={setModalPool}
          handlePool={handleAddPool}
          error={error}
          setError={setError}
        />
      </Modal>
    </div>
  )
}

export { TablesAssets }

