import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { TablesUsers } from './users-list/TablesUser'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Users',
    path: '/admin/users',
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
          path='users'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Users List</PageTitle>
              <TablesUsers className='card-xxl-stretch mb-5 mb-xl-8' />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/admin/users' />} />
    </Routes>
  )
}

export default UsersPage
