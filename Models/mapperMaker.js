const cassandra = require("cassandra-driver");
const Mapper = cassandra.mapping.Mapper;
const UnderscoreCqlToCamelCaseMappings =
  cassandra.mapping.UnderscoreCqlToCamelCaseMappings;

// NOTE: this is just for ONE table
const setMappingOptions = (modelName, tableName) => {
  return {
    models: {
      [modelName]: {
        tables: [tableName],
        mappings: new UnderscoreCqlToCamelCaseMappings(),
      },
    },
  };
};

// make a mapper for one particular table

const makeMapper = (client, modelName, tableName) => {
  const mappingOptions = setMappingOptions(modelName, tableName);
  const mapper = new Mapper(client, mappingOptions);
  return mapper.forModel(modelName);
};

module.exports = makeMapper;
