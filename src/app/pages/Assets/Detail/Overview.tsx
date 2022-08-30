import React, {useCallback, useEffect, useState} from 'react'
import {getListNote} from '../../../../utils/api/assets'
import {convertTimeZone} from '../../../../_metronic/helpers/format/datetime'
import {TablesTransactions} from '../../Transactions/Table/TablesTransactions'

export default function Overview({dataDetail, loadingNote}) {
  const [listNote, setListNote] = useState(null)

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
                <h3>Earnings</h3>
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
                        $6,840
                      </span>
                    </span>
                    <span className='fs-6 fw-semibold text-gray-400 d-block lh-1 pt-2'>
                      Net Earnings
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
                        $1,240
                      </span>
                    </span>
                    <span className='fs-6 fw-semibold text-gray-400 d-block lh-1 pt-2'>Fees</span>
                  </div>
                </div>
                <a href='#' className='btn btn-primary px-6 flex-shrink-0 align-self-center'>
                  Withdraw Earnings
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-6'>
          <div className='card card-xxl-stretch mb-5 mb-xxl-10'>
            <div className='card-header'>
              <div className='card-title'>
                <h3 className='text-gray-800'>Notes</h3>
              </div>
            </div>
            <div className='card-body'>
              <div className='table-responsive'>
                <table className='table table-flush align-middle table-row-bordered table-row-solid gy-4'>
                  <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
                    <tr>
                      <th className='w-250px' style={{paddingTop: '0px'}}>Timestamp</th>
                      <th style={{paddingTop: '0px'}}>Note</th>
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
    </>
  )
}