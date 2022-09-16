/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import MonitoringPage from './MonitoringPage'

const Monitoring: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <MonitoringPage />
    </div>
  </>
)

const MonitoringWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.PORTFOLIOS'})}</PageTitle>
      <Monitoring />
    </>
  )
}

export {MonitoringWrapper}