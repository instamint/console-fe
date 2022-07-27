import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {TablesTransactions} from './transactions-list/TablesTransactions'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Transactions',
    path: '/admin/admin-transactions',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='admin-transactions'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Transactions List</PageTitle>
              <TablesTransactions className='card-xxl-stretch mb-5 mb-xl-8' />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/admin/admin-transactions' />} />
    </Routes>
  )
}

export default UsersPage
