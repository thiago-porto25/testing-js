function capitalize(word) {
  const wordCleaned = word.trim()
  const arr = Array.from(wordCleaned)

  if (arr.indexOf(' ') !== -1 || word === '') return 'Fail'
  else {
    const capitalized = arr.map((item, i) => {
      if (i === 0) return item[0].toUpperCase()
      return item.toLowerCase()
    })

    return capitalized.join('')
  }
}

module.exports = capitalize
