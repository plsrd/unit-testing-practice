const analyze = (arr) => {
  const sorted = arr.sort((a, b) => a > b ? 1 : -1)
  return {
    average: Math.round(arr.reduce(((total, amount) => total + amount )) / arr.length), 
    min: sorted[0],
    max: sorted[sorted.length - 1], 
    length: arr.length
  }
}

export default analyze