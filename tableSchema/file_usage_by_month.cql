CREATE TABLE ob3.file_usage_by_month (
  month INT,
  school_id TEXT,
  course_id TEXT,
  paper_id TEXT,
  type TEXT,
  size INT,
  time_added DATE,
  component_id UUID,
  PRIMARY KEY(
    (month, school_id),
    course_id, 
    paper_id, 
    type,
    time_added, 
    component_id)
) WITH CLUSTERING ORDER BY (
  course_id ASC,
  paper_id ASC,
  type ASC, 
  time_added DESC,
  component_id DESC);
