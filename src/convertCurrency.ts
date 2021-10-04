import { capitalise, stripDoubleWhite } from "./utils"

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const convertCurrency = (num: number): string => {
  return Number.isInteger(num) 
    ? convertInt(num)
    : convertFloat(num)
}

export default convertCurrency

const convertInt = (num: number): string => {
  if (num === 0) return 'Zero dollars.'
  else if (num === 1) return 'One dollar.'
  else return format(`${convertMillions(num)} dollars.`)
}

const convertFloat = (num: number): string => {
  const roundedNum = Math.round(num * 100) / 100
  const dollars = parseInt(roundedNum.toString().split('.')[0])
  const cents = roundedNum.toString().split('.')[1].length === 1 
    ? parseInt(roundedNum.toString().split('.')[1])*10
    : parseInt(roundedNum.toString().split('.')[1])

  if (!dollars) {
    if (cents === 1) return 'One cent.'
    else return `${format(convertHundreds(cents))}cents.`
  } else {
    if (dollars === 1) {
      if (cents === 1) return 'One dollar and one cent.'
      else return `One dollar and ${convertHundreds(cents)}cents.`
    } else return `${format(`${convertMillions(dollars)} dollars`)} and ${convertHundreds(cents)} cents.`
  }
}

const format = (str: string): string => {
  return capitalise(stripDoubleWhite(str))
}

const convertMillions = (num: number): string => {
  if (num >= 1000000) {
    return `${convertMillions(Math.floor(num / 1000000))} million ${convertThousands(num % 1000000)}`
  } else {
    return convertThousands(num)
  }
}

const convertThousands = (num: number): string => {
  if (num >= 1000) {
    return `${convertHundreds(Math.floor(num / 1000))} thousand ${convertHundreds(num % 1000)}`
  } else {
    return convertHundreds(num)
  }
}

const convertHundreds = (num: number): string => {
  if (num > 99) {
    return `${ones[Math.floor(num / 100)]} hundred ${convertTens(num % 100)}`
  } else {
    return convertTens(num)
  }
}

const convertTens = (num: number): string => {
  if (num < 10) return ones[num]
  else if (num >= 10 && num < 20) return teens[num - 10]
  else {
    return `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`
  }
}
