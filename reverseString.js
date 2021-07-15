const reverseString = (word) => {
  const wordCleaned = word.trim()
  const wordArr = Array.from(wordCleaned)

  if (wordArr.indexOf(' ') !== -1 || word === '')
    return 'You must enter one word'

  const reversed = []

  wordArr.forEach((item) => {
    reversed.unshift(item.toLowerCase())
  })

  return reversed.join('')
}

module.exports = reverseString
