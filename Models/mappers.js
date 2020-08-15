const client = require("../client")
const makeMapper = require("./mapperMaker")

const userByActivityMapper = makeMapper(
  client,
  "UserByActivity",
  "user_by_activity"
)

const componentByDateMapper = makeMapper(
  client,
  "ComponentByDate",
  "component_by_date"
)

const componentMapper = makeMapper(client, "Component", "component")

const markedComponentByUserIdMapper = makeMapper(
  client,
  "MarkedComponentByUserId",
  "marked_component_by_user_id"
)

const fileUsageByMonthMapper = makeMapper(
  client,
  "FileUsageByMonthMapper",
  "file_usage_by_month"
)

module.exports = {
  userByActivityMapper,
  componentByDateMapper,
  fileUsageByMonthMapper,
  componentMapper,
  markedComponentByUserIdMapper,
}
