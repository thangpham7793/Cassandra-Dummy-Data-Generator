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


