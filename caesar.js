const createCipherAlphabet = (key) => {
  const mutableAlphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  for (let i = 0; i < key; i++) {
    const letter = mutableAlphabet.shift()
    mutableAlphabet.push(letter)
  }

  return mutableAlphabet
}

const caesar = (string = 'test message', key = 20) => {
  if (key > 25 || key < 0) return 'Enter a key value between 0 and 25'

  const normalAlphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  const cipherAlphabet = createCipherAlphabet(key)
  const stringArr = string.trim().split('')
  const regex = /\W|_/g

  const indexArr = stringArr.map((letter) => {
    if (letter === ' ' || regex.test(letter)) return letter
    else return normalAlphabet.indexOf(letter.toLowerCase())
  })

  const result = indexArr.map((item) => {
    if (item === ' ' || regex.test(item)) return item
    else return cipherAlphabet[item]
  })

  return result.join('')
}

module.exports = caesar
