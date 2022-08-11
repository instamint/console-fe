/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { KTSVG } from '../../../../_metronic/helpers'
import useSearch from '../../../hooks/useSearch'
import FilterSearch from '../FilterSearch/index'
import CreateKey from '../Modal/create-key'
import Dropdown from './Dropdown'

type Props = {
  className: string
}

const fakeData = () => {
  let arr = []
  let obj = {
    name: 'Ana Simmons',
    key: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    scope: 100,
    status: 1,
    created_date: '1/8/2022',
    updated_date: '10/8/2022',
  }
  for (let i = 0; i < 30; i++) {
    arr.push(obj)
  }
  return arr || []
}

const TablesApiKeys: React.FC<Props> = ({className}) => {
  const [listApiKeys, setListApiKeys] = useState(fakeData() || [])
  const {searched, setSearch, results} = useSearch(listApiKeys, ['name', 'namespace'])
  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalKey, setShowModalKey] = useState(false)
  const [inputName, setInputName] = useState("")

  function TDTable({text}) {
    return (
      <td>
        <div className='d-flex align-items-center'>
          <div className='d-flex justify-content-start flex-column'>
            <span className='text-dark fw-bold fs-7'>{text}</span>
          </div>
        </div>
      </td>
    )
  }

  const renderList = useCallback(
    () =>
      Array.isArray(listApiKeys) &&
      listApiKeys?.length &&
      listApiKeys?.map((item, index) => {
        return (
          <tr key={index}>
            {Object.values(item).map((i, idx) => (
              <TDTable text={i} key={idx} />
            ))}
            <td>
              <div className='d-flex justify-content-center flex-shrink-0'>
                <button
                  data-kt-menu-trigger='click'
                  data-kt-menu-placement='bottom-end'
                  data-kt-menu-flip='top-end'
                  className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary'
                >
                  <i style={{paddingRight: '0px'}} className='bi bi-gear fs-2'></i>
                </button>
                <Dropdown />
              </div>
            </td>
          </tr>
        )
      }),
    [listApiKeys]
  )

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className='d-flex align-items-center'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>API Keys</span>
          </h3>
          <div className='d-flex justify-content-end flex-shrink-0'>
            <div className='d-flex align-items-center'>
              <button
                type='button'
                className='btn btn-primary me-5'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_1'
                onClick={() => setShowModalCreate(true)}
              >
                Generate Key
              </button>
              {/* Modal Create API Key */}
              <Modal
                className='modal fade'
                id='kt_modal_select_location'
                data-backdrop='static'
                tabIndex={-1}
                role='dialog'
                show={showModalCreate}
                dialogClassName='modal-ml modal-dialog-600'
                aria-hidden='true'
              >
                <CreateKey
                  setShowModalCreate={setShowModalCreate}
                  setInputName={setInputName}
                  inputName={inputName}
                  setShowModalKey={setShowModalKey}
                />
              </Modal>

              {/* Modal Show Key */}
              <Modal
                className='modal fade'
                id='kt_modal_select_location'
                data-backdrop='static'
                tabIndex={-1}
                role='dialog'
                show={showModalKey}
                dialogClassName='modal-ml modal-dialog-600'
                aria-hidden='true'
              >
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' style={{color: '#5a5d72'}}>
                      Create New Api Key
                    </h5>
                    <div
                      className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                      onClick={() => setShowModalKey(false)}
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr061.svg'
                        className='svg-icon svg-icon-2x'
                      />
                    </div>
                  </div>
                  <div className='modal-body'>
                    <p>
                      New Api Key created and <b>it will be displayed only now</b>,
                    </p>
                    <p className='form-control form-control-lg form-control-solid'>
                      zadKLNX.DzvOVjQH91TumGL2urPjPQSxUbf67vs0
                    </p>
                    <p>
                      Please store it somewhere safe because as soon as you navigate away from this
                      page , we will not be able to retrieve or restore this generated token.
                    </p>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-light'
                      data-bs-dismiss='modal'
                      onClick={() => setShowModalKey(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <FilterSearch setSearch={setSearch} />
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-4'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='min-w-200px'>NAME</th>
                <th className='min-w-200px'>KEY</th>
                <th className='min-w-100px'>SCOPE</th>
                <th className='min-w-100px'>STATUS</th>
                <th className='min-w-150px'>CREATED DATE</th>
                <th className='min-w-150px'>UPDETED DATE</th>
                <th className='min-w-60px'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>{renderList()}</tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { TablesApiKeys }
