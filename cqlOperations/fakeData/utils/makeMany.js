//a higher order function that returns a curried
//customised row-generator

const makeMany = (makeOneFn) => (amount) => {
  let res = []
  while (res.length < amount) {
    res.push(makeOneFn())
  }
  return res
}

module.exports = makeMany
