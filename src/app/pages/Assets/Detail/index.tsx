import { useEffect, useState } from 'react'
import { Navigate, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { getDetailAsset } from '../../../../utils/api/assets'
import { Loading } from '../../../components/Loading'
import { AccountHeader } from './AccountHeader'
import Overview from './Overview'

export default function AssetsDetail() {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [dataDetail, setDataDetail] = useState<any>(null)
  const [loadingNote, setLoadingNote] = useState(true)
  const navigate = useNavigate()
  const paramUrl = params?.[Object.keys(params)?.[0]]?.split('/')
  const id = paramUrl?.[paramUrl?.length - 1] || null

  const fetchDetailAsset = async (id) => {
    setIsLoading(true)
    try {
      const reps = await getDetailAsset(id)
      setDataDetail({
        ...reps?.data,
        ethereumAsset: reps?.data?.ethereumAsset || null,
        algorandAsset: reps?.data?.algorandAsset || null,
      })
    } catch (error) {
      console.error({error})
      navigate('/error/404')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!id) {
      navigate('/assets')
    } else {
      fetchDetailAsset(id)
    }
  }, [id])

  return (
    <>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div
              id='kt_app_toolbar'
              className='app-toolbar mb-5 d-flex align-items-center'
              style={{justifyContent: 'space-between'}}
            >
              <div id='kt_app_toolbar_container' className='app-container d-flex flex-stack'>
                <div className='page-title d-flex flex-column justify-content-center flex-wrap me-3'>
                  <h1 className='page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0'>
                    Asset Detail View
                  </h1>
                  <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1'>
                    <li className='breadcrumb-item text-muted'>
                      <span className='text-muted'>Home</span>
                    </li>
                    <li className='breadcrumb-item'>
                      <span className='bullet bg-gray-400 w-5px h-2px'></span>
                    </li>
                    <li className='breadcrumb-item text-muted'>Account changes to Console</li>
                    <li className='breadcrumb-item'>
                      <span className='bullet bg-gray-400 w-5px h-2px'></span>
                    </li>
                    <li className='breadcrumb-item text-muted'>Asset Detail View</li>
                  </ul>
                </div>
              </div>
              <div className='d-flex align-items-center'>
                <button onClick={() => navigate(-1)} className='btn btn-primary me-5'>
                  <i className='fa-solid fa-arrow-left'></i> Back
                </button>
              </div>
            </div>
            <Routes>
              <Route
                element={
                  <>
                    <AccountHeader
                      id={id}
                      dataDetail={dataDetail}
                      setLoadingNote={setLoadingNote}
                    />
                    <Outlet />
                  </>
                }
              >
                <Route
                  path='overview/:id'
                  element={
                    <>
                      <Overview dataDetail={dataDetail} loadingNote={loadingNote} />
                    </>
                  }
                />
                <Route index element={<Navigate to={`/assets/detail/overview/${id}`} />} />
              </Route>
            </Routes>
          </div>
        )}
      </div>
    </>
  )
}
