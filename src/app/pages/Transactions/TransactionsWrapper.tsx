/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { TablesTransactions } from './Table/TablesTransactions'

const TransactionsPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className=''>
        <TablesTransactions className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const TransactionsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.TRANSACTIONS'})}</PageTitle>
      <TransactionsPage />
    </>
  )
}

export {TransactionsWrapper}

