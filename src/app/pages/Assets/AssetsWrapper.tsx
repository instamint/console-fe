/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { TablesAssets } from './Table/TablesAssets'

const AssetsPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className=''>
        <TablesAssets className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const AssetsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.ASEETS'})}</PageTitle>
      <AssetsPage />
    </>
  )
}

export { AssetsWrapper }

