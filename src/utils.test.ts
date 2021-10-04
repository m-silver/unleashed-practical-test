import { capitalise, stripDoubleWhite } from './utils'

describe('capitalise', () => {
  test('given "a", it returns "A"', () => {
    const result = capitalise('a')
    expect(result).toBe('A')
  })

  test('given "ab", it returns "Ab"', () => {
    const result = capitalise('ab')
    expect(result).toBe('Ab')  
  })

  test('given "a b", it returns "A b"', () => {
    const result = capitalise('a b')
    expect(result).toBe('A b') 
  })
})

describe('stripDoubleWhite', () => {
  test('given "a  b", it returns "a b"', () => {
    const result = stripDoubleWhite("a  b")
    expect(result).toBe("a b")
  })

  test('given "  a  b", it returns " a b"', () => {
    const result = stripDoubleWhite("  a  b")
    expect(result).toBe(" a b")
  })
})
