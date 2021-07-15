const analyze = require('./analyze')

test('array length 1', () => {
  expect(analyze([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  })
})

test('array length 2', () => {
  expect(analyze([1, 2])).toEqual({
    average: 2,
    min: 1,
    max: 2,
    length: 2,
  })
})

test('array length 3', () => {
  expect(analyze([10, 2, 8])).toEqual({
    average: 7,
    min: 2,
    max: 10,
    length: 3,
  })
})

test('array length 4', () => {
  expect(analyze([25, 10, 3, 1])).toEqual({
    average: 10,
    min: 1,
    max: 25,
    length: 4,
  })
})

test('array length 8', () => {
  expect(analyze([10, 2, 7, 4, 2, 12, 22, 5])).toEqual({
    average: 8,
    min: 2,
    max: 22,
    length: 8,
  })
})
