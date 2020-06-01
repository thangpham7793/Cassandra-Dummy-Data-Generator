const cassandra = require('cassandra-driver')
const configOptions = require('./config')

const options = configOptions('ob3')

const client = new cassandra.Client(options)

module.exports = client
