/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { MixedWidget10, MixedWidget7 } from '../../../_metronic/partials/widgets'
import ImgIllustrations from '../../images/4.svg'

const AnalyticsPage: FC = () => (
  <>
    <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
      <div className='d-flex flex-column flex-column-fluid'>
        <div id='kt_app_toolbar' className='app-toolbar py-3 py-lg-6'>
          <div id='kt_app_toolbar_container' className='app-container d-flex flex-stack'>
            <div className='page-title d-flex flex-column justify-content-center flex-wrap me-3'>
              <h1 className='page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0'>
                Analytics
              </h1>
              <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1'>
                <li className='breadcrumb-item text-muted'>
                  <a className='text-muted text-hover-primary'>Console</a>
                </li>
                <li className='breadcrumb-item'>
                  <span className='bullet bg-gray-400 w-5px h-2px'></span>
                </li>
                <li className='breadcrumb-item text-muted'>Analytics</li>
              </ul>
            </div>
            <div className='d-flex align-items-center gap-2 gap-lg-3'>
              <a className='btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary'>
                Add Customer
              </a>
              <a className='btn btn-sm fw-bold btn-primary'>New Shipment</a>
            </div>
          </div>
        </div>

        <div id='kt_app_content' className='app-content flex-column-fluid'>
          <div id='kt_app_content_container' className='app-container'>
            <div className='row gy-5 g-xl-10'>
              <div className='col-xl-4 mb-xl-10'>
                <div className='card h-md-100'>
                  <div className='card-body d-flex flex-column flex-center'>
                    <div className='mb-2'>
                      <h1 className='fw-semibold text-gray-800 text-center lh-lg'>
                        <span className='fw-bolder'>Mint New Asset</span>
                      </h1>

                      <div className='py-10 text-center'>
                        <img src={ImgIllustrations} className='w-200px' alt='' />
                      </div>
                    </div>

                    <div className='text-center mb-1'>
                      <a
                        className='btn btn-sm btn-primary me-2'
                        data-bs-target='#kt_modal_offer_a_deal'
                        data-bs-toggle='modal'
                      >
                        Start Now
                      </a>

                      <a className='btn btn-sm btn-light'>Quick Guide</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-8 mb-5 mb-xl-10'>
                <div className='row g-lg-5 g-xl-10'>
                  <div className='col-md-6 col-xl-6 mb-5 mb-xl-10'>
                    <div className='card overflow-hidden h-md-50 mb-5 mb-xl-10'>
                      <div className='card-body d-flex justify-content-between flex-column px-0 pb-0'>
                        <div className='mb-4 px-9'>
                          <div className='d-flex align-items-center mb-2'>
                            <span className='fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2'>
                              $836,000
                            </span>
                          </div>

                          <span className='fs-6 fw-semibold text-gray-400'>Asset Trades YTD</span>
                        </div>

                        {/* Chart */}
                        <MixedWidget10
                          className='card-xxl-stretch-100 mb-5 mb-xl-8'
                          chartColor='dark'
                          chartHeight='150px'
                          dataChart={[35, 57, 28, 59, 42, 56, 43, 45, 59, 45, 57, 58]}
                          categories={[
                            'Feb 1',
                            'Feb 2',
                            'Feb 3',
                            'Feb 4',
                            'Feb 5',
                            'Feb 6',
                            'Feb 7',
                            'Feb 8',
                            'Feb 9',
                            'Feb 10',
                            'Feb 11',
                            'Feb 12',
                          ]}
                        />
                      </div>
                    </div>

                    <div className='card card-flush h-md-50 mb-lg-10'>
                      <div className='card-header pt-5'>
                        <div className='card-title d-flex flex-column'>
                          <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'>69,700</span>

                          <span className='text-gray-400 pt-1 fw-semibold fs-6'>Trade Volume</span>
                        </div>
                      </div>

                      <div className='card-body d-flex align-items-end pt-0'>
                        <div className='d-flex align-items-center flex-wrap'>
                          <div className='d-flex me-7 me-xxl-10'>
                            <MixedWidget7
                              className='card-xl-stretch mb-xl-8'
                              chartColor='primary'
                              chartHeight='200px'
                            />
                          </div>

                          <div className='d-flex flex-column content-justify-center flex-grow-1'>
                            <div className='d-flex fs-6 fw-semibold align-items-center'>
                              <div className='bullet w-8px h-6px rounded-2 bg-success me-3'></div>

                              <div className='fs-6 fw-semibold text-gray-400 flex-shrink-0'>
                                Algorand
                              </div>

                              <div className='separator separator-dashed min-w-10px flex-grow-1 mx-2'></div>

                              <div className='ms-auto fw-bolder text-gray-700 text-end'>45%</div>
                            </div>

                            <div className='d-flex fs-6 fw-semibold align-items-center my-1'>
                              <div className='bullet w-8px h-6px rounded-2 bg-primary me-3'></div>

                              <div className='fs-6 fw-semibold text-gray-400 flex-shrink-0'>
                                Ethereum
                              </div>

                              <div className='separator separator-dashed min-w-10px flex-grow-1 mx-2'></div>

                              <div className='ms-auto fw-bolder text-gray-700 text-end'>21%</div>
                            </div>

                            <div className='d-flex fs-6 fw-semibold align-items-center'>
                              <div className='bullet w-8px h-6px rounded-2 me-3'></div>

                              <div className='fs-6 fw-semibold text-gray-400 flex-shrink-0'>
                                Polygon
                              </div>

                              <div className='separator separator-dashed min-w-10px flex-grow-1 mx-2'></div>

                              <div className='ms-auto fw-bolder text-gray-700 text-end'>34%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 col-xl-6 mb-md-5 mb-xl-10'>
                    <div className='card overflow-hidden h-md-50 mb-5 mb-xl-10'>
                      <div className='card-body d-flex justify-content-between flex-column px-0 pb-0'>
                        <div className='mb-4 px-9'>
                          <div className='d-flex align-items-center mb-2'>
                            <span className='fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2'>
                              $87,210
                            </span>
                          </div>

                          <span className='fs-6 fw-semibold text-gray-400'>Asset Trades MTD</span>
                        </div>

                        {/* Chart */}
                        <MixedWidget10
                          className='card-xxl-stretch-100 mb-5 mb-xl-8'
                          chartColor='dark'
                          chartHeight='150px'
                          dataChart={[35, 47, 28, 59, 42, 56, 43, 45, 59, 45, 57, 58]}
                          categories={[
                            'Feb 1',
                            'Feb 2',
                            'Feb 3',
                            'Feb 4',
                            'Feb 5',
                            'Feb 6',
                            'Feb 7',
                            'Feb 8',
                            'Feb 9',
                            'Feb 10',
                            'Feb 11',
                            'Feb 12',
                          ]}
                        />
                      </div>
                    </div>

                    <div className='card card-flush h-md-50 mb-lg-10'>
                      <div className='card-header pt-5'>
                        <div className='card-title d-flex flex-column'>
                          <span className='fs-2hx fw-bold text-dark me-2 lh-1 ls-n2'>604</span>

                          <span className='text-gray-400 pt-1 fw-semibold fs-6'>
                            New Customers This Month
                          </span>
                        </div>
                      </div>

                      <div className='card-body d-flex flex-column justify-content-end pe-0'>
                        <span className='fs-6 fw-bolder text-gray-800 d-block mb-2'>
                          Today’s Heroes
                        </span>

                        <div className='symbol-group symbol-hover flex-nowrap'>
                          <div
                            className='symbol symbol-35px symbol-circle'
                            data-bs-toggle='tooltip'
                            data-kt-initialized='1'
                          >
                            <span className='symbol-label bg-warning text-inverse-warning fw-bold'>
                              A
                            </span>
                          </div>
                          <div
                            className='symbol symbol-35px symbol-circle'
                            data-bs-toggle='tooltip'
                            aria-label='Michael Eberon'
                            data-kt-initialized='1'
                          >
                            <img
                              alt='Pic'
                              src='https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-11.jpg'
                            />
                          </div>
                          <div
                            className='symbol symbol-35px symbol-circle'
                            data-bs-toggle='tooltip'
                            data-kt-initialized='1'
                          >
                            <span className='symbol-label bg-primary text-inverse-primary fw-bold'>
                              S
                            </span>
                          </div>
                          <div
                            className='symbol symbol-35px symbol-circle'
                            data-bs-toggle='tooltip'
                            aria-label='Melody Macy'
                            data-kt-initialized='1'
                          >
                            <img
                              alt='Pic'
                              src='https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-2.jpg'
                            />
                          </div>
                          <div
                            className='symbol symbol-35px symbol-circle'
                            data-bs-toggle='tooltip'
                            data-kt-initialized='1'
                          >
                            <span className='symbol-label bg-danger text-inverse-danger fw-bold'>
                              P
                            </span>
                          </div>
                          <div
                            className='symbol symbol-35px symbol-circle'
                            data-bs-toggle='tooltip'
                            aria-label='Barry Walter'
                            data-kt-initialized='1'
                          >
                            <img
                              alt='Pic'
                              src='https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-12.jpg'
                            />
                          </div>
                          <a
                            className='symbol symbol-35px symbol-circle'
                            data-bs-toggle='modal'
                            data-bs-target='#kt_modal_view_users'
                          >
                            <span className='symbol-label bg-light text-gray-400 fs-8 fw-bold'>
                              +42
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row gy-5 g-xl-10'>
              <div className='col-xl-4 mb-xl-10'>
                <div className='card card-flush h-lg-100'>
                  <div className='card-header pt-7'>
                    <h3 className='card-title align-items-start flex-column'>
                      <span className='card-label fw-bold text-gray-800'>Transaction History</span>
                      <span className='text-gray-400 mt-1 fw-semibold fs-6'>
                        59 Active Shipments
                      </span>
                    </h3>

                    <div className='card-toolbar'>
                      <a
                        className='btn btn-sm btn-light'
                        data-bs-toggle='tooltip'
                        data-bs-dismiss='click'
                        data-bs-custom-className='tooltip-inverse'
                        data-kt-initialized='1'
                      >
                        View All
                      </a>
                    </div>
                  </div>

                  <div className='card-body'>
                    <ul
                      className='nav nav-pills nav-pills-custom row position-relative mx-0 mb-9'
                      role='tablist'
                    >
                      <li className='nav-item col-4 mx-0 p-0' role='presentation'>
                        <a
                          className='nav-link active d-flex justify-content-center w-100 border-0 h-100'
                          data-bs-toggle='pill'
                          aria-selected='true'
                          role='tab'
                        >
                          <span className='nav-text text-gray-800 fw-bold fs-6 mb-3'>Notable</span>

                          <span className='bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded'></span>
                        </a>
                      </li>

                      <li className='nav-item col-4 mx-0 px-0' role='presentation'>
                        <a
                          className='nav-link d-flex justify-content-center w-100 border-0 h-100'
                          data-bs-toggle='pill'
                          aria-selected='false'
                          role='tab'
                        >
                          <span className='nav-text text-gray-800 fw-bold fs-6 mb-3'>
                            Delivered
                          </span>

                          <span className='bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded'></span>
                        </a>
                      </li>

                      <li className='nav-item col-4 mx-0 px-0' role='presentation'>
                        <a
                          className='nav-link d-flex justify-content-center w-100 border-0 h-100'
                          data-bs-toggle='pill'
                          aria-selected='false'
                          role='tab'
                        >
                          <span className='nav-text text-gray-800 fw-bold fs-6 mb-3'>Shipping</span>

                          <span className='bullet-custom position-absolute z-index-2 bottom-0 w-100 h-4px bg-primary rounded'></span>
                        </a>
                      </li>

                      <span className='position-absolute z-index-1 bottom-0 w-100 h-4px bg-light rounded'></span>
                    </ul>

                    <div className='tab-content'>
                      <div
                        className='tab-pane fade show active'
                        id='kt_list_widget_10_tab_1'
                        role='tabpanel'
                      >
                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Ship Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #5635-342808
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-success fw-bold my-2'>
                                Delivered
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Messina Harbor
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Sicily, Italy</span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Hektor Container Hotel
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Tallin, EST</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-6'></div>

                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Truck Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #0066-954784
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-primary fw-bold my-2'>
                                Shipping
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Haven van Rotterdam
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Rotterdam, Netherlands
                                </span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Forest-Midi
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Brussels, Belgium
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-6'></div>

                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Ship Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #5635-342808
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-success fw-bold my-2'>
                                Delivered
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Mina St - Zayed Port
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Abu Dhabi, UAE</span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  27 Drydock Boston
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Boston, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-6'></div>

                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Plane Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #5635-342808
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-danger fw-bold my-2'>
                                Delayed
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  KLM Cargo
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Schipol Airport, Amsterdam
                                </span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Singapore Cargo
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Changi Airport, Singapore
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='tab-pane fade' id='kt_list_widget_10_tab_2' role='tabpanel'>
                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Plane Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #5635-342808
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-success fw-bold my-2'>
                                Delivered
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>
                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  KLM Cargo
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Schipol Airport, Amsterdam
                                </span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>
                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Singapore Cargo
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Changi Airport, Singapore
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-6'></div>

                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Truck Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #0066-954784
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-success fw-bold my-2'>
                                Delivered
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Haven van Rotterdam
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Rotterdam, Netherlands
                                </span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Forest-Midi
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Brussels, Belgium
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-6'></div>

                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Ship Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #5635-342808
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-success fw-bold my-2'>
                                Delivered
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Mina St - Zayed Port
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Abu Dhabi, UAE</span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>
                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  27 Drydock Boston
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Boston, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-6'></div>

                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Ship Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #5635-342808
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-success fw-bold my-2'>
                                Delivered
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Messina Harbor
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Sicily, Italy</span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>
                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Hektor Container Hotel
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Tallin, EST</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='tab-pane fade' id='kt_list_widget_10_tab_3' role='tabpanel'>
                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Ship Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #5635-342808
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-primary fw-bold my-2'>
                                Shipping
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Mina St - Zayed Port
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Abu Dhabi, UAE</span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  27 Drydock Boston
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Boston, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-6'></div>

                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Plane Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #5635-342808
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-primary fw-bold my-2'>
                                Shipping
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  KLM Cargo
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Schipol Airport, Amsterdam
                                </span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Singapore Cargo
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Changi Airport, Singapore
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-6'></div>

                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Ship Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #5635-342808
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-primary fw-bold my-2'>
                                Shipping
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Messina Harbor
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Sicily, Italy</span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Hektor Container Hotel
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>Tallin, EST</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-6'></div>

                        <div className='m-0'>
                          <div className='d-flex align-items-sm-center mb-5'>
                            <div className='symbol symbol-45px me-4'>
                              <span className='symbol-label bg-primary'>
                                <span className='svg-icon svg-icon-2x svg-icon-white'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                              <div className='flex-grow-1 me-2'>
                                <a className='text-gray-400 fs-6 fw-semibold'>Truck Freight</a>
                                <span className='text-gray-800 fw-bold d-block fs-4'>
                                  #0066-954784
                                </span>
                              </div>
                              <span className='badge badge-lg badge-light-primary fw-bold my-2'>
                                Shipping
                              </span>
                            </div>
                          </div>

                          <div className='timeline'>
                            <div className='timeline-item align-items-center mb-7'>
                              <div className='timeline-line w-40px mt-6 mb-n12'></div>

                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-danger'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM6.39999 9.89999C6.99999 8.19999 8.40001 6.9 10.1 6.4C10.6 6.2 10.9 5.7 10.7 5.1C10.5 4.6 9.99999 4.3 9.39999 4.5C7.09999 5.3 5.29999 7 4.39999 9.2C4.19999 9.7 4.5 10.3 5 10.5C5.1 10.5 5.19999 10.6 5.39999 10.6C5.89999 10.5 6.19999 10.2 6.39999 9.89999ZM14.8 19.5C17 18.7 18.8 16.9 19.6 14.7C19.8 14.2 19.5 13.6 19 13.4C18.5 13.2 17.9 13.5 17.7 14C17.1 15.7 15.8 17 14.1 17.6C13.6 17.8 13.3 18.4 13.5 18.9C13.6 19.3 14 19.6 14.4 19.6C14.5 19.6 14.6 19.6 14.8 19.5Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Haven van Rotterdam
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Rotterdam, Netherlands
                                </span>
                              </div>
                            </div>

                            <div className='timeline-item align-items-center'>
                              <div className='timeline-line w-40px'></div>
                              <div className='timeline-icon'>
                                <span className='svg-icon svg-icon-2 svg-icon-info'>
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                                      fill='currentColor'
                                    ></path>
                                    <path
                                      d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                                      fill='currentColor'
                                    ></path>
                                  </svg>
                                </span>
                              </div>

                              <div className='timeline-content m-0'>
                                <span className='fs-6 text-gray-400 fw-semibold d-block'>
                                  Forest-Midi
                                </span>

                                <span className='fs-6 fw-bold text-gray-800'>
                                  Brussels, Belgium
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-8 mb-5 mb-xl-10'>
                <div className='row g-5 g-xl-10 h-xxl-50 mb-0 mb-xl-10'>
                  <div className='col-xxl-6'>
                    <div className='card card-flush h-lg-100'>
                      <div className='card-header py-7 mb-3'>
                        <h3 className='card-title align-items-start flex-column'>
                          <span className='card-label fw-bold text-gray-800'>
                            Trades By Asset Type
                          </span>
                          <span className='text-gray-400 mt-1 fw-semibold fs-6'>
                            8k social visitors
                          </span>
                        </h3>

                        <div className='card-toolbar'>
                          <a className='btn btn-sm btn-light'>View All</a>
                        </div>
                      </div>

                      <div className='card-body py-0 ps-6 mt-n12'>
                        <div id='kt_charts_widget_6' style={{minHeight: 365}}>
                          <div
                            id='apexchartslbz8mt3d'
                            className='apexcharts-canvas apexchartslbz8mt3d apexcharts-theme-light'
                            style={{width: 350, height: 350}}
                          >
                            <svg
                              id='SvgjsSvg9736'
                              width={350}
                              height={350}
                              xmlns='http://www.w3.org/2000/svg'
                              version='1.1'
                              xmlnsXlink='http://www.w3.org/1999/xlink'
                              className='apexcharts-svg'
                            >
                              <g
                                id='SvgjsG9738'
                                className='apexcharts-inner apexcharts-graphical'
                                transform='translate(96.72222900390625, 30)'
                              >
                                <defs id='SvgjsDefs9737'>
                                  <linearGradient
                                    id='SvgjsLinearGradient9742'
                                    x1={0}
                                    y1={0}
                                    x2={0}
                                    y2={1}
                                  >
                                    <stop
                                      id='SvgjsStop9743'
                                      stopOpacity='0.4'
                                      stopColor='rgba(216,227,240,0.4)'
                                      offset={0}
                                    />
                                    <stop
                                      id='SvgjsStop9744'
                                      stopOpacity='0.5'
                                      stopColor='rgba(190,209,230,0.5)'
                                      offset={1}
                                    />
                                    <stop
                                      id='SvgjsStop9745'
                                      stopOpacity='0.5'
                                      stopColor='rgba(190,209,230,0.5)'
                                      offset={1}
                                    />
                                  </linearGradient>
                                  <clipPath id='gridRectMasklbz8mt3d'>
                                    <rect
                                      id='SvgjsRect9747'
                                      width='234.09461116790771'
                                      height='278.03333127593993'
                                      x={-2}
                                      y={0}
                                      rx={0}
                                      ry={0}
                                      opacity={1}
                                      strokeWidth={0}
                                      stroke='none'
                                      strokeDasharray={0}
                                      fill='#fff'
                                    />
                                  </clipPath>
                                  <clipPath id='forecastMasklbz8mt3d' />
                                  <clipPath id='nonForecastMasklbz8mt3d' />
                                  <clipPath id='gridRectMarkerMasklbz8mt3d'>
                                    <rect
                                      id='SvgjsRect9748'
                                      width='234.09461116790771'
                                      height='282.03333127593993'
                                      x={-2}
                                      y={-2}
                                      rx={0}
                                      ry={0}
                                      opacity={1}
                                      strokeWidth={0}
                                      stroke='none'
                                      strokeDasharray={0}
                                      fill='#fff'
                                    />
                                  </clipPath>
                                </defs>
                                <rect
                                  id='SvgjsRect9746'
                                  width={0}
                                  height='278.03333127593993'
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  strokeDasharray={3}
                                  fill='url(#SvgjsLinearGradient9742)'
                                  className='apexcharts-xcrosshairs'
                                  y2='278.03333127593993'
                                  filter='none'
                                  fillOpacity='0.9'
                                />
                                <g
                                  id='SvgjsG9800'
                                  className='apexcharts-yaxis apexcharts-xaxis-inversed'
                                >
                                  <g
                                    id='SvgjsG9801'
                                    className='apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g'
                                    transform='translate(-75.15625, 0)'
                                  >
                                    <text
                                      id='SvgjsText9803'
                                      fontFamily='inherit'
                                      x={-15}
                                      y='32.330908866466174'
                                      textAnchor='start'
                                      dominantBaseline='auto'
                                      fontSize='14px'
                                      fontWeight={600}
                                      fill='#3f4254'
                                      className='apexcharts-text apexcharts-yaxis-label '
                                      style={{fontFamily: 'inherit'}}
                                    >
                                      <tspan id='SvgjsTspan9804'>ECR - 90%</tspan>
                                      <title>ECR - 90%</title>
                                    </text>
                                    <text
                                      id='SvgjsText9806'
                                      fontFamily='inherit'
                                      x={-15}
                                      y='87.93757512165416'
                                      textAnchor='start'
                                      dominantBaseline='auto'
                                      fontSize='14px'
                                      fontWeight={600}
                                      fill='#3f4254'
                                      className='apexcharts-text apexcharts-yaxis-label '
                                      style={{fontFamily: 'inherit'}}
                                    >
                                      <tspan id='SvgjsTspan9807'>FGI - 82%</tspan>
                                      <title>FGI - 82%</title>
                                    </text>
                                    <text
                                      id='SvgjsText9809'
                                      fontFamily='inherit'
                                      x={-15}
                                      y='143.54424137684214'
                                      textAnchor='start'
                                      dominantBaseline='auto'
                                      fontSize='14px'
                                      fontWeight={600}
                                      fill='#3f4254'
                                      className='apexcharts-text apexcharts-yaxis-label '
                                      style={{fontFamily: 'inherit'}}
                                    >
                                      <tspan id='SvgjsTspan9810'>EOQ - 75%</tspan>
                                      <title>EOQ - 75%</title>
                                    </text>
                                    <text
                                      id='SvgjsText9812'
                                      fontFamily='inherit'
                                      x={-15}
                                      y='199.1509076320301'
                                      textAnchor='start'
                                      dominantBaseline='auto'
                                      fontSize='14px'
                                      fontWeight={600}
                                      fill='#3f4254'
                                      className='apexcharts-text apexcharts-yaxis-label '
                                      style={{fontFamily: 'inherit'}}
                                    >
                                      <tspan id='SvgjsTspan9813'>FMG - 60%</tspan>
                                      <title>FMG - 60%</title>
                                    </text>
                                    <text
                                      id='SvgjsText9815'
                                      fontFamily='inherit'
                                      x={-15}
                                      y='254.7575738872181'
                                      textAnchor='start'
                                      dominantBaseline='auto'
                                      fontSize='14px'
                                      fontWeight={600}
                                      fill='#3f4254'
                                      className='apexcharts-text apexcharts-yaxis-label '
                                      style={{fontFamily: 'inherit'}}
                                    >
                                      <tspan id='SvgjsTspan9816'>PLG - 50%</tspan>
                                      <title>PLG - 50%</title>
                                    </text>
                                  </g>
                                </g>
                                <g
                                  id='SvgjsG9783'
                                  className='apexcharts-xaxis apexcharts-yaxis-inversed'
                                >
                                  <g
                                    id='SvgjsG9784'
                                    className='apexcharts-xaxis-texts-g'
                                    transform='translate(0, -9.333333333333334)'
                                  >
                                    <text
                                      id='SvgjsText9785'
                                      fontFamily='inherit'
                                      x='230.09461116790771'
                                      y='308.03333127593993'
                                      textAnchor='middle'
                                      dominantBaseline='auto'
                                      fontSize='14px'
                                      fontWeight={600}
                                      fill='#3f4254'
                                      className='apexcharts-text apexcharts-xaxis-label '
                                      style={{fontFamily: 'inherit'}}
                                    >
                                      <tspan id='SvgjsTspan9787'>16K</tspan>
                                      <title>16K</title>
                                    </text>
                                    <text
                                      id='SvgjsText9788'
                                      fontFamily='inherit'
                                      x='172.4709583759308'
                                      y='308.03333127593993'
                                      textAnchor='middle'
                                      dominantBaseline='auto'
                                      fontSize='14px'
                                      fontWeight={600}
                                      fill='#3f4254'
                                      className='apexcharts-text apexcharts-xaxis-label '
                                      style={{fontFamily: 'inherit'}}
                                    >
                                      <tspan id='SvgjsTspan9790'>12K</tspan>
                                      <title>12K</title>
                                    </text>
                                    <text
                                      id='SvgjsText9791'
                                      fontFamily='inherit'
                                      x='114.84730558395384'
                                      y='308.03333127593993'
                                      textAnchor='middle'
                                      dominantBaseline='auto'
                                      fontSize='14px'
                                      fontWeight={600}
                                      fill='#3f4254'
                                      className='apexcharts-text apexcharts-xaxis-label '
                                      style={{fontFamily: 'inherit'}}
                                    >
                                      <tspan id='SvgjsTspan9793'>8K</tspan>
                                      <title>8K</title>
                                    </text>
                                    <text
                                      id='SvgjsText9794'
                                      fontFamily='inherit'
                                      x='57.22365279197692'
                                      y='308.03333127593993'
                                      textAnchor='middle'
                                      dominantBaseline='auto'
                                      fontSize='14px'
                                      fontWeight={600}
                                      fill='#3f4254'
                                      className='apexcharts-text apexcharts-xaxis-label '
                                      style={{fontFamily: 'inherit'}}
                                    >
                                      <tspan id='SvgjsTspan9796'>4K</tspan>
                                      <title>4K</title>
                                    </text>
                                    <text
                                      id='SvgjsText9797'
                                      fontFamily='inherit'
                                      x='-0.4000000000000057'
                                      y='308.03333127593993'
                                      textAnchor='middle'
                                      dominantBaseline='auto'
                                      fontSize='14px'
                                      fontWeight={600}
                                      fill='#3f4254'
                                      className='apexcharts-text apexcharts-xaxis-label '
                                      style={{fontFamily: 'inherit'}}
                                    >
                                      <tspan id='SvgjsTspan9799'>0K</tspan>
                                      <title>0K</title>
                                    </text>
                                  </g>
                                </g>
                                <g id='SvgjsG9817' className='apexcharts-grid'>
                                  <g id='SvgjsG9818' className='apexcharts-gridlines-horizontal' />
                                  <g id='SvgjsG9819' className='apexcharts-gridlines-vertical'>
                                    <line
                                      id='SvgjsLine9820'
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2='278.03333127593993'
                                      stroke='#e4e6ef'
                                      strokeDasharray={4}
                                      strokeLinecap='butt'
                                      className='apexcharts-gridline'
                                    />
                                    <line
                                      id='SvgjsLine9822'
                                      x1='57.823652791976926'
                                      y1={0}
                                      x2='57.823652791976926'
                                      y2='278.03333127593993'
                                      stroke='#e4e6ef'
                                      strokeDasharray={4}
                                      strokeLinecap='butt'
                                      className='apexcharts-gridline'
                                    />
                                    <line
                                      id='SvgjsLine9824'
                                      x1='115.64730558395385'
                                      y1={0}
                                      x2='115.64730558395385'
                                      y2='278.03333127593993'
                                      stroke='#e4e6ef'
                                      strokeDasharray={4}
                                      strokeLinecap='butt'
                                      className='apexcharts-gridline'
                                    />
                                    <line
                                      id='SvgjsLine9826'
                                      x1='173.4709583759308'
                                      y1={0}
                                      x2='173.4709583759308'
                                      y2='278.03333127593993'
                                      stroke='#e4e6ef'
                                      strokeDasharray={4}
                                      strokeLinecap='butt'
                                      className='apexcharts-gridline'
                                    />
                                    <line
                                      id='SvgjsLine9828'
                                      x1='231.29461116790773'
                                      y1={0}
                                      x2='231.29461116790773'
                                      y2='278.03333127593993'
                                      stroke='#e4e6ef'
                                      strokeDasharray={4}
                                      strokeLinecap='butt'
                                      className='apexcharts-gridline'
                                    />
                                  </g>
                                  <line
                                    id='SvgjsLine9821'
                                    x1={0}
                                    y1='279.03333127593993'
                                    x2={0}
                                    y2='285.03333127593993'
                                    stroke='#e0e0e0'
                                    strokeDasharray={0}
                                    strokeLinecap='butt'
                                    className='apexcharts-xaxis-tick'
                                  />
                                  <line
                                    id='SvgjsLine9823'
                                    x1='57.823652791976926'
                                    y1='279.03333127593993'
                                    x2='57.823652791976926'
                                    y2='285.03333127593993'
                                    stroke='#e0e0e0'
                                    strokeDasharray={0}
                                    strokeLinecap='butt'
                                    className='apexcharts-xaxis-tick'
                                  />
                                  <line
                                    id='SvgjsLine9825'
                                    x1='115.64730558395385'
                                    y1='279.03333127593993'
                                    x2='115.64730558395385'
                                    y2='285.03333127593993'
                                    stroke='#e0e0e0'
                                    strokeDasharray={0}
                                    strokeLinecap='butt'
                                    className='apexcharts-xaxis-tick'
                                  />
                                  <line
                                    id='SvgjsLine9827'
                                    x1='173.4709583759308'
                                    y1='279.03333127593993'
                                    x2='173.4709583759308'
                                    y2='285.03333127593993'
                                    stroke='#e0e0e0'
                                    strokeDasharray={0}
                                    strokeLinecap='butt'
                                    className='apexcharts-xaxis-tick'
                                  />
                                  <line
                                    id='SvgjsLine9829'
                                    x1='231.29461116790773'
                                    y1='279.03333127593993'
                                    x2='231.29461116790773'
                                    y2='285.03333127593993'
                                    stroke='#e0e0e0'
                                    strokeDasharray={0}
                                    strokeLinecap='butt'
                                    className='apexcharts-xaxis-tick'
                                  />
                                  <line
                                    id='SvgjsLine9831'
                                    x1={0}
                                    y1='278.03333127593993'
                                    x2='230.09461116790771'
                                    y2='278.03333127593993'
                                    stroke='transparent'
                                    strokeDasharray={0}
                                    strokeLinecap='butt'
                                  />
                                  <line
                                    id='SvgjsLine9830'
                                    x1={0}
                                    y1={1}
                                    x2={0}
                                    y2='278.03333127593993'
                                    stroke='transparent'
                                    strokeDasharray={0}
                                    strokeLinecap='butt'
                                  />
                                </g>
                                <g
                                  id='SvgjsG9749'
                                  className='apexcharts-bar-series apexcharts-plot-series'
                                >
                                  <g id='SvgjsG9750' className='apexcharts-series'>
                                    <path
                                      id='SvgjsPath9754'
                                      d='M 0.1 13.901666563796995L 207.8136979699135 13.901666563796995Q 215.8136979699135 13.901666563796995 215.8136979699135 21.901666563796994L 215.8136979699135 33.704999691390995Q 215.8136979699135 41.704999691390995 207.8136979699135 41.704999691390995L 207.8136979699135 41.704999691390995L 0.1 41.704999691390995L 0.1 41.704999691390995z'
                                      fill='rgba(62,151,255,0.85)'
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      strokeLinecap='round'
                                      strokeWidth={0}
                                      strokeDasharray={0}
                                      className='apexcharts-bar-area'
                                      clipPath='url(#gridRectMasklbz8mt3d)'
                                      path='M 0.1 13.901666563796995L 207.8136979699135 13.901666563796995Q 215.8136979699135 13.901666563796995 215.8136979699135 21.901666563796994L 215.8136979699135 33.704999691390995Q 215.8136979699135 41.704999691390995 207.8136979699135 41.704999691390995L 207.8136979699135 41.704999691390995L 0.1 41.704999691390995L 0.1 41.704999691390995z'
                                      // pathfrom='M 0.1 13.901666563796995L 0.1 13.901666563796995L 0.1 41.704999691390995L 0.1 41.704999691390995L 0.1 41.704999691390995L 0.1 41.704999691390995L 0.1 41.704999691390995L 0.1 13.901666563796995'
                                      cy='69.50833281898498'
                                      cx='215.8136979699135'
                                      // j={0}
                                      // val={15}
                                      // barheight='27.803333127593998'
                                      // barwidth='215.7136979699135'
                                    />
                                    <path
                                      id='SvgjsPath9760'
                                      d='M 0.1 69.50833281898498L 164.67095837593078 69.50833281898498Q 172.67095837593078 69.50833281898498 172.67095837593078 77.50833281898498L 172.67095837593078 89.31166594657898Q 172.67095837593078 97.31166594657898 164.67095837593078 97.31166594657898L 164.67095837593078 97.31166594657898L 0.1 97.31166594657898L 0.1 97.31166594657898z'
                                      fill='rgba(241,65,108,0.85)'
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      strokeLinecap='round'
                                      strokeWidth={0}
                                      strokeDasharray={0}
                                      className='apexcharts-bar-area'
                                      clipPath='url(#gridRectMasklbz8mt3d)'
                                      path='M 0.1 69.50833281898498L 164.67095837593078 69.50833281898498Q 172.67095837593078 69.50833281898498 172.67095837593078 77.50833281898498L 172.67095837593078 89.31166594657898Q 172.67095837593078 97.31166594657898 164.67095837593078 97.31166594657898L 164.67095837593078 97.31166594657898L 0.1 97.31166594657898L 0.1 97.31166594657898z'
                                      cy='125.11499907417297'
                                      cx='172.67095837593078'
                                      // j={1}
                                      // val={12}
                                      // barheight='27.803333127593998'
                                      // barwidth='172.5709583759308'
                                    />
                                    <path
                                      id='SvgjsPath9766'
                                      d='M 0.1 125.11499907417297L 135.90913197994232 125.11499907417297Q 143.90913197994232 125.11499907417297 143.90913197994232 133.11499907417297L 143.90913197994232 144.91833220176696Q 143.90913197994232 152.91833220176696 135.90913197994232 152.91833220176696L 135.90913197994232 152.91833220176696L 0.1 152.91833220176696L 0.1 152.91833220176696z'
                                      fill='rgba(80,205,137,0.85)'
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      strokeLinecap='round'
                                      strokeWidth={0}
                                      strokeDasharray={0}
                                      className='apexcharts-bar-area'
                                      clipPath='url(#gridRectMasklbz8mt3d)'
                                      path='M 0.1 125.11499907417297L 135.90913197994232 125.11499907417297Q 143.90913197994232 125.11499907417297 143.90913197994232 133.11499907417297L 143.90913197994232 144.91833220176696Q 143.90913197994232 152.91833220176696 135.90913197994232 152.91833220176696L 135.90913197994232 152.91833220176696L 0.1 152.91833220176696L 0.1 152.91833220176696z'
                                      cy='180.72166532936097'
                                      cx='143.90913197994232'
                                      // j={2}
                                      // val={10}
                                      // barheight='27.803333127593998'
                                      // barwidth='143.80913197994232'
                                    />
                                    <path
                                      id='SvgjsPath9772'
                                      d='M 0.1 180.72166532936097L 107.14730558395387 180.72166532936097Q 115.14730558395387 180.72166532936097 115.14730558395387 188.72166532936097L 115.14730558395387 200.52499845695496Q 115.14730558395387 208.52499845695496 107.14730558395387 208.52499845695496L 107.14730558395387 208.52499845695496L 0.1 208.52499845695496L 0.1 208.52499845695496z'
                                      fill='rgba(255,199,0,0.85)'
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      strokeLinecap='round'
                                      strokeWidth={0}
                                      strokeDasharray={0}
                                      className='apexcharts-bar-area'
                                      clipPath='url(#gridRectMasklbz8mt3d)'
                                      path='M 0.1 180.72166532936097L 107.14730558395387 180.72166532936097Q 115.14730558395387 180.72166532936097 115.14730558395387 188.72166532936097L 115.14730558395387 200.52499845695496Q 115.14730558395387 208.52499845695496 107.14730558395387 208.52499845695496L 107.14730558395387 208.52499845695496L 0.1 208.52499845695496L 0.1 208.52499845695496z'
                                      // pathfrom='M 0.1 180.72166532936097L 0.1 180.72166532936097L 0.1 208.52499845695496L 0.1 208.52499845695496L 0.1 208.52499845695496L 0.1 208.52499845695496L 0.1 208.52499845695496L 0.1 180.72166532936097'
                                      cy='236.32833158454895'
                                      cx='115.14730558395387'
                                      // j={3}
                                      // val={8}
                                      // barheight='27.803333127593998'
                                      // barwidth='115.04730558395387'
                                    />
                                    <path
                                      id='SvgjsPath9778'
                                      d='M 0.1 236.32833158454895L 92.76639238595963 236.32833158454895Q 100.76639238595963 236.32833158454895 100.76639238595963 244.32833158454895L 100.76639238595963 256.13166471214294Q 100.76639238595963 264.13166471214294 92.76639238595963 264.13166471214294L 92.76639238595963 264.13166471214294L 0.1 264.13166471214294L 0.1 264.13166471214294z'
                                      fill='rgba(114,57,234,0.85)'
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      strokeLinecap='round'
                                      strokeWidth={0}
                                      strokeDasharray={0}
                                      className='apexcharts-bar-area'
                                      clipPath='url(#gridRectMasklbz8mt3d)'
                                      path='M 0.1 236.32833158454895L 92.76639238595963 236.32833158454895Q 100.76639238595963 236.32833158454895 100.76639238595963 244.32833158454895L 100.76639238595963 256.13166471214294Q 100.76639238595963 264.13166471214294 92.76639238595963 264.13166471214294L 92.76639238595963 264.13166471214294L 0.1 264.13166471214294L 0.1 264.13166471214294z'
                                      // pathfrom='M 0.1 236.32833158454895L 0.1 236.32833158454895L 0.1 264.13166471214294L 0.1 264.13166471214294L 0.1 264.13166471214294L 0.1 264.13166471214294L 0.1 264.13166471214294L 0.1 236.32833158454895'
                                      cy='291.9349978397369'
                                      cx='100.76639238595963'
                                      // j={4}
                                      // val={7}
                                      // barheight='27.803333127593998'
                                      // barwidth='100.66639238595964'
                                    />
                                    <g
                                      id='SvgjsG9752'
                                      className='apexcharts-bar-goals-markers'
                                      style={{pointerEvents: 'none'}}
                                    >
                                      <g id='SvgjsG9753' className='apexcharts-bar-goals-groups' />
                                      <g id='SvgjsG9759' className='apexcharts-bar-goals-groups' />
                                      <g id='SvgjsG9765' className='apexcharts-bar-goals-groups' />
                                      <g id='SvgjsG9771' className='apexcharts-bar-goals-groups' />
                                      <g id='SvgjsG9777' className='apexcharts-bar-goals-groups' />
                                    </g>
                                  </g>
                                  <g id='SvgjsG9751' className='apexcharts-datalabels'>
                                    <g
                                      id='SvgjsG9756'
                                      className='apexcharts-data-labels'
                                      transform='rotate(0)'
                                    >
                                      <text
                                        id='SvgjsText9758'
                                        fontFamily='inherit'
                                        x='29.099999999999994'
                                        y='33.136667096710205'
                                        textAnchor='start'
                                        dominantBaseline='auto'
                                        fontSize='14px'
                                        fontWeight={600}
                                        fill='#ffffff'
                                        className='apexcharts-datalabel'
                                        cx='29.099999999999994'
                                        cy='33.136667096710205'
                                        style={{fontFamily: 'inherit'}}
                                      >
                                        15,000
                                      </text>
                                    </g>
                                    <g
                                      id='SvgjsG9762'
                                      className='apexcharts-data-labels'
                                      transform='rotate(0)'
                                    >
                                      <text
                                        id='SvgjsText9764'
                                        fontFamily='inherit'
                                        x='29.099999999999994'
                                        y='88.74333335189819'
                                        textAnchor='start'
                                        dominantBaseline='auto'
                                        fontSize='14px'
                                        fontWeight={600}
                                        fill='#ffffff'
                                        className='apexcharts-datalabel'
                                        cx='29.099999999999994'
                                        cy='88.74333335189819'
                                        style={{fontFamily: 'inherit'}}
                                      >
                                        12,000
                                      </text>
                                    </g>
                                    <g
                                      id='SvgjsG9768'
                                      className='apexcharts-data-labels'
                                      transform='rotate(0)'
                                    >
                                      <text
                                        id='SvgjsText9770'
                                        fontFamily='inherit'
                                        x='29.099999999999994'
                                        y='144.3499996070862'
                                        textAnchor='start'
                                        dominantBaseline='auto'
                                        fontSize='14px'
                                        fontWeight={600}
                                        fill='#ffffff'
                                        className='apexcharts-datalabel'
                                        cx='29.099999999999994'
                                        cy='144.3499996070862'
                                        style={{fontFamily: 'inherit'}}
                                      >
                                        10,000
                                      </text>
                                    </g>
                                    <g
                                      id='SvgjsG9774'
                                      className='apexcharts-data-labels'
                                      transform='rotate(0)'
                                    >
                                      <text
                                        id='SvgjsText9776'
                                        fontFamily='inherit'
                                        x='26.099999999999994'
                                        y='199.95666586227418'
                                        textAnchor='start'
                                        dominantBaseline='auto'
                                        fontSize='14px'
                                        fontWeight={600}
                                        fill='#ffffff'
                                        className='apexcharts-datalabel'
                                        cx='26.099999999999994'
                                        cy='199.95666586227418'
                                        style={{fontFamily: 'inherit'}}
                                      >
                                        8,000
                                      </text>
                                    </g>
                                    <g
                                      id='SvgjsG9780'
                                      className='apexcharts-data-labels'
                                      transform='rotate(0)'
                                    >
                                      <text
                                        id='SvgjsText9782'
                                        fontFamily='inherit'
                                        x='26.099999999999994'
                                        y='255.56333211746215'
                                        textAnchor='start'
                                        dominantBaseline='auto'
                                        fontSize='14px'
                                        fontWeight={600}
                                        fill='#ffffff'
                                        className='apexcharts-datalabel'
                                        cx='26.099999999999994'
                                        cy='255.56333211746215'
                                        style={{fontFamily: 'inherit'}}
                                      >
                                        7,000
                                      </text>
                                    </g>
                                  </g>
                                </g>
                                <line
                                  id='SvgjsLine9832'
                                  x1={0}
                                  y1={0}
                                  x2='230.09461116790771'
                                  y2={0}
                                  stroke='#b6b6b6'
                                  strokeDasharray={0}
                                  strokeWidth={1}
                                  strokeLinecap='butt'
                                  className='apexcharts-ycrosshairs'
                                />
                                <line
                                  id='SvgjsLine9833'
                                  x1={0}
                                  y1={0}
                                  x2='230.09461116790771'
                                  y2={0}
                                  strokeDasharray={0}
                                  strokeWidth={0}
                                  strokeLinecap='butt'
                                  className='apexcharts-ycrosshairs-hidden'
                                />
                                <g id='SvgjsG9834' className='apexcharts-yaxis-annotations' />
                                <g id='SvgjsG9835' className='apexcharts-xaxis-annotations' />
                                <g id='SvgjsG9836' className='apexcharts-point-annotations' />
                              </g>
                              <g id='SvgjsG9739' className='apexcharts-annotations' />
                            </svg>
                            <div className='apexcharts-legend' style={{maxHeight: 175}} />
                            <div
                              className='apexcharts-tooltip apexcharts-theme-light'
                              style={{left: '206.054px', top: 0}}
                            >
                              <div
                                className='apexcharts-tooltip-title'
                                style={{fontFamily: 'inherit', fontSize: 12}}
                              >
                                ECR - 90%
                              </div>
                              <div
                                className='apexcharts-tooltip-series-group apexcharts-active'
                                style={{order: 1, display: 'flex'}}
                              >
                                <span
                                  className='apexcharts-tooltip-marker'
                                  style={{backgroundColor: 'rgba(62, 151, 255, 0.85)'}}
                                />
                                <div
                                  className='apexcharts-tooltip-text'
                                  style={{fontFamily: 'inherit', fontSize: 12}}
                                >
                                  <div className='apexcharts-tooltip-y-group'>
                                    <span className='apexcharts-tooltip-text-y-label'>Sales: </span>
                                    <span className='apexcharts-tooltip-text-y-value'>15K</span>
                                  </div>
                                  <div className='apexcharts-tooltip-goals-group'>
                                    <span className='apexcharts-tooltip-text-goals-label' />
                                    <span className='apexcharts-tooltip-text-goals-value' />
                                  </div>
                                  <div className='apexcharts-tooltip-z-group'>
                                    <span className='apexcharts-tooltip-text-z-label' />
                                    <span className='apexcharts-tooltip-text-z-value' />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light'>
                              <div className='apexcharts-yaxistooltip-text' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xxl-6 mb-5 mb-xl-0'>
                    <div className='card card-flush h-lg-100'>
                      <div className='card-header pt-7 mb-5'>
                        <h3 className='card-title align-items-start flex-column'>
                          <span className='card-label fw-bold text-gray-800'>
                            Trades by Counterparty
                          </span>
                          <span className='text-gray-400 mt-1 fw-semibold fs-6'>
                            20 countries share 97% visits
                          </span>
                        </h3>

                        <div className='card-toolbar'>
                          <a className='btn btn-sm btn-light'>View All</a>
                        </div>
                      </div>

                      <div className='card-body pt-0'>
                        <div className='d-flex flex-stack'>
                          <img
                            src='https://preview.keenthemes.com/metronic8/demo1/assets/media/flags/united-states.svg'
                            className='me-4 w-25px'
                            alt=''
                          />

                          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
                            <div className='me-5'>
                              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>
                                United States
                              </a>

                              <span className='text-gray-400 fw-semibold fs-7 d-block text-start ps-0'>
                                Direct link clicks
                              </span>
                            </div>

                            <div className='d-flex align-items-center'>
                              <span className='text-gray-800 fw-bold fs-6 me-3 d-block'>9,763</span>

                              <div className='m-0'>
                                <span className='badge badge-light-success fs-base'>
                                  <span className='svg-icon svg-icon-5 svg-icon-success ms-n1'>
                                    <svg
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <rect
                                        opacity='0.5'
                                        x='13'
                                        y='6'
                                        width='13'
                                        height='2'
                                        rx='1'
                                        transform='rotate(90 13 6)'
                                        fill='currentColor'
                                      ></rect>
                                      <path
                                        d='M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z'
                                        fill='currentColor'
                                      ></path>
                                    </svg>
                                  </span>
                                  2.6%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-3'></div>

                        <div className='d-flex flex-stack'>
                          <img
                            src='https://preview.keenthemes.com/metronic8/demo1/assets/media/flags/brazil.svg'
                            className='me-4 w-25px'
                            alt=''
                          />

                          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
                            <div className='me-5'>
                              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>
                                Brasil
                              </a>

                              <span className='text-gray-400 fw-semibold fs-7 d-block text-start ps-0'>
                                All Social Channels
                              </span>
                            </div>

                            <div className='d-flex align-items-center'>
                              <span className='text-gray-800 fw-bold fs-6 me-3 d-block'>4,062</span>

                              <div className='m-0'>
                                <span className='badge badge-light-danger fs-base'>
                                  <span className='svg-icon svg-icon-5 svg-icon-danger ms-n1'>
                                    <svg
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <rect
                                        opacity='0.5'
                                        x='11'
                                        y='18'
                                        width='13'
                                        height='2'
                                        rx='1'
                                        transform='rotate(-90 11 18)'
                                        fill='currentColor'
                                      ></rect>
                                      <path
                                        d='M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z'
                                        fill='currentColor'
                                      ></path>
                                    </svg>
                                  </span>
                                  0.4%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-3'></div>

                        <div className='d-flex flex-stack'>
                          <img
                            src='https://preview.keenthemes.com/metronic8/demo1/assets/media/flags/turkey.svg'
                            className='me-4 w-25px'
                            alt=''
                          />

                          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
                            <div className='me-5'>
                              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>
                                Turkey
                              </a>

                              <span className='text-gray-400 fw-semibold fs-7 d-block text-start ps-0'>
                                Mailchimp Campaigns
                              </span>
                            </div>

                            <div className='d-flex align-items-center'>
                              <span className='text-gray-800 fw-bold fs-6 me-3 d-block'>1,680</span>

                              <div className='m-0'>
                                <span className='badge badge-light-success fs-base'>
                                  <span className='svg-icon svg-icon-5 svg-icon-success ms-n1'>
                                    <svg
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <rect
                                        opacity='0.5'
                                        x='13'
                                        y='6'
                                        width='13'
                                        height='2'
                                        rx='1'
                                        transform='rotate(90 13 6)'
                                        fill='currentColor'
                                      ></rect>
                                      <path
                                        d='M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z'
                                        fill='currentColor'
                                      ></path>
                                    </svg>
                                  </span>
                                  0.2%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-3'></div>

                        <div className='d-flex flex-stack'>
                          <img
                            src='https://preview.keenthemes.com/metronic8/demo1/assets/media/flags/france.svg'
                            className='me-4 w-25px'
                            alt=''
                          />

                          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
                            <div className='me-5'>
                              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>
                                France
                              </a>

                              <span className='text-gray-400 fw-semibold fs-7 d-block text-start ps-0'>
                                Impact Radius visits
                              </span>
                            </div>

                            <div className='d-flex align-items-center'>
                              <span className='text-gray-800 fw-bold fs-6 me-3 d-block'>849</span>

                              <div className='m-0'>
                                <span className='badge badge-light-success fs-base'>
                                  <span className='svg-icon svg-icon-5 svg-icon-success ms-n1'>
                                    <svg
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <rect
                                        opacity='0.5'
                                        x='13'
                                        y='6'
                                        width='13'
                                        height='2'
                                        rx='1'
                                        transform='rotate(90 13 6)'
                                        fill='currentColor'
                                      ></rect>
                                      <path
                                        d='M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z'
                                        fill='currentColor'
                                      ></path>
                                    </svg>
                                  </span>
                                  4.1%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-3'></div>

                        <div className='d-flex flex-stack'>
                          <img
                            src='https://preview.keenthemes.com/metronic8/demo1/assets/media/flags/india.svg'
                            className='me-4 w-25px'
                            alt=''
                          />

                          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
                            <div className='me-5'>
                              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>India</a>

                              <span className='text-gray-400 fw-semibold fs-7 d-block text-start ps-0'>
                                Many Sources
                              </span>
                            </div>

                            <div className='d-flex align-items-center'>
                              <span className='text-gray-800 fw-bold fs-6 me-3 d-block'>604</span>

                              <div className='m-0'>
                                <span className='badge badge-light-danger fs-base'>
                                  <span className='svg-icon svg-icon-5 svg-icon-danger ms-n1'>
                                    <svg
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <rect
                                        opacity='0.5'
                                        x='11'
                                        y='18'
                                        width='13'
                                        height='2'
                                        rx='1'
                                        transform='rotate(-90 11 18)'
                                        fill='currentColor'
                                      ></rect>
                                      <path
                                        d='M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z'
                                        fill='currentColor'
                                      ></path>
                                    </svg>
                                  </span>
                                  8.3%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='separator separator-dashed my-3'></div>

                        <div className='d-flex flex-stack'>
                          <img
                            src='https://preview.keenthemes.com/metronic8/demo1/assets/media/flags/sweden.svg'
                            className='me-4 w-25px'
                            alt=''
                          />

                          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
                            <div className='me-5'>
                              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>
                                Sweden
                              </a>

                              <span className='text-gray-400 fw-semibold fs-7 d-block text-start ps-0'>
                                Social Network
                              </span>
                            </div>

                            <div className='d-flex align-items-center'>
                              <span className='text-gray-800 fw-bold fs-6 me-3 d-block'>237</span>

                              <div className='m-0'>
                                <span className='badge badge-light-success fs-base'>
                                  <span className='svg-icon svg-icon-5 svg-icon-success ms-n1'>
                                    <svg
                                      width='24'
                                      height='24'
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <rect
                                        opacity='0.5'
                                        x='13'
                                        y='6'
                                        width='13'
                                        height='2'
                                        rx='1'
                                        transform='rotate(90 13 6)'
                                        fill='currentColor'
                                      ></rect>
                                      <path
                                        d='M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z'
                                        fill='currentColor'
                                      ></path>
                                    </svg>
                                  </span>
                                  1.9%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

const AnalyticsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.ANALYTICS'})}</PageTitle>
      <AnalyticsPage />
    </>
  )
}

export {AnalyticsWrapper}
