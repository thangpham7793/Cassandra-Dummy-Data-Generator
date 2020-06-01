const client = require('../client')
const makeMapper = require('./mapperMaker')

const userByEmailMapper = makeMapper(client, 'UserByEmail', 'user_by_email')
const courseByUserIdMapper = makeMapper(
  client,
  'CourseByUserId',
  'course_by_user_id'
)
const folderByCourseIdMapper = makeMapper(
  client,
  'FolderByCourseId',
  'folder_by_course_id'
)

const componentCountByUserDocumentId = makeMapper(
  client,
  'ComponentCountByUserDocumentId',
  'component_count_by_user_document_id'
)

const componentMapper = makeMapper(client, 'Component', 'component')

module.exports = {
  userByEmailMapper,
  courseByUserIdMapper,
  folderByCourseIdMapper,
  componentCountByUserDocumentId,
  componentMapper,
}
