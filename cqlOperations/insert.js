const mappers = require('../Models/mappers')
const fakeData = require('./fakeData/fakeData')
const client = require('../client')

let count = 0

const insertComponentData = async (numOfEntries) => {
  // make an array of promised inserts
  const promises = fakeData
    .makeManyComponentData(numOfEntries)
    .map(async (dataObject) => {
      mappers.componentMapper
        .insert(dataObject)
        .then(() => {
          //console.log(`Successfully insert ${Object.values(dataObject)}`)
          console.log(count++)
        })
        .catch((err) => console.error(err))
    })
  // NOTE: don't know why this promise resolves before each individual one
  Promise.all(promises)
    .then(() => console.log('Successfully insert all entries!'))
    .catch((error) => console.error(error))
}

module.exports = {
  insertComponentData,
}
