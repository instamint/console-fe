/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../../../_metronic/helpers'
import {PageTitle} from '../../../../../_metronic/layout/core'
import { useAuth } from '../../../auth'
import CreateKey from './Modal/create-key'
import {TablesApiKeys} from './Table/TablesApiKeys'

const ApiKeysPage: FC = () => {
  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalKey, setShowModalKey] = useState(false)
  const {currentUser, setCurrentUser, saveAuth, auth} = useAuth()
  const [apiKeyUser, setApiKeyUser] = useState(currentUser?.api_key || "")

  useEffect(() => {
    if (!currentUser?.api_key) {
      const newCurrentUser = {
        ...currentUser,
        api_key: 'zadKLNXDzvOVjQH91TumGL2urPjPQSxUbf67vs0',
      }
      const newAuth = {...auth, api_key: 'zadKLNXDzvOVjQH91TumGL2urPjPQSxUbf67vs0'}
      saveAuth(newAuth)
      setCurrentUser(newCurrentUser)
      setApiKeyUser(newCurrentUser?.api_key)
    } else {
      setApiKeyUser(currentUser?.api_key)
    }
  }, [currentUser])
  

  return (
    <>
      {/* begin::Row */}
      <div className='row gy-5 gx-xl-8'>
        <div className='card mb-5 mb-xxl-8'>
          <div className='card-header'>
            <div className='card-title'>
              <h3>API Overview</h3>
            </div>
          </div>
          <div className='card-body py-10'>
            <div className='row mb-2'>
              <div className='col-md-5 pb-10 pb-lg-0'>
                <h2>Your API Key</h2>
                <p className='form-control form-control-lg form-control-solid mt-4'>{apiKeyUser}</p>
                <button
                  type='button'
                  className='btn btn-light btn-active-light-primary mt-2'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_1'
                  onClick={() => setShowModalCreate(true)}
                >
                  Generate
                </button>
              </div>
            </div>
          </div>
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
              setShowModalKey={setShowModalKey}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              auth={auth}
              saveAuth={saveAuth}
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
                <p className='form-control form-control-lg form-control-solid'>{apiKeyUser}</p>
                <p>
                  Please store it somewhere safe because as soon as you navigate away from this page
                  , we will not be able to retrieve or restore this generated token.
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
        <TablesApiKeys className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
      {/* end::Row */}
    </>
  )
}

const ApiKeysWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.API_KEYS'})}</PageTitle>
      <ApiKeysPage />
    </>
  )
}

export {ApiKeysWrapper}
