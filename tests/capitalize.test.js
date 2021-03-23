
import capitalize from '../scripts/capitalize'

test('first letter of string is capitalized', () => {
  expect(capitalize('a big baby')).toBe('A big baby')
})