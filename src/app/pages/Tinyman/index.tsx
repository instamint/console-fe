import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import { TinymanWrapper } from './TinymanWrapper'

export default function TinymanPage() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path={`tinyman`} element={<TinymanWrapper />} />
      </Route>
      <Route index element={<Navigate to='/defi/yieldly' />} />
    </Routes>
  )
}
