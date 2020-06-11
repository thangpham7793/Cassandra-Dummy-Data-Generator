const fakeData = require('./fakeData/fakeData')
const updateTableData = require('./fakeData/utils/updateTableData')
const mappers = require('../Models/mappers')

const updateMarkedComponentByUserIdData = updateTableData(
  fakeData.updateManyMarkedComponentByUserIdRows,
  mappers.markedComponentByUserIdMapper
)

module.exports = {
  updateMarkedComponentByUserIdData,
}
