const caesar = (str, num) => {
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let result = ''
  str.split('').forEach(letter => {
    const newIndex = (alpha.indexOf(letter) + num) > 25 ? (num - (26 - alpha.indexOf(letter))) : (alpha.indexOf(letter) + num)
    result += alpha[newIndex]
  })
  return result
}

export default caesar