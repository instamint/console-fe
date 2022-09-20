/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { shortAddress } from '../../../../_metronic/helpers/format'

export function Overview({dataProfile}) {
  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>

          <Link style={{pointerEvents: "none"}} to='/crafted/account/settings' className='btn btn-primary align-self-center'>
            Edit Profile
          </Link>
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Full Name</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>Jamiel Sheikh</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Company</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>Instamint</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Algorand Address</label>

            <div className='col-lg-8 fv-row'>
              <span data-tip={dataProfile?.algorandAddress} className='fw-bold fs-6'>
                {shortAddress(dataProfile?.algorandAddress)}
              </span>
              <ReactTooltip place='top' effect='solid' />
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Ethereum Address</label>

            <div className='col-lg-8 fv-row'>
              <span data-tip={dataProfile?.ethereumAddress} className='fw-bold fs-6'>
                {shortAddress(dataProfile?.ethereumAddress)}
              </span>
              <ReactTooltip place='top' effect='solid' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
