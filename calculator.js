const calculator = {
  add: function (a = 0, b = 0) {
    if (typeof a !== 'number' || typeof b !== 'number')
      return 'enter a number please'

    return a + b
  },
  sub: function (a = 0, b = 0) {
    if (typeof a !== 'number' || typeof b !== 'number')
      return 'enter a number please'

    return a - b
  },
  multi: function (a = 1, b = 1) {
    if (typeof a !== 'number' || typeof b !== 'number')
      return 'enter a number please'

    return a * b
  },
  divide: function (a = 1, b = 1) {
    if (typeof a !== 'number' || typeof b !== 'number')
      return 'enter a number please'

    if (b === 0) return "you can't divide by 0"

    return Math.round(a / b)
  },
}

module.exports = calculator
