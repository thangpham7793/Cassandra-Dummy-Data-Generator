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


