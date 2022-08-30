/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {Header} from './Header'
import {DefaultTitle} from './page-title/DefaultTitle'
import {Topbar} from './Topbar'

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {header, aside} = config

  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
      {...attributes.headerMenu}
    >
      <div
        className={clsx(
          classes.headerContainer.join(' '),
          'd-flex align-items-stretch justify-content-between'
        )}
      >
        <Link to='/' className='d-flex align-items-center mr-2 me-4'>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/instamint_logo.png')}
              width={150}
              height={40}
            />
        </Link>

        {/* begin::Wrapper */}
        <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
          {/* begin::Navbar */}
          {header.left === 'menu' && (
            <div className='d-flex align-items-stretch' id='kt_header_nav'>
              <Header />
            </div>
          )}

          {header.left === 'page-title' && (
            <div className='d-flex align-items-center' id='kt_header_nav'>
              <DefaultTitle />
            </div>
          )}

          <div className='d-flex align-items-stretch flex-shrink-0'>
            <Topbar />
          </div>
        </div>
        {/* end::Wrapper */}
      </div>
    </div>
  )
}
