import convertCurrency from "./convertCurrency"

describe ('convertCurrency', () => {
  test('given 1, it returns "One dollar."', () => {
    const result = convertCurrency(1)
    expect(result).toBe('One dollar.')
  })

  test('given 7, it returns "Seven dollars."', () => {
    const result = convertCurrency(7)
    expect(result).toBe('Seven dollars.')
  })

  test('given 12, it returns "Twelve dollars."', () => {
    const result = convertCurrency(12)
    expect(result).toBe('Twelve dollars.')
  })

  test('given 26, it returns "Twenty six dollars."', () => {
    const result = convertCurrency(26)
    expect(result).toBe('Twenty six dollars.')
  })

  test('given 99, it returns "Seventy seven dollars."', () => {
    const result = convertCurrency(99)
    expect(result).toBe('Ninety nine dollars.')
  })

  test('given 100, it returns "One hundred dollars."', () => {
    const result = convertCurrency(100)
    expect(result).toBe('One hundred dollars.')
  })

  test('given 565, it returns "Five hundred sixty five dollars."', () => {
    const result = convertCurrency(565)
    expect(result).toBe('Five hundred sixty five dollars.')
  })
  
  test('given 1000, it returns "One thousand dollars."', () => {
    const result = convertCurrency(1000)
    expect(result).toBe('One thousand dollars.')
  })

  test('given 1234, it returns "One thousand two hundred thirty four dollars."', () => {
    const result = convertCurrency(1234)
    expect(result).toBe('One thousand two hundred thirty four dollars.')
  })

  test('given 77777, it returns "Seventy seven thousand seven hundred seventy seven dollars."', () => {
    const result = convertCurrency(77777)
    expect(result).toBe('Seventy seven thousand seven hundred seventy seven dollars.')
  })

  test('given 1000000, it returns "One million dollars."', () => {
    const result = convertCurrency(1000000)
    expect(result).toBe('One million dollars.')
  })

  test('given 1111111, it returns "One million one hundred eleven thousand one hundred eleven dollars."', () => {
    const result = convertCurrency(1111111)
    expect(result).toBe('One million one hundred eleven thousand one hundred eleven dollars.')
  })

  test('given 1.0, it returns "One dollar".', () => {
    const result = convertCurrency(1.0)
    expect(result).toBe('One dollar.')
  })

  test('given 1.5, it returns "One dollar and fifty cents.', () => {
    const result = convertCurrency(1.5)
    expect(result).toBe('One dollar and fifty cents.')
  })

  test('given 22.37, it returns "Twenty two dollars and thirty seven cents."', () => {
    const result = convertCurrency(22.37)
    expect(result).toBe('Twenty two dollars and thirty seven cents.')
  })

  test('given 0.5, it returns "Fifty cents."', () => {
    const result = convertCurrency(0.5)
    expect(result).toBe('Fifty cents.')
  })

  test('given 87.8876, it returns "Eighty seven dollars and eighty nine cents.', () => {
    const result = convertCurrency(87.8876)
    expect(result).toBe('Eighty seven dollars and eighty nine cents.')
  })
})
