const cassandra = require('cassandra-driver')
const configOptions = require('./config')
const client = new cassandra.Client(configOptions)

module.exports = client
