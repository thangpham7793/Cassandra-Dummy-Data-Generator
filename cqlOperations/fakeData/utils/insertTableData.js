let count = 1

const insertTableData = (makeRowFunction, modelMapper) => async (
  numOfEntries
) => {
  const promises = makeRowFunction(numOfEntries).map(async (dataObject) => {
    modelMapper
      .insert(dataObject)
      .then(() => {
        console.log(count++)
        console.log(`Successfully insert ${Object.values(dataObject)}`)
      })
      .catch((err) => console.error(err))
  })

  await Promise.all(promises)
    .then(() => console.log('Successfully insert all entries!'))
    .catch((error) => console.error(error))
}

module.exports = insertTableData
