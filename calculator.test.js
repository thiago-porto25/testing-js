const calculator = require('./calculator')

test('add 2 + 2 = 4', () => {
  expect(calculator.add(2, 2)).toBe(4)
})

test('add 0 + 5 = 5', () => {
  expect(calculator.add(0, 5)).toBe(5)
})

test('add -1 + 2 = 1', () => {
  expect(calculator.add(-1, 2)).toBe(1)
})

test('add -5 + -5 = -10', () => {
  expect(calculator.add(-5, -5)).toBe(-10)
})

test('not a number', () => {
  expect(calculator.add('abc', 'asd')).toBe('enter a number please')
})

///////////

test('sub - 2 - 2 = -4', () => {
  expect(calculator.sub(-2, 2)).toBe(-4)
})

test('sub 0 - 5 = -5', () => {
  expect(calculator.sub(0, 5)).toBe(-5)
})

test('sub 5 - 2 = 3', () => {
  expect(calculator.sub(5, 2)).toBe(3)
})

test('sub 5 - -5 = 10', () => {
  expect(calculator.sub(5, -5)).toBe(10)
})

test('not a number', () => {
  expect(calculator.sub('abc', 'asd')).toBe('enter a number please')
})

////////////

test('mul 5 * 5 = 25', () => {
  expect(calculator.multi(5, 5)).toBe(25)
})

test('mul 5 * 5 = 25', () => {
  expect(calculator.multi(2, -5)).toBe(-10)
})

test('mul 5 * 5 = 25', () => {
  expect(calculator.multi(-3, 5)).toBe(-15)
})

test('mul 2 = 2', () => {
  expect(calculator.multi(2)).toBe(2)
})

test('mul not numbers', () => {
  expect(calculator.multi('asd', 'dsa')).toBe('enter a number please')
})

/////////

test('div 6 / 6 = 1', () => {
  expect(calculator.divide(6, 6)).toBe(1)
})

test('div 6 / 0 = ?', () => {
  expect(calculator.divide(6, 0)).toBe("you can't divide by 0")
})

test('div -10 / 2 = -5', () => {
  expect(calculator.divide(-10, 2)).toBe(-5)
})

test('div -10 / -5 = -5', () => {
  expect(calculator.divide(-10, -5)).toBe(2)
})

test('div 10 / -3 = -3', () => {
  expect(calculator.divide(10, -3)).toBeCloseTo(-3)
})

test('div one param', () => {
  expect(calculator.divide(-25)).toBe(-25)
})
