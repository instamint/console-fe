/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {TablesYieldly} from './Table/TablesYieldly'

const YieldlyPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className=''>
        <TablesYieldly className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
  </>
)

const YieldlyWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.YIELDLY'})}</PageTitle>
      <YieldlyPage />
    </>
  )
}

export {YieldlyWrapper}
