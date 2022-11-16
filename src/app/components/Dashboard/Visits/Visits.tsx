
export interface VisitsDashboardProps {}

export function VisitsDashboard(props: VisitsDashboardProps) {
  return (
    <div className='card card-flush h-lg-100'>
      <div className='card-header pt-7 mb-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-gray-800'>Visits by Country</span>
          <span className='text-gray-400 mt-1 fw-semibold fs-6'>20 countries share 97% visits</span>
        </h3>

        <div className='card-toolbar'>
          <a className='btn btn-sm btn-light'>View All</a>
        </div>
      </div>

      <div className='card-body pt-0'>
        <div className='d-flex flex-stack'>
          <img
            src='https://preview.keenthemes.com/metronic8/demo1/assets/media/flags/united-states.svg'
            className='me-4 w-25px rounded-1'
            alt=''
          />

          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
            <div className='me-5'>
              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>United States</a>

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
            className='me-4 w-25px rounded-1'
            alt=''
          />

          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
            <div className='me-5'>
              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>Brasil</a>

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
            className='me-4 w-25px rounded-1'
            alt=''
          />

          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
            <div className='me-5'>
              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>Turkey</a>

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
            className='me-4 w-25px rounded-1'
            alt=''
          />

          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
            <div className='me-5'>
              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>France</a>

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
            className='me-4 w-25px rounded-1'
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
            className='me-4 w-25px rounded-1'
            alt=''
          />

          <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
            <div className='me-5'>
              <a className='text-gray-800 fw-bold text-hover-primary fs-6'>Sweden</a>

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
  )
}
