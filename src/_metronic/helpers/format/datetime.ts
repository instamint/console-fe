export const convertTimeZone = (date: string) => {
  try {
    const dateToTime = (date) =>
      date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

    const dateString = date
    const userOffset = new Date().getTimezoneOffset() * 60 * 1000
    const localDate = new Date(dateString)
    const utcTime = new Date(localDate.getTime() + userOffset)
    return `${dateToTime(utcTime)}`
  } catch (error) {
    console.error({error})
  }
}
