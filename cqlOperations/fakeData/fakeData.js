const randomIndex = require('./utils/randomIndex')
const makeMany = require('./utils/makeMany')
const Uuid = require('cassandra-driver').types.Uuid

//ANCHOR: component table data

// NOTE: get paper_id and doc_id (together since they're the primary key)
const getCoursePaperAndDocId = () => {
  const coursePaperAndDocId = [
    ['courseA', 'paperA1', 'docA11'],
    ['courseA', 'paperA1', 'docA12'],
    ['courseA', 'paperA1', 'docA13'],
    ['courseA', 'paperA2', 'docA21'],
    ['courseA', 'paperA2', 'docA22'],
    ['courseA', 'paperA2', 'docA23'],
    ['courseB', 'paperB1', 'docB11'],
    ['courseB', 'paperB1', 'docB12'],
    ['courseB', 'paperB1', 'docB13'],
    ['courseB', 'paperB2', 'docB21'],
    ['courseB', 'paperB2', 'docB22'],
    ['courseB', 'paperB2', 'docB23'],
    ['courseC', 'paperC1', 'docC21'],
    ['courseC', 'paperC1', 'docC22'],
    ['courseC', 'paperC1', 'docC23'],
    ['courseC', 'paperC2', 'docC21'],
    ['courseC', 'paperC2', 'docC22'],
    ['courseC', 'paperC2', 'docC23'],
  ]
  const index = randomIndex(0, coursePaperAndDocId.length)()
  const info = coursePaperAndDocId[index]
  return {
    course_id: info[0],
    paper_id: info[1],
    document_id: info[2],
  }
}

const getTypeAndSource = () => {
  const typeAndSource = [
    ['comment', 'own'],
    ['discussion', 'own'],
    ['paragraph', 'own'],
    ['attachment', 'URL'],
    ['attachment', 'missing'],
    ['image', 'URL'],
    ['image', 'missing'],
    ['video', 'URL'],
    ['audio', 'URL'],
    ['video', 'missing'],
    ['audio', 'missing'],
  ]
  const entry = typeAndSource[randomIndex(0, typeAndSource.length)()]
  return { type: entry[0], source: entry[1] }
}

const getUserIdAndFullName = () => {
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
  let randomKey = randomIndex(1, 11)()
  let randomEntry = Object.entries(userIdAndFullName)[randomKey - 1]
  return {
    author_id: randomEntry[0],
    author_full_name: randomEntry[1],
  }
}

const getSize = () => {
  return { size: randomIndex(50, 500)() }
}

const getTimeAdded = () => {
  const randomDate = randomIndex(1, 32)()
  const randomMonth = randomIndex(1, 5)()
  return { time_added: `2020-${randomMonth}-${randomDate}` }
}

const makeOneComponentRow = () => {
  return {
    ...getCoursePaperAndDocId(),
    ...getTypeAndSource(),
    ...getUserIdAndFullName(),
    ...getSize(),
    ...getTimeAdded(),
  }
}

const makeManyComponentRows = makeMany(makeOneComponentRow)

//ANCHOR: user_by_activity table data

const makeOneUserByActivityRow = () => {
  const userIdAndStatus = [
    {
      user_id: 1,
      status: 'student',
      new_user: false,
    },
    {
      user_id: 2,
      status: 'student',
      new_user: false,
    },
    {
      user_id: 3,
      status: 'student',
      new_user: false,
    },
    {
      user_id: 4,
      status: 'student',
      new_user: false,
    },
    {
      user_id: 5,
      status: 'student',
      new_user: false,
    },
    {
      user_id: 6,
      status: 'student',
      new_user: false,
    },
    {
      user_id: 7,
      status: 'alumnus',
      new_user: false,
    },
    {
      user_id: 8,
      status: 'alumnus',
      new_user: false,
    },
    {
      user_id: 9,
      status: 'teacher',
      new_user: true,
    },
    {
      user_id: 10,
      status: 'student',
      new_user: true,
    },
  ]
  const month = randomIndex(1, 5)()
  const week = randomIndex(1, 5)()
  let day
  if (week === 1) {
    day = randomIndex(1, 8)()
  } else if (week === 2) {
    day = randomIndex(8, 15)()
  } else if (week === 3) {
    day = randomIndex(15, 22)()
  } else if (week === 4) {
    day = randomIndex(22, 29)()
  }
  const login_time = randomIndex(5, 15)()
  const logout_time = randomIndex(1, 4)() + login_time
  const userInfo = userIdAndStatus[randomIndex(0, userIdAndStatus.length)()]
  return {
    month,
    week,
    day,
    ...userInfo,
    //need to add +0000 or Cassandra will convert it to GMT time
    login_time: `2020-${month}-${day} ${login_time}:00:00+0000`,
    logout_time: `2020-${month}-${day} ${logout_time}:00:00+0000`,
  }
}

//get new user (true or false) and status (in one function to prevent illogical results, i.e. an alumnus being a new user)
const makeManyUserByActivityRows = makeMany(makeOneUserByActivityRow)

// ANCHOR: component_by_date data
const makeOneComponentByDateRow = () => {
  const courseAndPaperIdArr = [
    {
      course_id: 'courseA',
      paper_id: 'paperA1',
    },
    {
      course_id: 'courseA',
      paper_id: 'paperA2',
    },
    {
      course_id: 'courseB',
      paper_id: 'paperB1',
    },
    {
      course_id: 'courseB',
      paper_id: 'paperB2',
    },
    {
      course_id: 'courseC',
      paper_id: 'paperC1',
    },
    {
      course_id: 'courseC',
      paper_id: 'paperC2',
    },
  ]
  const courseAndPaperId =
    courseAndPaperIdArr[randomIndex(0, courseAndPaperIdArr.length)()]
  const date = `2020-${randomIndex(1, 5)()}-${randomIndex(1, 29)()}`
  const type = [
    'discussion',
    'comment',
    'video',
    'audio',
    'attachment',
    'image',
    'paragraph',
  ][randomIndex(0, 7)()]
  const componentId = `${randomIndex(1, 24)()}:${randomIndex(1, 60)()}:00`
  return {
    ...courseAndPaperId,
    date,
    type,
    component_id: componentId,
  }
}
const makeManyComponentByDateRows = makeMany(makeOneComponentByDateRow)

// ANCHOR: component_by_date data

const makeOneInstitutionByUserRow = () => {
  const institution_id = ['uniA', 'uniB', 'uniC'][randomIndex(0, 3)()]
  const user_id = Uuid.random()
  const status = ['teacher', 'student', 'alumnus'][randomIndex(0, 3)()]
  return {
    institution_id,
    user_id,
    status,
  }
}

const makeManyInstitutionByUserRows = makeMany(makeOneInstitutionByUserRow)

module.exports = {
  makeManyComponentRows,
  makeManyUserByActivityRows,
  makeManyComponentByDateRows,
  makeManyInstitutionByUserRows,
}
