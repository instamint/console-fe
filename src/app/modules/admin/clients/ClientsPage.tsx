import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { TablesClients } from './clients-list/TablesClients'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Clients',
    path: '/admin/clients',
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

const ClientsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='clients'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Clients List</PageTitle>
              <TablesClients className='card-xxl-stretch mb-5 mb-xl-8' />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/admin/clients' />} />
    </Routes>
  )
}

export default ClientsPage
