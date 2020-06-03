CREATE TABLE ob3.user_by_email (
  email TEXT,
  user_id UUID,
  password TEXT,
  course LIST<uuid>,
  last_login LIST<timestamp>,
  folder LIST<timeuuid>,
  document LIST<timeuuid>,
  PRIMARY KEY (email)
);

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

CREATE TABLE ob3.course_by_user_id (
  user_id UUID,
  course_id UUID,
  course_code TEXT,
  instructor SET<text>,
  duration TUPLE<date, date>,
  folder LIST<timeuuid>,
  document LIST<timeuuid>,
  PRIMARY KEY (
    (user_id, course_id)
  )
);

CREATE TABLE ob3.component_count_by_user_id (
  user_id TEXT,
  document_id TIMEUUID,
  paper_id TEXT,
  link_count COUNTER,
  paragraph_count COUNTER,
  discussion_count COUNTER,
  video_count COUNTER,
  recording_count COUNTER,
  image_count COUNTER,
  comment_count COUNTER,
  attachment_count COUNTER,
  PRIMARY KEY (
    (user_id),
    document_id,
    paper_id
  )
)
WITH CLUSTERING ORDER BY (document_id DESC, paper_id ASC);



