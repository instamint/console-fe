import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import { PartiesWrapper } from './PartiesWrapper'

export default function PartiesPage() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path='platform-parties' element={<PartiesWrapper />} />
      </Route>
      <Route index element={<Navigate to='/platform/parties' />} />
    </Routes>
  )
}
