CREATE TABLE ob3.folder_by_course_id (
  course_id UUID,
  folder_id TIMEUUID,
  name TEXT,
  author UUID,
  document LIST<timeuuid>,
  PRIMARY KEY (
    (course_id),
    folder_id)
);


