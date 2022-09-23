export const showTwoDecimalPlaces = (number) => {
    if (number && !isNaN(number)) {
        return (Math.round(number * 100) / 100)?.toFixed(2)
    } else return number
}