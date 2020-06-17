const createTable = require('./cqlOperations/createTable')
const insert = require('./cqlOperations/insert')
const update = require('./cqlOperations/update')
const mappers = require('./Models/mappers')
const client = require('./client')

//insert.insertUserByActivityData(1000)
//insert.insertFileUsageByMonthData(1000)
//createTable('./tableSchema/user_by_activity.cql')

//createTable('./tableSchema/institution_by_user.cql')
//createTable('./tableSchema/component.cql')
//insert.insertInstitutionByUserData(190)
//insert.insertComponentData(495)

//NOTE: this doesn't really work since it just replaces the map with the new one.
//update.updateMarkedComponentByUserIdData(1)

//NOTE: where can you use ?, only with values?
// when removing elements from map, it needs to be an arr of keys, while when adding you need an object. Can't add multiple elements to a map it seems.

//NOTE: not worth the trouble of automating this stuff
const updateUsingSet = `UPDATE marked_component_by_user_id SET annotated = annotated + :componentIdAndURL WHERE user_id = :userId AND paper_id = :paperId AND doc_id = :docId;`
//NOTE: can make custom method for typical queries/updates
// mappers.markedComponentByUserIdMapper.addAnnotated = mappers.markedComponentByUserIdMapper.mapWithQuery(
//   updateUsingSet,
//   (params) => [
//     params.componentIdAndURL,
//     params.userId,
//     params.paperId,
//     params.docId,
//   ]
// )

// const params = {
//   componentIdAndURL: {
//     annotated5: 'URL',
//   },
//   userId: '1',
//   paperId: 'paperA',
//   docId: 'docA1',
// }

// mappers.markedComponentByUserIdMapper
//   .addAnnotated(params)
//   .then(() => console.log('Success!'))
//   .catch((err) => console.log(err))

// client
//   .execute(updateUsingSet, params, {
//     prepare: true,
//   })
//   .then(() => console.log('Success!'))
//   .catch((err) => console.log(err))

//insert.insertFileUsageByMonthData(495)
