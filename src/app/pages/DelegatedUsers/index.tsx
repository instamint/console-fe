import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import { DelegatedUsersWrapper } from './DelegatedUsersWrapper'

export default function DelegatedUsersPage() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path={`delegated-users`} element={<DelegatedUsersWrapper />} />
      </Route>
      <Route index element={<Navigate to='/platform/delegated-users' />} />
    </Routes>
  )
}