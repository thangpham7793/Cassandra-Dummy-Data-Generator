const fs = require("fs")
const client = require("../client")

//read cql file from path
const readQueryFile = (path) => {
  try {
    const query = fs.readFileSync(path, "utf8", (err, res) => {
      if (err) console.log(err)
    })
    return query
  } catch (error) {
    console.error(error)
  }
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
