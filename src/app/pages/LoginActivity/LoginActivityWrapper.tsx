/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const LoginActivityPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className=''>
      </div>
    </div>
    {/* end::Row */}
  </>
)

const LoginActivityWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.LOGIN_ACTIVITY'})}</PageTitle>
      <LoginActivityPage />
    </>
  )
}

export {LoginActivityWrapper}

