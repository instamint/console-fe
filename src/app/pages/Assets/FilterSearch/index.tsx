import {FormEvent, useCallback, useState} from 'react'

export type FilterSearchProps = {
  setSearch: (value: string | null) => void
  openModalPool: () => void
  selectAsset: Array<any>
}
const FilterSearch = ({setSearch, openModalPool, selectAsset}: FilterSearchProps) => {
  const [term, setTerm] = useState<string>('')

  const handleChange = useCallback(({target: {value}}: any) => setTerm(value), [setTerm])
  const handleSubmit = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt?.preventDefault()
      const search = `${term}`.trim()
      if (!search || search.length === 0) setSearch(null)
      else setSearch(search)
    },
    [term, setSearch]
  )
  return (
    <form action='#' onSubmit={handleSubmit}>
      <div className='d-flex flex-wrap flex-stack'>
        <div className='d-flex flex-wrap align-items-center my-1'>
          <div className='position-relative w-md-300px me-md-2'>
            <span className='svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <rect
                  opacity='0.5'
                  x='17.0365'
                  y='15.1223'
                  width='8.15546'
                  height='2'
                  rx='1'
                  transform='rotate(45 17.0365 15.1223)'
                  fill='black'
                />
                <path
                  d='M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z'
                  fill='black'
                />
              </svg>
            </span>
            <input
              type='text'
              className='form-control form-control-solid ps-10'
              name='search'
              value={term}
              placeholder='Search'
              onChange={handleChange}
            />
          </div>

          <div className='d-flex align-items-center'>
            <button type='submit' className='btn btn-primary me-5'>
              Search
            </button>
          </div>
        </div>
        <div className='d-flex align-items-center'>
          <button className='btn btn-primary me-5' disabled={selectAsset?.length <= 0} onClick={() => openModalPool()}>
            Pool
          </button>
        </div>
        <div className='d-flex flex-wrap my-1'>
          <div className='d-flex my-0'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              data-placeholder='Filter'
              className='form-select form-select-white form-select-sm w-150px me-5'
            >
              <option value='1'>Recently Updated</option>
              <option value='2'>Last Month</option>
              <option value='3'>Last Quarter</option>
              <option value='4'>Last Year</option>
            </select>

            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              data-placeholder='Filter'
              className='form-select form-select-white form-select-sm w-150px me-5'
            >
              <option value='1'>Recently Updated</option>
              <option value='2'>Last Month</option>
              <option value='3'>Last Quarter</option>
              <option value='4'>Last Year</option>
            </select>

            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              data-placeholder='Export'
              className='form-select form-select-white form-select-sm w-100px'
            >
              <option value='1'>Excel</option>
              <option value='1'>PDF</option>
              <option value='2'>Print</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  )
}

export default FilterSearch
