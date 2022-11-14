/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { TablesDashboard } from './Table/TablesDashboard'

const DashboardPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className=''>
        <TablesDashboard className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
