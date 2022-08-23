import { KTSVG } from '../../../../_metronic/helpers'
import JsonView from '../view/JsonView'

export default function ModalTreeView({setShowModal}) {
  return (
    <div className='modal-content'>
      <div className='modal-header'>
        <h5 className='modal-title' style={{color: '#5a5d72'}}>
          JSON VIEW
        </h5>
        <div
          className='btn btn-icon btn-sm btn-active-light-primary ms-2'
          data-bs-dismiss='modal'
          aria-label='Close'
          onClick={() => setShowModal(false)}
        >
          <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon svg-icon-2x' />
        </div>
      </div>
      <div className='modal-body'>
        <JsonView />
      </div>
      <div className='modal-footer'>
        <button
          type='button'
          className='btn btn-light'
          data-bs-dismiss='modal'
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  )
}