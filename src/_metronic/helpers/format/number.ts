export const showTwoDecimalPlaces = (number) => {
    if (number && !isNaN(number)) {
        return number?.toString()?.match(/^-?\d+(?:\.\d{0,2})?/)?.[0]
    } else return number
}
