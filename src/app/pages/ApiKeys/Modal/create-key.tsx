import styled from 'styled-components'
import { KTSVG } from '../../../../_metronic/helpers'

export default function CreateKey({setShowModalCreate, inputName, setInputName, setShowModalKey}) {
  return (
    <>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title' style={{color: '#5a5d72'}}>
            Create New Api Key
          </h5>
          <div
            className='btn btn-icon btn-sm btn-active-light-primary ms-2'
            data-bs-dismiss='modal'
            aria-label='Close'
            onClick={() => setShowModalCreate(false)}
          >
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon svg-icon-2x' />
          </div>
        </div>
        <div className='modal-body'>
          <div className='d-flex align-items-center'>
            <TitelModalKey>Name</TitelModalKey>
            <InputName value={inputName} onChange={(e) => setInputName(e.target.value)}></InputName>
          </div>
          <p className='fw-bold mt-3 fs-6'>Choose scopes:</p>
          <div className='d-flex align-items-center mt-4'>
            <TitelModalKey>Billing Apis</TitelModalKey>
            <div className='form-check form-check-sm form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='checkbox'
                value='1'
                data-kt-check='true'
                data-kt-check-target='.widget-9-check'
              />
            </div>
            <TextInput className=''>billing.quota.read</TextInput>
          </div>
          <div className='d-flex align-items-start mt-5'>
            <TitelModalKey>Email Apis</TitelModalKey>
            <div className='d-flex flex-column'>
              <div className='d-flex'>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='1'
                    data-kt-check='true'
                    data-kt-check-target='.widget-9-check'
                  />
                </div>
                <TextInput className=''>emails.manage (manage emails)</TextInput>
              </div>
              <div className='d-flex mt-3'>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='1'
                    data-kt-check='true'
                    data-kt-check-target='.widget-9-check'
                  />
                </div>
                <TextInput className=''>emails.read</TextInput>
              </div>
              <div className='d-flex mt-3'>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='1'
                    data-kt-check='true'
                    data-kt-check-target='.widget-9-check'
                  />
                </div>
                <TextInput className=''>emails.send</TextInput>
              </div>
              <div className='d-flex mt-3'>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='1'
                    data-kt-check='true'
                    data-kt-check-target='.widget-9-check'
                  />
                </div>
                <TextInput className=''>emails.delete</TextInput>
              </div>
            </div>
          </div>
          <div className='d-flex align-items-start mt-5'>
            <TitelModalKey>User Apis</TitelModalKey>
            <div className='d-flex flex-column'>
              <div className='d-flex'>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='1'
                    data-kt-check='true'
                    data-kt-check-target='.widget-9-check'
                  />
                </div>
                <TextInput className=''>users.manage</TextInput>
              </div>
              <div className='d-flex mt-3'>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='1'
                    data-kt-check='true'
                    data-kt-check-target='.widget-9-check'
                  />
                </div>
                <TextInput className=''>users.read</TextInput>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-footer'>
          <button
            type='button'
            className='btn btn-light'
            data-bs-dismiss='modal'
            onClick={() => setShowModalCreate(false)}
          >
            Close
          </button>
          <button
            type='button'
            className='btn btn-success'
            data-bs-dismiss='modal'
            onClick={() => {
              setShowModalCreate(false)
              setShowModalKey(true)
            }}
          >
            Create Api Key
          </button>
        </div>
      </div>
    </>
  )
}


const TitelModalKey = styled.span`
  min-width: 120px;
  text-align: end;
  font-size: 15px;
  margin-right: 17px;
`

const InputName = styled.input`
  height: 34px;
  width: 345px;
  padding: 0px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:hover {
    border: 1px solid #009ef7 !important;
  }
`

const TextInput = styled.span`
  margin-left: 7px;
`