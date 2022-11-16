import IconEthereum from '../../../../src/app/images/ethereum.png'
import IconAlgorand from '../../../../src/app/images/algorand.png'

interface StyledType {
  width?: number;
  height?: number;

  [key: string]: any
}
interface DataShowChain {
  chain: string;
  styled?: StyledType
}

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

export const showIconChain = (data: DataShowChain) => {
  const chain = data?.chain
  const width = data?.styled?.width || 22
  const height = data?.styled?.height || 20

  if (!chain) return
  switch (chain?.toLowerCase()) {
    case 'ethereum-goerli':
      return (
        <img
          src={IconEthereum}
          width={width}
          height={height}
          style={{...data.styled}}
          alt='logo-chain'
        />
      )
    case 'algorand-testnet':
      return (
        <img
          src={IconAlgorand}
          width={width}
          height={height}
          style={{...data.styled}}
          alt='logo-chain'
        />
      )
    default:
      return ''
  }
}