const client = require('./client')
const tables = require('./Models/mappers')

client.connect().then(() => console.log('Connected to Cloud!'))

const test = async (tables) => {
  const promises = await Object.keys(tables).map((key) =>
    tables[key].findAll().then((result) => {
      console.log(`Got ${Object.entries(result)}`)
      console.log(`-------------------------------------------`)
    })
  )
  Promise.all(promises)
    .then(() => {
      console.log('All tables seem to work!')
      client.shutdown()
    })
    .catch((err) => {
      console.error(err)
      client.shutdown()
    })
}

test(tables)

// tables.folderByCourseIdMapper
//   .findAll()
//   .then((result) => console.log(`Got ${Object.entries(result)}`))
//   .catch((err) => console.error(err))
