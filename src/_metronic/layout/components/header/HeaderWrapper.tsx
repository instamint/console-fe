/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'
import {useLayout} from '../../core'
import {Header} from './Header'
import {Topbar} from './Topbar'
import logoInstamint from '../../../../app/images/logo-instamint.png'
import useWindowSize from '../../../../app/hooks/useWindowSize'

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {header, aside} = config
  const headerRef: any = useRef()
  const windowSize = useWindowSize()
  
  useEffect(() => {
    if (headerRef?.current?.childNodes && headerRef?.current?.childNodes?.length > 1) {
      headerRef?.current?.removeChild(headerRef.current.children[0])
    }
    if (windowSize?.width < 1440 && headerRef?.current) {
      headerRef.current.style.maxWidth = windowSize?.width < 1309 ? '640px' : '800px'
      headerRef.current.style.overflowX = 'auto'
    } else {
      headerRef.current.style.maxWidth = 'unset'
      headerRef.current.style.overflowX = 'hidden'
    }
  }, [windowSize, headerRef])

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
        <Link to='/' className='d-flex align-items-center mr-2 me-5'>
          <img alt='Logo Header' src={logoInstamint} width={165} />
        </Link>

        {/* begin::Wrapper */}
        <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
          {header.left === 'menu' && (
            <div className='d-flex align-items-stretch' id='kt_header_nav' ref={headerRef}>
              <Header />
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
