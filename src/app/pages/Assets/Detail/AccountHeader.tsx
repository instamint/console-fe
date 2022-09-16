/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {useLocation} from 'react-router'
import ReactTooltip from 'react-tooltip'
import {KTSVG} from '../../../../_metronic/helpers'
import {shortAddress, shortAddressMaxLength} from '../../../../_metronic/helpers/format'

type Props = {
  id: string
  dataDetail: any
}

const AccountHeader: React.FC<Props> = ({id, dataDetail}) => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a className='text-gray-800 fs-2 fw-bolder me-1'>
                    Asset ID:{' '}
                    <span className='text-hover-primary' data-tip={dataDetail?.asset?.hashId}>
                      {shortAddress(dataDetail?.asset?.hashId)}
                    </span>
                  </a>
                  <ReactTooltip place='top' effect='solid' />
                  <a>
                    <KTSVG
                      path='/media/icons/duotune/general/gen026.svg'
                      className='svg-icon-1 svg-icon-primary'
                    />
                  </a>
                  {dataDetail?.asset?.portfolioName ? (
                    <a
                      className='btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_upgrade_plan'
                    >
                      {dataDetail?.asset?.portfolioName}
                    </a>
                  ) : (
                    ''
                  )}
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
                    <span style={{paddingLeft: '3px'}}>
                      {dataDetail?.asset?.chainName?.charAt(0)?.toUpperCase() +
                        dataDetail?.asset?.chainName?.slice(1)}
                    </span>
                  </a>
                  <a className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
                    <span data-tip={dataDetail?.asset?.assetTypeName}>
                      {dataDetail?.asset?.assetTypeName &&
                        shortAddressMaxLength(dataDetail?.asset?.assetTypeName, 15)}
                    </span>
                    <ReactTooltip place='top' effect='solid' />
                  </a>
                  <a className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'>
                    {dataDetail?.asset?.issuerName}
                  </a>
                </div>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack mb-4'>
              <div className='d-flex flex-column pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr066.svg'
                        className='svg-icon-3 svg-icon-success me-2'
                      />
                      <div className='fs-2 fw-bolder'>4500$</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Earnings</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr065.svg'
                        className='svg-icon-3 svg-icon-danger me-2'
                      />
                      <div className='fs-2 fw-bolder'>75</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Projects</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr066.svg'
                        className='svg-icon-3 svg-icon-success me-2'
                      />
                      <div className='fs-2 fw-bolder'>60%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {dataDetail?.asset?.chainName === 'algorand-testnet' && (
            <div className='flex-equal me-8'>
              <table className='table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0'>
                <tbody>
                  <tr>
                    <td className='text-gray-400' style={{paddingTop: '0'}}>
                      <span>MINT COMPLETED STATUS:</span>
                    </td>
                    <td className='text-gray-800' style={{paddingTop: '0'}}>
                      <span>{dataDetail?.asset?.mintCompletedStatus ? 'TRUE' : 'FALSE'}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>METADATACID:</td>
                    <td className='text-gray-800'>{dataDetail?.asset?.metadataCid}</td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>METADATAURI:</td>
                    <td data-tip={dataDetail?.asset?.metadataUri} className='text-gray-800'>
                      {dataDetail?.asset?.metadataUri &&
                        shortAddressMaxLength(dataDetail?.asset?.metadataUri, 15)}
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>
                      <span
                        data-tip={dataDetail?.asset?.transactionReceiptJson}
                        data-for='transactionReceiptJson'
                        // data-multiline={true}
                      >
                        TRANSACTION RECEIPTJSON
                      </span>
                      <ReactTooltip
                        multiline={true}
                        id='transactionReceiptJson'
                        place='bottom'
                        effect='solid'
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {dataDetail?.asset?.chainName === 'algorand-testnet' && (
            <div className='flex-equal'>
              <table className='table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0'>
                <tbody>
                  <tr>
                    <td className='text-gray-400 min-w-150px' style={{paddingTop: '0'}}>
                      ALOGRAND ASSETID:
                    </td>
                    <td className='text-gray-800' style={{paddingTop: '0'}}>
                      <span>{dataDetail?.algorandAsset?.algorandAssetId}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>ASSET NAME:</td>
                    <td className='text-gray-800'>{dataDetail?.algorandAsset?.assetName}</td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>UNIT NAME:</td>
                    <td className='text-gray-800'>{dataDetail?.algorandAsset?.unit_name}</td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>TOTAL:</td>
                    <td className='text-gray-800'>{dataDetail?.algorandAsset?.total}</td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>CLAWBACKPK:</td>
                    <td className='text-gray-800'>
                      <span data-tip={dataDetail?.algorandAsset?.clawBackPk}>
                        {shortAddress(dataDetail?.algorandAsset?.clawBackPk)}
                      </span>
                      <ReactTooltip place='top' effect='solid' />
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'> MANAGERPK:</td>
                    <td className='text-gray-800'>
                      <span data-tip={dataDetail?.algorandAsset?.managerpk}>
                        {shortAddress(dataDetail?.algorandAsset?.managerpk)}
                      </span>
                      <ReactTooltip place='top' effect='solid' />
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>RESERVEPK:</td>
                    <td className='text-gray-800'>
                      <span data-tip={dataDetail?.algorandAsset?.reservepk}>
                        {shortAddress(dataDetail?.algorandAsset?.reservepk)}
                      </span>
                      <ReactTooltip place='top' effect='solid' />
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>SENDERPK:</td>
                    <td className='text-gray-800'>
                      <span data-tip={dataDetail?.algorandAsset?.senderpk}>
                        {shortAddress(dataDetail?.algorandAsset?.senderpk)}
                      </span>
                      <ReactTooltip place='top' effect='solid' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <span
                className={
                  `nav-link text-active-primary me-6 cursor-pointer ` +
                  (location.pathname === `/assets/detail/overview/${id}` && 'active')
                }
                // to={`/assets/detail/overview/${id}`}
              >
                Overview
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {AccountHeader}
