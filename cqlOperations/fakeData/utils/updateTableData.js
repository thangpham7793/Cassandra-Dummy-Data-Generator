let count = 1
// NOTE can apply multiple updates using batch later
const updateTableData = (makeUpdateFunction, modelMapper) => async (
  numOfUpdates
) => {
  const promises = makeUpdateFunction(numOfUpdates).map(async (dataObject) => {
    modelMapper
      .update(dataObject)
      .then(() => {
        console.log(count++)
        console.log(`Successfully update with ${Object.values(dataObject)}`)
      })
      .catch((err) => console.error(err))
  })

  await Promise.all(promises)
    .then(() => console.log('Successfully Execute All Updates!'))
    .catch((error) => console.error(error))
}

module.exports = updateTableData
