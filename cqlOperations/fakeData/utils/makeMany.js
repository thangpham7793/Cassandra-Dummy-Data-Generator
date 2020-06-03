const makeMany = (makeOneFn) => (amount) => {
  let res = []
  while (res.length < amount) {
    res.push(makeOneFn())
  }
  return res
}

module.exports = makeMany
