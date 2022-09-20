import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import styled from 'styled-components'
import IconCopy from '../../images/copy.png'
import './style.scss'

export default function ButtonCopy({text}) {
  const [isCopy, setIsCopy] = useState(false)

  return (
    <>
      {text && text !== '' ? (
        <CopyToClipboard
          onCopy={() => {
            setIsCopy(true)
            setTimeout(() => {
              setIsCopy(false)
            }, 1500)
          }}
          text={text}
        >
          <div style={{position: 'relative'}} className='copy-link cursor-pointer'>
            <span className={`${isCopy ? 'active' : 'inactive'} copy_tooltip`} role='tooltip'>
              Copied
            </span>
            <ImageCopy src={IconCopy} alt='copy'></ImageCopy>
          </div>
        </CopyToClipboard>
      ) : (
        ''
      )}
    </>
  )
}

const ImageCopy = styled.img`
  border: none;
  cursor: pointer;
  width: 18px;
  height: 18px;
  margin-left: 5px;
  margin-bottom: 4px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`