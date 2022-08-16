import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { PageTitle } from '../../../../_metronic/layout/core'


export default function AssetsDetail() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const id: string | number = searchParams.get('id')
  
  useEffect(() => {
    if (!id) {
      navigate("/assets")
    }
  }, [id])
  
  return (
    <>
      <PageTitle>Assets Detail</PageTitle>
      <div>
        <div>
          <div className='d-flex align-items-center'>
            <button onClick={() => navigate(-1)} className='btn btn-primary me-5'>
              <i className='fa-solid fa-arrow-left'></i> Back
            </button>
          </div>
        </div>
        <div className='mt-5'>Assets Detail Content...</div>
      </div>
    </>
  )
}