import { useAlert } from 'react-alert'
import { endAuction } from '../../../../utils/api/assets'
import { TablesTransactions } from '../../Transactions/Table/TablesTransactions'
import BidHistory from './BidHistory/index'
import Notes from './Notes/index'

export default function Overview({dataDetail, setReloadPage}) {
  const alert = useAlert()

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
              <BidHistory idAsset={dataDetail?.asset?.id} />
            </div>
          </div>
        </div>

        {/* --------- Note -------- */}
        <div className='col-xxl-6'>
          <Notes idAsset={dataDetail?.asset?.id} />
        </div>
      </div>
      <div className='card'>
        <TablesTransactions idAsset={dataDetail?.asset?.id} />
      </div>
    </>
  )
}