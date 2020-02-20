module.exports = function towelSort (arr) {
  return arr ? arr.reduce((newArr, current, i) => !(i%2) ? [...newArr, ...current] : [...newArr, ...current.reverse()], []) : [];
}
