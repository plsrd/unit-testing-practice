import caesar from '../scripts/caesar'

test('shifts the specified number', () => {
  expect(caesar('dogs', 1)).toBe('epht')
})

test('shifts the specified number', () => {
  expect(caesar('syzygy', 2)).toBe('uabaia')
})