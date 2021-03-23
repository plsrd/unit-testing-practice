import analyze from '../scripts/analyze'

test('returns an object', () => {
  expect(analyze([1, 2, 4])).toBeInstanceOf(Object)
})

test('matches object', () => {
  expect(analyze([3, 5, 1])).toMatchObject({
    average:  3,
    min: 1,
    max: 5, 
    length: 3
  })
})

test('returns an object', () => {
  expect(analyze([1,8,3,4,2,6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})

