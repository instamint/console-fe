import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import useOnClickOutside from '../../hooks/useOnClickOutside'

export default function ButtonAction({name, handleClick}) {
  const [openDropDown, setOpenDropDown] = useState(false)
  const refDropDown = useRef()
  useOnClickOutside(refDropDown, () => setOpenDropDown(false))

  return (
    <div className='d-flex align-items-center position-relative' ref={refDropDown}>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setOpenDropDown((preState) => !preState)
        }}
        className='btn btn-primary d-flex align-items-center'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-start'
        data-kt-menu-flip='top-end'
      >
        Action
        <IconDrop className='fa-solid fa-caret-down'></IconDrop>
      </div>
      <GroupDropDown
        className='menu menu-sub menu-sub-dropdown w-180px p-3'
        data-kt-menu='true'
        style={{display: openDropDown ? 'block' : 'none', position: 'absolute', top: '42px'}}
      >
        <div className='d-flex flex-column'>
          <NameDropdow
            onClick={(e) => {
              e.stopPropagation()
              handleClick()
            }}
          >
            {name}
          </NameDropdow>
        </div>
      </GroupDropDown>
    </div>
  )
}

const IconDrop = styled.i`
  margin-left: 10px;
  margin-bottom: 2px;
`

const GroupDropDown = styled.div`
    z-index: 500;
`

const NameDropdow = styled.div`
  padding: 5px;
  font-size: 15px;
  min-width: 88px;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background-color: #009ef7;
    transition: all 0.2s ease;
  }
`