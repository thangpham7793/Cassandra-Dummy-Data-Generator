const fs = require('fs')
const client = require('../client')

const path =
  'C:/Users/amaterrapper/Desktop/Academic Stuff/SHIFT/Comp371/mockOb3_JS/cqlTableSchema/test.cql'

const readQueryFile = (path) => {
  const query = fs.readFileSync(path, 'utf8', (err, res) => {
    if (err) console.log(err)
  })
  //console.log(query)
  return query
}

const createTable = (path) => {
  const createTableQuery = readQueryFile(path)
  client
    .execute(createTableQuery)
    .then(() => {
      console.log(`Successfully create table `)
      client.shutdown()
    })
    .catch((err) => {
      console.log(err)
      client.shutdown()
    })
}

module.exports = createTable
