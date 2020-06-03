const createTable = require('./cqlOperations/createTable')
const insert = require('./cqlOperations/insert')

//insert.insertUserByActivityData(3)

//createTable('./tableSchema/user_by_activity.cql')

//createTable('./tableSchema/institution_by_user.cql')

//insert.insertInstitutionByUserData(190)
insert.insertComponentData(5)
