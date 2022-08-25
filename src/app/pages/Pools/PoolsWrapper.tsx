/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { TablesPools } from './Table/TablePools'

const PoolsPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className=''>
        <TablesPools className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const PoolsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.PORTFOLIOS'})}</PageTitle>
      <PoolsPage />
    </>
  )
}

export {PoolsWrapper}
