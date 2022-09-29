import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { AssetsWrapper } from './AssetsWrapper'

export default function AssetPage() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path='platform-assets' element={<AssetsWrapper />} />
      </Route>
      <Route index element={<Navigate to='/platform/assets' />} />
    </Routes>
  )
}
