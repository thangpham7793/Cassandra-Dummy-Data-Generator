const mappers = require('../Models/mappers')
const fakeData = require('./fakeData/fakeData')
const insertTableData = require('./fakeData/utils/insertTableData')

const insertComponentData = insertTableData(
  fakeData.makeManyComponentRows,
  mappers.componentMapper
)

const insertUserByActivityData = insertTableData(
  fakeData.makeManyUserByActivityRows,
  mappers.userByActivityMapper
)

const insertComponentByDateData = insertTableData(
  fakeData.makeManyComponentByDateRows,
  mappers.componentByDateMapper
)

const insertInstitutionByUserData = insertTableData(
  fakeData.makeManyInstitutionByUserRows,
  mappers.institutionByUserMapper
)

module.exports = {
  insertComponentData,
  insertUserByActivityData,
  insertComponentByDateData,
  insertInstitutionByUserData,
}
