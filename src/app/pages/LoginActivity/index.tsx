import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import { LoginActivityWrapper } from './LoginActivityWrapper'

export default function LoginActivityPage() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path={`login-activity`} element={<LoginActivityWrapper />} />
      </Route>
      <Route index element={<Navigate to='/platform/login-activity' />} />
    </Routes>
  )
}
