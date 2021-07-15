const capitalize = require('./capitalize')

test('testing simple word', () => {
  expect(capitalize('abcd')).toBe('Abcd')
})

test('testing with space', () => {
  expect(capitalize('     abcd')).toBe('Abcd')
})

test('testing with other letters capitalized', () => {
  expect(capitalize('aBcD')).toBe('Abcd')
})

test('testing with two words', () => {
  expect(capitalize('abc def')).toBe('Fail')
})
