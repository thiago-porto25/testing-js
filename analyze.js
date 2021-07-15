const average = (array) => {
  let sum = 0

  array.forEach((elem) => {
    if (typeof elem !== 'number') return
    else sum += elem
  })

  return array.length !== 0 ? Math.round(sum / array.length) : array.length
}

const min = (array) => {
  const result = array.reduce((currentNum, prevNum) =>
    currentNum < prevNum ? currentNum : prevNum
  )

  return result
}

const max = (array) => {
  const result = array.reduce((currentNum, prevNum) =>
    currentNum > prevNum ? currentNum : prevNum
  )

  return result
}

const analyze = (array = []) => {
  if (!Array.isArray(array)) return 'please enter an array'

  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  }
}

module.exports = analyze
