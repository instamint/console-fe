import React, {useCallback, useEffect, useState} from 'react'
import {endAuction, getListNote} from '../../../../utils/api/assets'
import {convertTimeZone} from '../../../../_metronic/helpers/format/datetime'
import {TablesTransactions} from '../../Transactions/Table/TablesTransactions'
import {useAlert} from 'react-alert'
import {Modal} from 'react-bootstrap'
import ModalAddNote from '../Modal/modal-add-note'
import {AddNote} from '../../../../utils/api/assets'

export default function Overview({dataDetail, loadingNote, setReloadPage, setLoadingNote}) {
  const [listNote, setListNote] = useState(null)
  const [listBidHistory, setListBidHistory] = useState(null)
  const [modalAddNote, setModalAddNote] = useState(false)

  const handleAddNote = async (note: string) => {
    try {
      await AddNote(note, dataDetail?.asset?.id)
      setLoadingNote((preState) => !preState)
    } catch (error) {
      console.error({error})
    } finally {
      setModalAddNote(false)
    }
  }
  const alert = useAlert()

  const fetchListNote = async (id) => {
    try {
      const reps = await getListNote(id)
      reps && setListNote(reps?.data)
    } catch (error) {
      console.error({error})
    }
  }

  const renderList = useCallback(
    () =>
      Array.isArray(listNote) &&
      listNote?.splice(0, 10)?.map((item, index) => {
        return (
          <tr key={index}>
            <td className='w-250px'>{convertTimeZone(item?.createdAt)}</td>
            <td className=''>{item?.note || ''}</td>
          </tr>
        )
      }),
    [listNote]
  )

  const renderListBidHistory = useCallback(
    () =>
      Array.isArray(listNote) &&
      listBidHistory?.splice(0, 10)?.map((item, index) => {
        return (
          <tr key={index}>
            <td className='w-250px'>{convertTimeZone(item?.createdAt)}</td>
            <td className=''>{item?.bidder || ''}</td>
            <td className=''>{item?.bid || ''}</td>
          </tr>
        )
      }),
    [listBidHistory]
  )

  const handleEndAuction = async (id) => {
    try {
      await endAuction(id)
      alert.success('End Auction successful!')
      setReloadPage((preState) => !preState)
    } catch (error) {
      alert.error('End Auction failed, please try again!')
      console.error({error})
    }
  }

  useEffect(() => {
    dataDetail?.asset?.id && fetchListNote(dataDetail?.asset?.id)
  }, [dataDetail, loadingNote])

  return (
    <>
      <div className='row g-xxl-9'>
        <div className='col-xxl-6'>
          <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
            <div className='card-header'>
              <div className='card-title'>
                <h3>Auction Activity</h3>
              </div>
            </div>
            <div className='card-body pb-0'>
              <span className='fs-5 fw-semibold text-gray-600 pb-5 d-block'>
                Last 30 day earnings calculated. Apart from arranging the order of topics.
              </span>
              <div className='d-flex flex-wrap justify-content-between pb-6'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-dashed border-gray-300 w-125px rounded my-3 p-4 me-6'>
                    <span className='fs-2x fw-bold text-gray-800 lh-1'>
                      <span
                        data-kt-countup='true'
                        data-kt-countup-value='6,840'
                        data-kt-countup-prefix='$'
                        className='counted'
                        data-kt-initialized='1'
                      >
                        ${dataDetail?.asset?.bestBid ?? 0}
                      </span>
                    </span>
                    <span className='fs-6 fw-semibold text-gray-400 d-block lh-1 pt-2'>
                      Best Bid
                    </span>
                  </div>
                  <div className='border border-dashed border-gray-300 w-125px rounded my-3 p-4 me-6'>
                    <span className='fs-2x fw-bold text-gray-800 lh-1'>
                      <span
                        className='counted'
                        data-kt-countup='true'
                        data-kt-countup-value='80'
                        data-kt-initialized='1'
                      >
                        80
                      </span>
                      %
                    </span>
                    <span className='fs-6 fw-semibold text-gray-400 d-block lh-1 pt-2'>Change</span>
                  </div>
                  <div className='border border-dashed border-gray-300 w-125px rounded my-3 p-4 me-6'>
                    <span className='fs-2x fw-bold text-gray-800 lh-1'>
                      <span
                        data-kt-countup='true'
                        data-kt-countup-value='1,240'
                        data-kt-countup-prefix='$'
                        className='counted'
                        data-kt-initialized='1'
                      >
                        ${dataDetail?.asset?.reserve ?? 0}
                      </span>
                    </span>
                    <span className='fs-6 fw-semibold text-gray-400 d-block lh-1 pt-2'>
                      Reserve Price
                    </span>
                  </div>
                </div>
                {dataDetail?.asset?.auction ? (
                  <button
                    className='btn btn-primary px-6 flex-shrink-0 align-self-center'
                    onClick={() => handleEndAuction(dataDetail?.asset?.id)}
                  >
                    End Auction
                  </button>
                ) : (
                  ''
                )}
              </div>
              <h3 className='card-title align-items-start flex-column mb-5 mt-2'>
                <span className='card-label fw-bold fs-3'>Bid History</span>
              </h3>
              <div className='table-responsive'>
                <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                  <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
                    <tr className='fw-bold text-muted'>
                      <th className='w-250px' style={{paddingTop: '0px'}}>
                        TIMESTAMP
                      </th>
                      <th style={{paddingTop: '0px'}}>BIDDER</th>
                      <th style={{paddingTop: '0px'}}>BID</th>
                    </tr>
                  </thead>
                  <tbody className='fs-6 fw-semibold text-gray-600'>
                    {listBidHistory?.length > 0 ? (
                      renderListBidHistory()
                    ) : (
                      <tr>
                        <td colSpan={3} className='text-center'>
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
        </div>

        {/* --------- Note -------- */}
        <div className='col-xxl-6'>
          <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
            <div className='card-header'>
              <div className='card-title w-100 d-flex justify-content-between'>
                <h3 className='text-gray-800'>Notes</h3>
                <button
                  className='btn btn-sm btn-primary me-3'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_offer_a_deal'
                  onClick={() => setModalAddNote(true)}
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
                        TIMESTAMP
                      </th>
                      <th style={{paddingTop: '0px'}}>NOTE</th>
                    </tr>
                  </thead>
                  <tbody className='fs-6 fw-semibold text-gray-600'>
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
        </div>
      </div>
      <div className='card'>
        <TablesTransactions />
      </div>
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
    </>
  )
}