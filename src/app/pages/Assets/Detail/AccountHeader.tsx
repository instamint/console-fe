/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {useLocation} from 'react-router'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { openTab } from '../../../../_metronic/helpers/actions'
import {shortAddress, shortAddressMaxLength} from '../../../../_metronic/helpers/format'
import { ButtonCopy } from '../../../components/Button/button-copy'
import './style.scss'

type Props = {
  id: string
  dataDetail: any
}

const AccountHeader: React.FC<Props> = ({id, dataDetail}) => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap mb-3'>
          <div className='me-17'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2 flex-wrap'>
                  <div className='d-flex align-items-center me-2'>
                    <span style={{width: '97px'}} className='text-gray-800 fs-2 fw-bolder'>
                      Asset ID:{' '}
                    </span>
                    <a className='d-flex text-gray-800 fs-2 fw-bolder me-1'>
                      <span
                        className='text-hover-primary'
                        data-tip={dataDetail?.asset?.instamintAssetHashid}
                      >
                        {shortAddress(dataDetail?.asset?.instamintAssetHashid)}
                      </span>
                    </a>
                    <ButtonCopy text={dataDetail?.asset?.instamintAssetHashid} width={20} />
                  </div>
                  <ReactTooltip place='top' effect='solid' />
                  {dataDetail?.asset?.portfolioName ? (
                    <a
                      className='btn btn-sm btn-light-success fw-bolder fs-8 py-1 px-3'
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
                      <span>Mint Completed:</span>
                    </td>
                    <td className='text-gray-800' style={{paddingTop: '0'}}>
                      <span>{dataDetail?.asset?.mintCompletedStatus ? 'TRUE' : 'FALSE'}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>Metadata CID:</td>
                    <td className='text-gray-800 d-flex'>
                      <SpanText data-tip={dataDetail?.asset?.metadataCid}>
                        {dataDetail?.asset?.metadataCid &&
                          shortAddressMaxLength(dataDetail?.asset?.metadataCid, 15)}
                      </SpanText>
                      <ButtonCopy text={dataDetail?.asset?.metadataCid} width={16} />
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>Metadata URI:</td>
                    <td className='text-gray-800 d-flex'>
                      <SpanText data-tip={dataDetail?.asset?.metadataUri}>
                        {dataDetail?.asset?.metadataUri &&
                          shortAddressMaxLength(dataDetail?.asset?.metadataUri, 15)}
                      </SpanText>
                      <ButtonCopy text={dataDetail?.asset?.metadataUri} width={16} />
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>
                      <SpanText
                        data-tip={dataDetail?.asset?.transactionReceiptJson}
                        data-for='transactionReceiptJson'
                        data-class={'tooltip-width'}
                      >
                        Tx Receipt JSON
                      </SpanText>
                      <ReactTooltip
                        multiline={true}
                        id='transactionReceiptJson'
                        place='bottom'
                        effect='solid'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>Explorer URL:</td>
                    <td className='text-gray-800'>
                      <div className='d-flex justify-content-start'>
                        <SpanText
                          data-tip={dataDetail?.asset?.explorerurl}
                          className='text-dark fs-6 text-hover-primary cursor-pointer'
                          onClick={() =>
                            dataDetail?.asset?.explorerurl &&
                            openTab(dataDetail?.asset?.explorerurl)
                          }
                        >
                          {dataDetail?.asset?.explorerurl &&
                            shortAddressMaxLength(dataDetail?.asset?.explorerurl, 15)}
                        </SpanText>
                        <ButtonCopy text={dataDetail?.asset?.explorerurl} width={16} />
                        <ReactTooltip place='top' effect='solid' />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>
                      <span>Royalty To Issuer BPS:</span>
                    </td>
                    <td className='text-gray-800'>
                      <span>{dataDetail?.asset?.royaltyToIssuerBasisPoints}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>
                      <span>Royalties Active:</span>
                    </td>
                    <td className='text-gray-800'>
                      <span>{dataDetail?.asset?.royaltiesActive ? 'TRUE' : 'FALSE'}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>
                      <span>Royalties Tx Hash:</span>
                    </td>
                    <td className='text-gray-800'>
                      <div className='d-flex justify-content-start'>
                        <SpanText
                          data-tip={dataDetail?.algorandAsset?.royaltiesTransactionHash}
                          className='text-dark fs-6 text-hover-primary cursor-pointer'
                        >
                          {dataDetail?.algorandAsset?.royaltiesTransactionHash &&
                            shortAddressMaxLength(
                              dataDetail?.algorandAsset?.royaltiesTransactionHash,
                              15
                            )}
                        </SpanText>
                        <ButtonCopy
                          text={dataDetail?.algorandAsset?.royaltiesTransactionHash}
                          width={16}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>
                      <span
                        data-tip={dataDetail?.algorandAsset?.royaltiesTransactionReceiptjson}
                        data-for='royaltiesTransactionReceiptjson'
                        data-class={'tooltip-width'}
                      >
                        Royalties Tx Receipt JSON
                      </span>
                      <ReactTooltip
                        multiline={true}
                        id='royaltiesTransactionReceiptjson'
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
                      Algorand Asset ID:
                    </td>
                    <td className='text-gray-800' style={{paddingTop: '0'}}>
                      <span>{dataDetail?.algorandAsset?.algorandAssetId}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>Asset Name:</td>
                    <td className='text-gray-800'>{dataDetail?.algorandAsset?.assetName}</td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>Unit Name:</td>
                    <td className='text-gray-800'>{dataDetail?.algorandAsset?.unitName}</td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>Total:</td>
                    <td className='text-gray-800'>{dataDetail?.algorandAsset?.total}</td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>Clawback:</td>
                    <td className='text-gray-800'>
                      <span data-tip={dataDetail?.algorandAsset?.clawBackPk}>
                        {shortAddress(dataDetail?.algorandAsset?.clawBackPk)}
                      </span>
                      <ReactTooltip place='top' effect='solid' />
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'> Manager:</td>
                    <td className='text-gray-800'>
                      <span data-tip={dataDetail?.algorandAsset?.managerpk}>
                        {shortAddress(dataDetail?.algorandAsset?.managerpk)}
                      </span>
                      <ReactTooltip place='top' effect='solid' />
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>Reserve:</td>
                    <td className='text-gray-800'>
                      <span data-tip={dataDetail?.algorandAsset?.reservepk}>
                        {shortAddress(dataDetail?.algorandAsset?.reservepk)}
                      </span>
                      <ReactTooltip place='top' effect='solid' />
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-400'>Sender:</td>
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


const SpanText = styled.span`
  width: fit-content;
  min-width: 150px;
`