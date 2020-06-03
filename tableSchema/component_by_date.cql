CREATE TABLE ob3.component_by_date ( 
  course_id TEXT,
  paper_id TEXT,
  date DATE,
  component_id TIME,
  type TEXT,
  PRIMARY KEY (
    (course_id),
    paper_id,
    date,
    type,
    component_id
  )
) WITH CLUSTERING ORDER BY (paper_id ASC, date DESC, type ASC, component_id DESC)
