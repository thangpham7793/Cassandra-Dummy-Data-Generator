CREATE TABLE ob3.component_count_by_user_document_id (
  user_id UUID,
  document_id TIMEUUID,
  course_id UUID,
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
    course_id,
    document_id
  )
)
WITH CLUSTERING ORDER BY (course_id ASC, document_id DESC);



