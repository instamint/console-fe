import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageTitle} from '../../../../_metronic/layout/core'
import {TablesTransactions} from './transactions-list/TablesTransactions'

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='admin-transactions'
          element={
            <>
              <PageTitle>Transactions List</PageTitle>
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
