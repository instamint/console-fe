import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import { TradesWrapper } from './LoginActivityWrapper'

export default function TradesPage() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path={`trades`} element={<TradesWrapper />} />
      </Route>
      <Route index element={<Navigate to='/platform/trades' />} />
    </Routes>
  )
}
