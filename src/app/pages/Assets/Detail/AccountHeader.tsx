/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useLocation } from 'react-router'
import ReactTooltip from 'react-tooltip'
import { KTSVG } from '../../../../_metronic/helpers'
import { shortAddress } from '../../../../_metronic/helpers/format'
import { Dropdown1 } from '../../../../_metronic/partials'

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
          <div className='flex-grow-1'>
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
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <span style={{paddingLeft: '3px'}}>
                      {dataDetail?.asset?.chainName?.charAt(0)?.toUpperCase() +
                        dataDetail?.asset?.chainName?.slice(1)}
                    </span>
                  </a>
                  <a className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
                    {dataDetail?.asset?.assetTypeName}
                  </a>
                  <a className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'>
                    {dataDetail?.asset?.issuerName}
                  </a>
                </div>
              </div>

              <div className='d-flex my-4'>
                <a className='btn btn-sm btn-light me-2' id='kt_user_follow_button'>
                  <KTSVG
                    path='/media/icons/duotune/arrows/arr012.svg'
                    className='svg-icon-3 d-none'
                  />

                  <span className='indicator-label'>Follow</span>
                  <span className='indicator-progress'>
                    Please wait...
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                </a>
                
                <div className='me-0'>
                  <button
                    className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                  >
                    <i className='bi bi-three-dots fs-3'></i>
                  </button>
                  <Dropdown1 />
                </div>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
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

export { AccountHeader }
