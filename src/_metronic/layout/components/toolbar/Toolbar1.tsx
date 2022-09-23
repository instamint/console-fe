/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC, useEffect, useRef} from 'react'
import useWindowSize from '../../../../app/hooks/useWindowSize'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'

const Toolbar1: FC = () => {
  const {classes} = useLayout()
  const headerRef: any = useRef()
  const windowSize = useWindowSize()

  useEffect(() => {
    if (headerRef?.current?.childNodes && headerRef?.current?.childNodes?.length > 1) {
      headerRef?.current?.removeChild(headerRef.current.children[0])
    }
  }, [windowSize, headerRef])

  return (
    <div className='toolbar' id='kt_toolbar'>
      <div
        id='kt_toolbar_container'
        ref={headerRef}
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
      >
        <DefaultTitle />
      </div>
    </div>
  )
}

export {Toolbar1}
