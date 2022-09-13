/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {createAuction, endAuction, getListAsset} from '../../../../utils/api/assets'
import FilterSearch from '../FilterSearch/index'
import {Loading} from '../../../components/Loading'
import useSearch from '../../../hooks/useSearch'
import {Modal} from 'react-bootstrap'
import ModalPool from '../Modal/modal-pool'
import {createPool, updatePool} from '../../../../utils/api/pools'
import {
  shortAddress,
  shortAddressBehind,
  shortAddressMaxLength,
  showIconChain,
} from '../../../../_metronic/helpers/format'
import ReactTooltip from 'react-tooltip'
import ICSort from '../../../components/Sort'
import ModalAuction from '../Modal/modal-auction'
import {useAlert} from 'react-alert'
import styled from 'styled-components'
import {Search} from '../../../components/FilterSearch/search'
import Pagination from '../../../components/Pagination'

type Props = {
  className: string
}

const TablesAssets: React.FC<Props> = ({className}) => {
  const [listAssets, setListAssets] = useState<Array<any>>([])
  const {searched, setSearch, results} = useSearch(listAssets, [
    'hashId',
    'xref',
    'assetTypeName',
    'portfolioName',
    'mintCompletedStatus',
    'bestBid',
    'auction',
    'chainName',
    'issuerName',
    'ownerName',
  ])
  const [isLoading, setIsLoading] = useState(true)
  const [selectAsset, setSelectAsset] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const [idAssetAuction, setIdAssetAuction] = useState(null)
  const [typeModal, setTypeModal] = useState('portfolio')
  const [sort_name, set_sort_name] = useState('')
  const [sort_type, set_sort_type] = useState('')
  const [reloadList, setReloadList] = useState(false)
  const [minted, setMinted] = useState(false)
  const [paginate, setPaginate] = useState(null)
  const [isLoadingAuction, setIsLoadingAuction] = useState(false)
  const [params, setParams] = useState({
    sort_name: '',
    sort_type: '',
    limit: '',
  })
  const [page, setPage] = useState<string | number>(1)
  const [error, setError] = useState(null)
  const alert = useAlert()

  const fetchListAssets = async (params) => {
    // setIsLoading(true)
    try {
      const responsive = await getListAsset(params)
      if (responsive) {
        setListAssets(responsive?.data || [])
      }
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  const isCheckerAsset = (item: any) => {
    return selectAsset?.some((i) => i?.id === item?.id)
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
    setTypeModal('portfolio')
    setModalShow(true)
  }

  const openModalAuction = (id) => {
    setIdAssetAuction(id)
    setTypeModal('auction')
    setModalShow(true)
  }

  const handleAddPool = async (values) => {
    try {
      const list_assets_id = selectAsset?.map((i) => i.id) || []
      let reps = null
      if (values?.poolname && values?.poolname?.trim() !== '') {
        reps = await createPool(values?.poolname, list_assets_id)
      } else {
        reps = await updatePool(values?.portfolio?.id, list_assets_id)
      }
      if (reps) {
        alert.success('Assign To Portfolio successful!')
        setReloadList((preState) => !preState)
        setSelectAsset([])
        setModalShow(false)
      }
    } catch (error) {
      setError('Portfolio Name already exists, please try again')
      console.error({error})
    }
  }

  const handleAuction = async (values) => {
    try {
      await createAuction({
        id: idAssetAuction,
        reserve: values?.reserve_price && values?.reserve_price !== '' ? values?.reserve_price : 0,
        buyNow: values?.buy_now_price && values?.buy_now_price !== '' ? values?.buy_now_price : 0,
        auctionType: values?.auction_type,
      })
      alert.success('Auction successful!')
      setModalShow(false)
      setReloadList((preState) => !preState)
    } catch (error) {
      setError('Price should be a decimal with maximum two digits after comma')
      console.error({error})
    }
  }

  const handleEndAuction = async (id) => {
    setIsLoadingAuction(true)
    try {
      await endAuction(id)
      alert.success('End Auction successful!')
      setReloadList((preState) => !preState)
    } catch (error) {
      alert.error('End Auction failed, please try again!')
      console.error({error})
    } finally {
      setIsLoadingAuction(false)
    }
  }

  const handleSort = (name) => {
    let sortTypeNow = sort_type === 'ASC' ? 'DESC' : 'ASC'
    if (sort_name !== name) {
      sortTypeNow = 'ASC'
    }
    setParams({
      ...params,
      sort_name: name,
      sort_type: sortTypeNow,
    })
    set_sort_name(name)
    set_sort_type(sortTypeNow)
  }

  const filterMintedAssetList = (listAssets, page) => {
    let newListAssets = [...listAssets]
    if (page) {
      const start = (page - 1) * 30
      const end = start + 30
      newListAssets = newListAssets.slice(start, end)
    }
    if (minted) {
      return newListAssets?.filter((item) => item?.mintCompletedStatus === true)
    } else return newListAssets
  }

  useEffect(() => {
    setPaginate({
      current_page: page || 1,
      // from_record: 11,
      record_per_page: 30,
      // to_record: 20,
      total_page: Math.ceil(results?.length / 30) ?? 0,
      total_record: results?.length ?? 0,
    })
  }, [results, page])

  useEffect(() => {
    fetchListAssets(params)
  }, [params, reloadList])

  const renderList = useCallback(
    () =>
      Array.isArray(filterMintedAssetList(results, page)) &&
      filterMintedAssetList(results, page)?.map((item, index) => {
        return (
          <tr key={index}>
            <td>
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
                  <span data-tip={item?.xref} className='text-dark fw-bold fs-7'>
                    {item?.xref && shortAddress(item?.xref)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span data-tip={item?.assetTypeName} className='text-dark fw-bold fs-7'>
                    {item?.assetTypeName && shortAddressBehind(item?.assetTypeName, 10)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span
                    data-tip={item?.portfolioName}
                    className='badge py-3 px-4 fs-7 badge-light-primary'
                  >
                    {item?.portfolioName && shortAddressMaxLength(item?.portfolioName, 10)}
                  </span>
                  <ReactTooltip place='top' effect='solid' />
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>
                    {item?.mintCompletedStatus ? 'TRUE' : 'FALSE'}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.bestBid}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.auction ? 'TRUE' : 'FALSE'}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{showIconChain(item?.chainName)}</span>
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
            <td>
              <div className='d-flex justify-content-start flex-shrink-0 align-items-center'>
                <Link
                  to={{
                    pathname: `detail/overview/${item?.id}`,
                  }}
                  className='btn btn-sm fw-bold btn-primary'
                >
                  Details
                </Link>
                <button
                  onClick={() =>
                    item?.auction
                      ? !isLoadingAuction && handleEndAuction(item?.id)
                      : openModalAuction(item?.id)
                  }
                  className='btn btn-sm fw-bold btn-primary ms-3'
                  style={{minWidth: '108px'}}
                >
                  {item?.auction ? 'End Auction' : 'Auction'}
                </button>
              </div>
            </td>
          </tr>
        )
      }),
    [results, selectAsset, minted, searched, page, isLoadingAuction]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5 d-flex align-items-center'>
        <Search title='Search Assets' setSearch={setSearch} searched={searched} setPage={setPage} />
        <FilterSearch
          setSearch={setSearch}
          openModalPool={openModalPool}
          selectAsset={selectAsset}
          setMinted={setMinted}
          minted={minted}
        />
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-4'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}

          <table
            className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'
            id='kt_customers_table'
          >
            <thead style={{verticalAlign: 'top'}}>
              <tr className='fw-bold text-muted'>
                <th></th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('hashId')}
                  >
                    ASSET ID <ICSort type={sort_name === 'hashId' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th className='min-w-150px'>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('xref')}
                  >
                    CROSS REFERENCE
                    <ICSort type={sort_name === 'xref' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th className='min-w-100px'>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('assetTypeName')}
                  >
                    ASSET TYPE{' '}
                    <ICSort type={sort_name === 'assetTypeName' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('portfolioName')}
                  >
                    PORTFOLIO{' '}
                    <ICSort type={sort_name === 'portfolioName' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th className='min-w-150px'>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('mintCompletedStatus')}
                  >
                    MINT COMPLETED
                    <ICSort type={sort_name === 'mintCompletedStatus' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th className='min-w-100px'>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('bestBid')}
                  >
                    BEST BID
                    <ICSort type={sort_name === 'bestBid' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('auction')}
                  >
                    AUCTION
                    <ICSort type={sort_name === 'auction' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('chainName')}
                  >
                    CHAIN <ICSort type={sort_name === 'chainName' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('issuerName')}
                  >
                    ISSUER
                    <ICSort type={sort_name === 'issuerName' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('ownerName')}
                  >
                    OWNER
                    <ICSort type={sort_name === 'ownerName' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Loading />
              ) : filterMintedAssetList(results, page)?.length > 0 ? (
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
          </table>
        </div>
        {paginate?.total_page > 0 && (
          <div className='card-footer-v2'>
            <Pagination
              setIsLoading={setIsLoading}
              paginate={paginate}
              params={params}
              setParams={setParams}
              setPage={setPage}
            />
          </div>
        )}
      </div>
      <Modal
        className='modal fade'
        id='kt_modal_select_location'
        data-backdrop='static'
        tabIndex={-1}
        role='dialog'
        show={modalShow}
        dialogClassName='modal-ml modal-dialog-500'
        aria-hidden='true'
      >
        {typeModal === 'portfolio' ? (
          <ModalPool
            modalShow={modalShow}
            setModalShow={setModalShow}
            handlePool={handleAddPool}
            error={error}
            setError={setError}
          />
        ) : (
          <ModalAuction
            modalShow={modalShow}
            setModalShow={setModalShow}
            handleAuction={handleAuction}
            setIdAssetAuction={setIdAssetAuction}
            error={error}
            setError={setError}
          />
        )}
      </Modal>
    </div>
  )
}

export {TablesAssets}

const SpanThTable = styled.span`
  width: max-content;
  display: flex;
  align-items: center;
`