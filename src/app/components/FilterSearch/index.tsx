import {FormEvent, useCallback, useState} from 'react'

export type FilterSearchProps = {
  setSearch: (value: string | null) => void
}
const FilterSearch = ({setSearch}: FilterSearchProps) => {
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
