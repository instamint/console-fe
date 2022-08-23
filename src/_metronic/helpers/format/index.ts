// Address token
export const shortAddress = (value: string, n = 4, nlast = 4, v = 13) => {
  if (value?.length <= v) {
    return value
  }
  const subString = value?.substr(0, n)
  const lastSubString = value?.substr(value.length - nlast, value.length)
  return subString + '..' + lastSubString
}

export const shortAddressBehind = (value: string, n = 25, nlast = 4, v = 13) => {
  if (value?.length <= v) {
    return value
  }
  const subString = value?.substr(0, n)
  const lastSubString = value?.substr(value.length - nlast, value.length)
  return subString + '...' + lastSubString
}
