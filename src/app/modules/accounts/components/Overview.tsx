/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { shortAddress } from '../../../../_metronic/helpers/format'
import { ButtonCopy } from '../../../components/Button/button-copy'

export function Overview({dataProfile}) {

  useEffect(() => {
    ReactTooltip.rebuild()
  }, [dataProfile])

  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>

          <Link
            style={{pointerEvents: 'none'}}
            to='/crafted/account/settings'
            className='btn btn-primary align-self-center'
          >
            Edit Profile
          </Link>
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Full Name</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{dataProfile?.partyName}</span>
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

            <div className='col-lg-8 fv-row d-flex'>
              <span
                data-tip={dataProfile?.algorandAddress}
                className='fw-bold fs-6'
                style={{minWidth: '85px'}}
              >
                {shortAddress(dataProfile?.algorandAddress)}
              </span>
              <ReactTooltip place='top' effect='solid' />
              <ButtonCopy text={dataProfile?.algorandAddress} />
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Ethereum Address</label>

            <div className='col-lg-8 fv-row d-flex'>
              <span
                data-tip={dataProfile?.ethereumAddress}
                className='fw-bold fs-6'
                style={{minWidth: '85px'}}
              >
                {shortAddress(dataProfile?.ethereumAddress)}
              </span>
              <ReactTooltip place='top' effect='solid' />
              <ButtonCopy text={dataProfile?.ethereumAddress} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}