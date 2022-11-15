export const showTwoDecimalPlaces = (number) => {
    if (number && !isNaN(number)) {
        return number?.toString()?.match(/^-?\d+(?:\.\d{0,2})?/)?.[0]
    } else return number || 0
}

export const showNumberFormat = (number) => {
  if (number && !isNaN(number)) {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  } else return number || 0
}
