const reverseString = require('./reverseString')

test('testing simple word', () => {
  expect(reverseString('abcd')).toBe('dcba')
})

test('testing multiple words', () => {
  expect(reverseString('abcd efg')).toBe('You must enter one word')
})

test('testing empty', () => {
  expect(reverseString('')).toBe('You must enter one word')
})

test('testing with space at both ends', () => {
  expect(reverseString('     thiago     ')).toBe('ogaiht')
})

test('testing with capitalized letters', () => {
  expect(reverseString('AbCD')).toBe('dcba')
})
