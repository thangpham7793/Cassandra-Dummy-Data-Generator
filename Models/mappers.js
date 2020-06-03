const client = require('../client')
const makeMapper = require('./mapperMaker')

const userByActivityMapper = makeMapper(
  client,
  'UserByActivity',
  'user_by_activity'
)

const componentByDateMapper = makeMapper(
  client,
  'ComponentByDate',
  'component_by_date'
)

const institutionByUserMapper = makeMapper(
  client,
  'InstitutionByUser',
  'institution_by_user'
)

const componentMapper = makeMapper(client, 'Component', 'component')

module.exports = {
  userByActivityMapper,
  componentByDateMapper,
  institutionByUserMapper,
  componentMapper,
}
