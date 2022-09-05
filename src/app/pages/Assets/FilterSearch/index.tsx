import {FormEvent, useCallback, useState} from 'react'
import styled from 'styled-components'

export type FilterSearchProps = {
  setSearch: (value: string | null) => void
  openModalPool: () => void
  selectAsset: Array<any>
  setMinted: (value: any) => void
  minted: boolean
}
const FilterSearch = ({
  setSearch,
  openModalPool,
  selectAsset,
  setMinted,
  minted,
}: FilterSearchProps) => {
  const [term, setTerm] = useState<string>('')

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
        <div className='d-flex align-items-center'>
          <div className='form-check form-check-sm form-check-custom form-check-solid d-flex align-items-center'>
            <input
              className='form-check-input'
              type='checkbox'
              value='1'
              data-kt-check='true'
              data-kt-check-target='.widget-9-check'
              checked={minted}
              onChange={() => setMinted((preState) => !preState)}
            />
            <span className='ms-2 me-5 card-label fw-bold fs-5'>Minted</span>
          </div>
          <div
            className='btn btn-primary me-5'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-start'
            data-kt-menu-flip='top-end'
          >
            Action
            <IconDrop className='fa-solid fa-caret-down'></IconDrop>
          </div>
          <div className='menu menu-sub menu-sub-dropdown w-180px p-4' data-kt-menu='true'>
            <div className='d-flex flex-column'>
              <NameDropdow onClick={() => selectAsset?.length > 0 && openModalPool()}>
                Create Portfolio
              </NameDropdow>
              <NameDropdow>Enable Auction</NameDropdow>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default FilterSearch

const NameDropdow = styled.div`
  padding: 5px;
  font-size: 15px;
  min-width: 100px;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background-color: #009ef7;
    transition: all 0.2s ease;
  }
`
const IconDrop = styled.i`
  margin-left: 35px;
  margin-bottom: 2px;
`