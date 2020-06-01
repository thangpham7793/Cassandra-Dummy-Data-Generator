const randomIndex = require('./randomIndex')

// NOTE: get course_id and doc_id (together since they're the primary key)
const courseAndDocId = [
  ['courseA', 'docA1'],
  ['courseA', 'docA2'],
  ['courseA', 'docA3'],
  ['courseB', 'docB1'],
  ['courseB', 'docB2'],
  ['courseB', 'docB3'],
  ['courseC', 'docC1'],
  ['courseC', 'docC2'],
  ['courseC', 'docC3'],
]
const getCourseAndDocId = (courseAndDocId) => {
  const index = randomIndex(0, courseAndDocId.length)()
  const pair = courseAndDocId[index]
  return {
    course_id: pair[0],
    document_id: pair[1],
  }
}

// NOTE: get type
const types = [
  'discussion',
  'comment',
  'video',
  'audio',
  'attachment',
  'paragraph',
]
const getType = (types) => types[randomIndex(0, types.length)()]

// NOTE: get user_id and full_name
const userIdAndFullName = {
  1: 'Thang Pham',
  2: 'Rory Davies',
  3: 'Georgie Northcoat',
  4: 'Rodney Tamblyn',
  5: 'Gloria Gomez',
  6: 'Claudia Ott',
  7: 'Veronica Liesaputra',
  8: 'Tom Doe',
  9: 'Jane Doe',
  10: 'Neil Patrick Harris',
}

const getUserIdAndFullName = (userIdAndFullName) => {
  let randomKey = randomIndex(1, 11)()
  let randomEntry = Object.entries(userIdAndFullName)[randomKey - 1]
  return {
    author_id: randomEntry[0],
    author_full_name: randomEntry[1],
  }
}

// NOTE: get size
const getSize = () => randomIndex(50, 500)()

// NOTE: get source
const getSource = () => (randomIndex(0, 2)() === 0 ? 'URL' : 'Missing')

// NOTE: get time added
const getTimeAdded = () => {
  const randomDate = randomIndex(1, 32)()
  const randomMonth = randomIndex(1, 5)()
  return `2020-${randomMonth}-${randomDate}`
}

const makeOneComponentData = () => {
  return {
    ...getCourseAndDocId(courseAndDocId),
    type: getType(types),
    ...getUserIdAndFullName(userIdAndFullName),
    size: getSize(),
    source: getSource(),
    time_added: getTimeAdded(),
  }
}

const makeManyComponentData = (num) => {
  let res = []
  while (res.length < num) {
    res.push(makeOneComponentData())
  }
  return res
}

module.exports = {
  makeManyComponentData,
}
