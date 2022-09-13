import React, {useState, useEffect} from 'react'
import Select, {components} from 'react-select'
import './styles.scss'

export const Arrow = ({onClick, style, disabled}) => {
  return (
    <li className='page-item cursor-pointer'>
      <button
        className='page-link pagination-right-arrow'
        style={style}
        onClick={() => onClick()}
        disabled={disabled}
      >
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M4.25 9.5L7.75 6L4.25 2.5' />
        </svg>
      </button>
    </li>
  )
}

export const DoubleArrow = ({style}) => {
  return (
    <svg
      style={style}
      width='16'
      height='16'
      className='pagination-double-arrow'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M8.19526 4.19526C7.93491 4.45561 7.93491 4.87772 8.19526 5.13807L11.0572 8L8.19526 10.8619C7.93491 11.1223 7.93491 11.5444 8.19526 11.8047C8.45561 12.0651 8.87772 12.0651 9.13807 11.8047L12.4714 8.4714C12.7318 8.21106 12.7318 7.78894 12.4714 7.5286L9.13807 4.19526C8.87772 3.93491 8.45561 3.93491 8.19526 4.19526Z' />
      <path d='M3.52876 4.19526C3.26841 4.45561 3.26841 4.87772 3.52876 5.13807L6.39069 8L3.52876 10.8619C3.26841 11.1223 3.26841 11.5444 3.52876 11.8047C3.78911 12.0651 4.21122 12.0651 4.47157 11.8047L7.8049 8.4714C8.06525 8.21106 8.06525 7.78894 7.8049 7.5286L4.47157 4.19526C4.21122 3.93491 3.78911 3.93491 3.52876 4.19526Z' />
    </svg>
  )
}

export const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <i className='fa-solid fa-caret-down' />
    </components.DropdownIndicator>
  )
}

export default function Pagination({paginate, setIsLoading, params, setParams, isMenuList = false, setPage}) {
  const [pagination, setPagination] = useState(null)
  function onPaginateChange(page, per_page) {
    const windowGlobal = typeof window !== 'undefined' ? window : null
    if (windowGlobal) {
      windowGlobal.scrollTo(0, 0)
    }
    setIsLoading(true)
    // const new_params = {...params, page: page, per_page: per_page}
    // setParams(new_params)
    setPage(page)
  }

  const perPageOptions = [
    {
      value: 10,
      label: '10 / Page',
    },
    {
      value: 20,
      label: '20 / Page',
    },
    {
      value: 30,
      label: '30 / Page',
    },
    {
      value: 40,
      label: '40 / Page',
    },
  ]

  const fetchPagination = (currentPage, onSides = 1) => {
    let pages = []
    // if (currentPage > 1)
    pages.push(
      <Arrow
        onClick={() => onPaginateChange(currentPage - 1, paginate.record_per_page)}
        style={{
          transform: 'rotate(180deg)',
          cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
        }}
        disabled={currentPage <= 1}
      />
    )
    if (paginate) {
      for (let i = 1; i <= paginate.total_page; i++) {
        let offset =
          i === 1 || (paginate.total_page && isMenuList === false) ? onSides + 1 : onSides
        if (
          i === 1 ||
          (currentPage - offset <= i && currentPage + offset >= i) ||
          i === currentPage ||
          i === paginate.total_page ||
          i === paginate.total_page - 1
        ) {
          pages.push(
            <li
              className={' cursor-pointer page-item ' + (currentPage === i ? 'active' : '')}
              key={i}
            >
              <div
                className='page-link'
                onClick={() => onPaginateChange(i, paginate.record_per_page)}
              >
                {i}
              </div>
            </li>
          )
        } else if (i === currentPage - (offset + 1) || i === currentPage + (offset + 1)) {
          if (i === currentPage - (offset + 1)) {
            pages.push(
              <li
                onClick={() => onPaginateChange(currentPage - 5, paginate.record_per_page)}
                className={'custom-dots cursor-pointer page-item'}
              >
                <div className='page-link'>
                  <span>...</span>
                  <DoubleArrow style={{transform: 'rotate(180deg)'}} />
                </div>
              </li>
            )
          }
          if (i === currentPage + (offset + 1)) {
            pages.push(
              <li
                onClick={() => onPaginateChange(currentPage + 5, paginate.record_per_page)}
                className={'custom-dots cursor-pointer page-item'}
              >
                <div className='page-link'>
                  <span>...</span>
                  <DoubleArrow style={{}} />
                </div>
              </li>
            )
          }
        }
      }

      pages.push(
        <Arrow
          onClick={() => onPaginateChange(currentPage + 1, paginate.record_per_page)}
          style={{cursor: paginate.total_page <= currentPage ? 'not-allowed' : 'pointer'}}
          disabled={paginate.total_page <= currentPage}
        />
      )
    }
    setPagination(pages)
  }

  useEffect(() => {
    fetchPagination(paginate?.current_page)
  }, [paginate?.current_page])

  return (
    <>
      {paginate?.total_record > 0 && (
        <nav style={{paddingBottom: 26, marginRight: 40}} className='d-flex align-items-center'>
          {/* <p style={{fontSize: 12, lineHeight: '15px', marginRight: 16}} className='mb-0'>
            {paginate?.from_record} - {paginate?.to_record} out of {paginate.total_record} results
          </p> */}
          {/* <div className='pagination-container'>
            <Select
              className='pagination-dropdown-container'
              classNamePrefix='pagination-dropdown'
              onChange={(data) => {
                if (paginate.total_record / data.value < paginate.current_page) {
                  onPaginateChange(Math.ceil(paginate.total_record / data.value), data.value)
                } else onPaginateChange(paginate.current_page, data.value)
              }}
              defaultValue={perPageOptions[paginate.record_per_page / 10 - 1] || perPageOptions[0]}
              options={perPageOptions}
              menuPlacement='bottom'
              menuPortalTarget={document.querySelector('body')}
              components={{DropdownIndicator}}
              noOptionsMessage={() => 'Không tìm thấy'}
            />
          </div> */}
          <ul style={{marginLeft: 12}} className='pagination mb-0 paginationv2 pagination-sm'>
            {pagination}
          </ul>
        </nav>
      )}
    </>
  )
}
