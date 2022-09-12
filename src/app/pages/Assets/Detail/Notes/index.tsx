import {useCallback, useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap'
import styled from 'styled-components'
import {AddNote, getListNote} from '../../../../../utils/api/assets'
import {convertTimeZone} from '../../../../../_metronic/helpers/format/datetime'
import ICSort from '../../../../components/Sort'
import ModalAddNote from '../../Modal/modal-add-note'

export default function Notes({idAsset}) {
  const [listNote, setListNote] = useState([])
  const [modalAddNote, setModalAddNote] = useState(false)
  const [reloadList, setReloadList] = useState(false)
  const [sort_name, set_sort_name] = useState('')
  const [sort_type, set_sort_type] = useState('')
  const [params, setParams] = useState({
    sort_name: '',
    sort_type: '',
    limit: '',
  })

  const handleSort = (name) => {
    let sortTypeNow = sort_type === 'ASC' ? 'DESC' : 'ASC'
    if (sort_name !== name) {
      sortTypeNow = 'ASC'
    }
    setParams({
      ...params,
      sort_name: name,
      sort_type: sortTypeNow,
    })
    set_sort_name(name)
    set_sort_type(sortTypeNow)
  }

  const handleAddNote = async (note: string) => {
    try {
      await AddNote(note, idAsset)
      setReloadList((preState) => !preState)
    } catch (error) {
      console.error({error})
    } finally {
      setModalAddNote(false)
    }
  }
  const fetchListNote = async (id, params) => {
    try {
      const reps = await getListNote(id, params)
      reps && setListNote(reps?.data)
    } catch (error) {
      console.error({error})
    }
  }

  const renderList = useCallback(
    () =>
      Array.isArray(listNote) &&
      listNote?.map((item, index) => {
        return (
          <tr key={index}>
            <td className='w-250px'>{convertTimeZone(item?.createdAt)}</td>
            <td className=''>{item?.note || ''}</td>
          </tr>
        )
      }),
    [listNote]
  )

  useEffect(() => {
    idAsset && fetchListNote(idAsset, params)
  }, [idAsset, params, reloadList])
  
  return (
    <>
      <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
        <div className='card-header'>
          <div className='card-title w-100 d-flex justify-content-between'>
            <h3 className='text-gray-800'>Notes</h3>
            <button
              className='btn btn-sm btn-primary me-3'
              onClick={(e) => {
                e.preventDefault()
                setModalAddNote(true)
              }}
            >
              Add Note
            </button>
          </div>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
                <tr className='fw-bold text-muted'>
                  <th className='w-250px' style={{paddingTop: '0px'}}>
                    <SpanThTable className='cursor-pointer' onClick={() => handleSort('createdAt')}>
                      TIMESTAMP <ICSort type={sort_name === 'createdAt' ? sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                  <th className='w-250px' style={{paddingTop: '0px'}}>
                    <SpanThTable className='cursor-pointer' onClick={() => handleSort('note')}>
                      NOTE <ICSort type={sort_name === 'note' ? sort_type : 'default'} />
                    </SpanThTable>
                  </th>
                </tr>
              </thead>
              <tbody className='fs-6 fw-semibold'>
                {listNote?.length > 0 ? (
                  renderList()
                ) : (
                  <tr>
                    <td colSpan={2} className='text-center'>
                      <h4 className='mt-5 d-flex justify-content-center'>
                        There is currently no data available
                      </h4>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modalAddNote && (
        <Modal
          className='modal fade'
          id='kt_modal_select_location'
          data-backdrop='static'
          tabIndex={-1}
          role='dialog'
          show={modalAddNote}
          dialogClassName='modal-ml modal-dialog-600'
          aria-hidden='true'
        >
          <ModalAddNote
            modalAddNote={modalAddNote}
            setModalAddNote={setModalAddNote}
            handleAddNote={handleAddNote}
          />
        </Modal>
      )}
    </>
  )
}

const SpanThTable = styled.span`
  width: max-content;
  display: flex;
  align-items: center;
`