export default () => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `${year}-0${month}`
  } else {
    return `${year}-${month}`
  }
}
