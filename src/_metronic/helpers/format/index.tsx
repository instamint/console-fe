import IconEthereum from '../../../../src/app/images/ethereum.png'
import IconAlgorand from '../../../../src/app/images/algorand.png'
import styled from 'styled-components'

// Address token
export const shortAddress = (value: string = '', n = 4, nlast = 4, v = 13) => {
  if (!value) return null
  if (value?.length <= v) {
    return value
  }
  const subString = value?.substr(0, n)
  const lastSubString = value?.substr(value.length - nlast, value.length)
  return subString + '..' + lastSubString
}

export const shortAddressBehind = (value: string, n = 25, nlast = 4, v = 13) => {
  if (!value) return null
  if (value?.length <= v) {
    return value
  }
  const subString = value?.substr(0, n)
  const lastSubString = value?.substr(value.length - nlast, value.length)
  return subString + '...' + lastSubString
}

export const shortAddressMaxLength = (value: string, n = 25) => {
  if (!value) return null
  if (value?.length <= n) {
    return value
  }
  return value?.substring(0, n) + '...'
}

export const showIconChain = (chain: string) => {
  if (!chain) return
  const ImgChain = styled.img`
    width: 22px;
    height: 20px;
  `
  switch (chain?.toLowerCase()) {
    case 'ethereum-goerli':
      return <ImgChain src={IconEthereum}></ImgChain>
    case 'algorand-testnet':
      return <ImgChain src={IconAlgorand}></ImgChain>
    default:
      return ""
  }
}