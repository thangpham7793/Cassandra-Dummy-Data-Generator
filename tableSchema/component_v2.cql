CREATE TABLE ob3.component (
  month INT,
  course_id TEXT,
  paper_id TEXT,
  document_id TEXT,
  author_id TEXT,
  author_full_name TEXT,
  type TEXT,
  source TEXT,
  size INT,
  time_added DATE,
  component_id UUID
  PRIMARY KEY (
    (course_id, paper_id), 
    document_id, type, author_id, time_added
  )
) WITH CLUSTERING ORDER BY (
  document_id DESC, 
  type ASC, 
  author_id ASC, 
  time_added DESC);
