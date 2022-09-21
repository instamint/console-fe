import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import styled from 'styled-components'
import IconCopy from '../../images/copy.png'
import './style.scss'

type Props = {
  text: string
  width?: string | number
}

export const ButtonCopy: React.FC<Props> = ({text, width = 17}) => {
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
          <div
            style={{position: 'relative'}}
            className='copy-link cursor-pointer'
            onClick={(e) => e.stopPropagation()}
          >
            <span className={`${isCopy ? 'active' : 'inactive'} copy_tooltip`} role='tooltip'>
              Copied
            </span>
            <ImageCopy width={width} height={width} src={IconCopy} alt='copy'></ImageCopy>
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
  margin-left: 2px;
  margin-bottom: 4px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`