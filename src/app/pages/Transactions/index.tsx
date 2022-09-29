import {Navigate, Outlet, Route, Routes, useLocation} from 'react-router-dom'
import { TransactionsWrapper } from './TransactionsWrapper'

export default function TransactionsPage() {
  const location = useLocation()
  const path = location?.pathname?.split('/')?.[1] || null

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path={`${path && `${path}-`}transactions`} element={<TransactionsWrapper />} />
      </Route>
      <Route index element={<Navigate to={`/${path}/${path && `${path}-`}transactions`} />} />
    </Routes>
  )
}