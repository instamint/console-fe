/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { TradeHistory } from '../Assets/Detail/TradeHistory'

const TradesPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className=''>
        <div className='card card-xxl-stretch mb-5 mb-xl-8'>
          <div className='card-body py-4'>
            <TradeHistory />
          </div>
        </div>
      </div>
    </div>
    {/* end::Row */}
  </>
)

const TradesWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.TRADES'})}</PageTitle>
      <TradesPage />
    </>
  )
}

export {TradesWrapper}

