export default function shortNumber (number) {
  const newValue = null
  if (number < 1e3 ) {
    let newValue = number 
    return newValue
  }

  if (number > 1e3 && number < 1e6 ) {
    let newValue = number / 1e3
    return newValue + ' K'
  }

  if (number > 1e6 && number < 1e9 ) {
    let newValue = number / 1e6
    return newValue + ' M'
  }
}