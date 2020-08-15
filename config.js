require("dotenv").config();

const configOptions = {
  cloud: {
    secureConnectBundle: `${__dirname}/secure-connect-cassandra-test.zip`,
  },
  credentials: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  keyspace: process.env.DB_KEYSPACE,
};

module.exports = configOptions;
