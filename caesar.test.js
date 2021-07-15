const caesar = require('./caesar')

test('simple test', () => {
  expect(caesar('abc', 1)).toBe('bcd')
})

test('testing with a space', () => {
  expect(caesar('thiago porto', 3)).toBe('wkldjr sruwr')
})

test('case sensitivity and special characters', () => {
  expect(caesar('The EnemY iS CominG! huRRy.', 20)).toBe(
    'nby yhygs cm wigcha! bolls.'
  )
})

test('default values', () => {
  expect(caesar()).toBe('nymn gymmuay')
})

test('key too big', () => {
  expect(caesar('batman is awesome', 26)).toBe(
    'Enter a key value between 0 and 25'
  )
})

test('testing with a lot of spaces', () => {
  expect(caesar('        thiago porto!      ', 3)).toBe('wkldjr sruwr!')
})

test('special characters', () => {
  expect(caesar('batman is @we$om& not', 14)).toBe('pohaob wg @ks$ca& bch')
})
