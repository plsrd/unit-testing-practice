import calculator from '../scripts/caluclator'

test('adds two numbers', () => {
  expect(calculator(2, '+', 2)).toBe(4)
})

test('subtracts two numbers', () => {
  expect(calculator(5, '-', 2)).toBe(3)
})

test('multiplies two numbers', () => {
  expect(calculator(2, '*', 3)).toBe(6)
})

test('divides two numbers', () => {
  expect(calculator(10, '/', 5)).toBe(2)
})