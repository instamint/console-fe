import { useState } from 'react'
import { useAlert } from 'react-alert'
import { endAuction } from '../../../../utils/api/assets'
import { TablesTransactions } from '../../Transactions/Table/TablesTransactions'
import AuctionHistory from './AuctionHistory'
import BidHistory from './BidHistory/index'
import Notes from './Notes/index'
import TradeHistory from './TradeHistory'

export default function Overview({dataDetail, setReloadPage}) {
  const alert = useAlert()
  const [isLoadingAuction, setIsLoadingAuction] = useState(false)
  const listTabHistort = ['Bid History', 'Trade History', 'Auction History']
  const [tabHistory, setTabHistory] = useState('Bid History')

  const handleEndAuction = async (id) => {
    setIsLoadingAuction(true)
    try {
      await endAuction(id)
      alert.success('End Auction successful!')
      setReloadPage((preState) => !preState)
      setIsLoadingAuction(false)
    } catch (error) {
      alert.error('End Auction failed, please try again!')
      console.error({error})
      setIsLoadingAuction(false)
    }
  }

  const showTableHistory = (tab) => {
    switch (tab) {
      case 'Bid History':
        return <BidHistory idAsset={dataDetail?.asset?.id} />
      case 'Trade History':
        return <TradeHistory idAsset={dataDetail?.asset?.id} />
      case 'Auction History':
        return <AuctionHistory idAsset={dataDetail?.asset?.id} />
      default:
        return <BidHistory idAsset={dataDetail?.asset?.id} />
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
                  <div className='border border-dashed border-gray-300 rounded my-3 p-4 me-6'>
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
                  <div className='border border-dashed border-gray-300 rounded my-3 p-4 me-6'>
                    <span className='fs-2x fw-bold text-gray-800 lh-1'>
                      <span
                        className='counted'
                        data-kt-countup='true'
                        data-kt-countup-value='80'
                        data-kt-initialized='1'
                      >
                        ${dataDetail?.asset?.ask ?? 0}
                      </span>
                    </span>
                    <span className='fs-6 fw-semibold text-gray-400 d-block lh-1 pt-2'>Ask</span>
                  </div>
                  <div className='border border-dashed border-gray-300 rounded my-3 p-4 me-6'>
                    <span className='fs-2x fw-bold text-gray-800 lh-1'>
                      <span
                        data-kt-countup='true'
                        data-kt-countup-value='1,240'
                        data-kt-countup-prefix='$'
                        className='counted'
                        data-kt-initialized='1'
                      >
                        ${dataDetail?.asset?.reverse ?? 0}
                      </span>
                    </span>
                    <span className='fs-6 fw-semibold text-gray-400 d-block lh-1 pt-2'>
                      Reserve Price
                    </span>
                  </div>
                </div>
                {/* {dataDetail?.asset?.activeAuction ? (
                  <button
                    className='btn btn-primary px-6 flex-shrink-0 align-self-center'
                    onClick={() => !isLoadingAuction && handleEndAuction(dataDetail?.asset?.id)}
                  >
                    End Auction
                  </button>
                ) : (
                  ''
                )} */}
              </div>
              <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap mb-3'>
                {listTabHistort?.map((item, index) => {
                  return (
                    <li className='nav-item' onClick={() => setTabHistory(item)}>
                      <span
                        className={
                          `nav-link text-active-primary me-6 cursor-pointer ` +
                          (tabHistory === item && 'active')
                        }
                      >
                        {item}
                      </span>
                    </li>
                  )
                })}
              </ul>
              {showTableHistory(tabHistory)}
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