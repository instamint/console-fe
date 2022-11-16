/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import { TablesTinyman } from './Table/TablesTinyman'

const TinymanPage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className=''>
        <TablesTinyman className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
  </>
)

const TinymanWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.TINYMAN'})}</PageTitle>
      <TinymanPage />
    </>
  )
}

export {TinymanWrapper}
