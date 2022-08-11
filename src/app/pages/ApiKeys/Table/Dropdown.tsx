/* eslint-disable jsx-a11y/anchor-is-valid */
import IconEdit from '../../../images/edit.png'
import IconDelete from '../../../images/delete.png'
import styled from 'styled-components'

const Dropdown = () => {
  return (
    <div className='menu menu-sub menu-sub-dropdown w-250px w-md-150px p-4' data-kt-menu='true'>
      <div className='d-flex flex-column'>
        <Action className='d-flex'>
          <IconAction src={IconEdit} alt='edit'></IconAction>Edit Details
        </Action>
        <Action className='d-flex mt-2 action-icon'>
          <IconAction src={IconDelete} alt='edit'></IconAction>Delete
        </Action>
      </div>
    </div>
  )
}

export default Dropdown

const Action = styled.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #009ef7;
  }
`

const IconAction = styled.img`
  border: none;
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin-right: 12px;
  margin-top: 2px;
  opacity: 0.5;
  &:hover {
    color: #009ef7;
  }
`
