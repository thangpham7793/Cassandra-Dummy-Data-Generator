let count = 1
// A higher order function that returns a curried customized function for inserting rows for each table.

const insertTableData = (makeRowFunction, modelMapper) => async (
  numOfEntries
) => {
  count = 1
  const promises = makeRowFunction(numOfEntries).map(async (dataObject) => {
    modelMapper
      .insert(dataObject)
      .then(() => {
        console.log(count++)
        console.log(`Successfully insert ${Object.values(dataObject)}`)
      })
      .catch((err) => console.error(err))
  })

  return Promise.all(promises)
    .then(() => {
      console.log("\nPlease wait until all operations are finished!\n")
    })
    .catch((error) => console.error(error))
}

module.exports = insertTableData
