const configOptions = (
  keyspace,
  contactPoints = ['127.0.0.1:9042'],
  localDataCenter = 'datacenter1'
) => {
  return {
    contactPoints,
    localDataCenter,
    keyspace: keyspace,
  }
}

module.exports = configOptions
