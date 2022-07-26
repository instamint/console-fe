/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  MixedWidget10,
  MixedWidget11
} from '../../../_metronic/partials/widgets'

const AnalyticsPage: FC = () => (
  <>
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-6'>
        <MixedWidget10
          className='card-xxl-stretch-100 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='150px'
        />
      </div>
      <div className='col-xxl-6'>
        <MixedWidget11
          className='card-xxl-stretch-100 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
        />
      </div>
    </div>

    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-6'>
        <MixedWidget10
          className='card-xxl-stretch-100 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='150px'
        />
      </div>
      <div className='col-xxl-6'>
        <MixedWidget11
          className='card-xxl-stretch-100 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
        />
      </div>
    </div>
  </>
)

const AnalyticsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.ANALYTICS'})}</PageTitle>
      <AnalyticsPage />
    </>
  )
}

export { AnalyticsWrapper }

