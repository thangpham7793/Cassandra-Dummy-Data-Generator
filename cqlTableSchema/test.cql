create table test (
  user_id TEXT,
  course_id TEXT,
  doc_id INT,
  discussion_count COUNTER,
  comment_count COUNTER,
  attachment_count COUNTER,
  PRIMARY KEY (
    (user_id),
    course_id,
    doc_id
)) WITH CLUSTERING ORDER BY (course_id ASC, doc_id DESC);