export const capitalise = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const stripDoubleWhite = (str: string): string => {
  return str.replace(/\s{2,}/g, ' ')
}