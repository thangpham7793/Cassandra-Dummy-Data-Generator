// const configOptions = (
//   keyspace,
//   contactPoints = ['127.0.0.1:9042'],
//   localDataCenter = 'datacenter1'
// ) => {
//   return {
//     contactPoints,
//     localDataCenter,
//     keyspace: keyspace,
//   }
// }

const configOptions = {
  cloud: {
    secureConnectBundle: `${__dirname}/secure-connect-cassandra-test.zip`,
  },
  credentials: { username: 'ob3_test', password: 'oceanbrowser' },
  keyspace: 'ob3',
}

module.exports = configOptions
