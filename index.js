const createTable = require('./cqlOperations/createTable')
const insert = require('./cqlOperations/insert')

//createTable('./cqlTableSchema/component.cql')

// NOTE: missing some insertion at big number...UPSERTS happen since you're not using uuid/timeuuid/etc.

// TODO: create a material view??? to query users contribution

// TODO: needs a more user-oriented component table/ or have multiple materialized views from a basic table

insert.insertComponentData(500)
