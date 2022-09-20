import React, { useEffect, useState } from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {AccountHeader} from './AccountHeader'
import { ApiKeysWrapper } from './components/ApiKeys/ApiKeysWrapper'
import { getDataProfile } from '../../../utils/api/acccount-setting'

const AccountPage: React.FC = () => {
  const [dataProfile, setDataProfile] = useState(null)

  const fetchDataProfile = async () => {
    try {
      const reps = await getDataProfile()
      reps && setDataProfile(reps)
    } catch (error) {
      console.error({error})
    }
  }

  useEffect(() => {
    fetchDataProfile()
  }, [])
  

  return (
    <Routes>
      <Route
        element={
          <>
            <AccountHeader dataProfile={dataProfile} />
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle>Overview</PageTitle>
              <Overview dataProfile={dataProfile} />
            </>
          }
        />
        {/* <Route
          path='settings'
          element={
            <>
              <PageTitle>Settings</PageTitle>
              <Settings dataProfile={dataProfile} />
            </>
          }
        /> */}
        <Route
          path='api-keys'
          element={
            <>
              <PageTitle>API Keys</PageTitle>
              <ApiKeysWrapper dataProfile={dataProfile} />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/account/overview' />} />
      </Route>
    </Routes>
  )
}

export default AccountPage
