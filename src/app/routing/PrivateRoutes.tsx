import { FC, lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import AccountPage from '../modules/accounts/AccountPage'
import { useAuth } from '../modules/auth'
import { AnalyticsWrapper } from '../pages/Analytics/DashboardWrapper'
import { AssetsWrapper } from '../pages/Assets/AssetsWrapper'
import AssetsDetail from '../pages/Assets/Detail'
import { ContractsWrapper } from '../pages/Contracts/ContractsWrapper'
import { DeFiWrapper } from '../pages/DeFi/DeFiWrapper'
import { DesignerWrapper } from '../pages/Designer/index'
import { MonitoringWrapper } from '../pages/Monitoring/MonitoringPageWrapper'
import PartiesDetail from '../pages/Parties/Detail'
import { PartiesWrapper } from '../pages/Parties/PartiesWrapper'
import { PoolsWrapper } from '../pages/Pools/PoolsWrapper'
import { TransactionsWrapper } from '../pages/Transactions/TransactionsWrapper'

const PrivateRoutes = () => {
  const {currentUser} = useAuth()
  // const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  // const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  // const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  // const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  // const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const AssetsPage = lazy(() => import('../../app/pages/Assets/index'))
  const PartiesPage = lazy(() => import('../../app/pages/Parties/index'))
  const ClientsPage = lazy(() => import('../modules/admin/clients/ClientsPage'))
  const LoginsPage = lazy(() => import('../modules/admin/logins/LoginsPage'))
  const TransactionsPage = lazy(() => import('../../app/pages/Transactions/index'))
  const DelegatedUsersPage = lazy(() => import('../../app/pages/DelegatedUsers/index'))
  const LoginActivityPage = lazy(() => import('../../app/pages/LoginActivity/index'))
  const TradesPage = lazy(() => import('../../app/pages/Trades/index'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='assets' element={<AssetsWrapper />} />
        <Route
          path='assets/detail/*'
          element={
            <SuspensedView>
              <AssetsDetail />
            </SuspensedView>
          }
        />
        <Route path='parties/detail/*' element={<PartiesDetail />} />
        <Route path='portfolios' element={<PoolsWrapper />} />
        <Route path='designer' element={<DesignerWrapper />} />
        <Route path='analytics' element={<AnalyticsWrapper />} />
        <Route path='parties' element={<PartiesWrapper />} />
        <Route path='transactions' element={<TransactionsWrapper />} />
        <Route path='contracts' element={<ContractsWrapper />} />
        <Route path='monitoring' element={<MonitoringWrapper />} />
        <Route path='defi' element={<DeFiWrapper />} />
        {currentUser?.role?.length && currentUser?.role?.includes('ADMIN') ? (
          <Route
            path='admin/*'
            element={
              <SuspensedView>
                <ClientsPage />
                <LoginsPage />
                <TransactionsPage />
              </SuspensedView>
            }
          />
        ) : (
          ''
        )}
        {currentUser?.platformAdmin ? (
          <Route
            path='platform/*'
            element={
              <SuspensedView>
                <AssetsPage />
                <ClientsPage />
                <DelegatedUsersPage />
                <PartiesPage />
                <LoginActivityPage />
                <TransactionsPage />
                <TradesPage />
              </SuspensedView>
            }
          />
        ) : (
          ''
        )}

        {/* <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} /> */}
        {/* <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        /> */}
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        {/* 
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        /> */}
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/assets' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }

