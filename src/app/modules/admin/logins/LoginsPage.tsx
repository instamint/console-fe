import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { TablesLogin } from './logins-list/TablesLogin'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Logins',
    path: '/admin/logins',
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
          path='logins'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Logins List</PageTitle>
              <TablesLogin className='card-xxl-stretch mb-5 mb-xl-8' />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/admin/logins' />} />
    </Routes>
  )
}

export default UsersPage
