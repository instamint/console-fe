import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import { YieldlyWrapper } from './DeFiWrapper'

export default function YieldlyPage() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path={`yieldly`} element={<YieldlyWrapper />} />
      </Route>
      <Route index element={<Navigate to='/defi/yieldly' />} />
    </Routes>
  )
}
