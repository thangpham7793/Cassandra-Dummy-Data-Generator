CREATE TABLE ob3.institution_by_user (
  institution_id TEXT,
  user_id UUID,
  status TEXT,
  PRIMARY KEY((institution_id), status, user_id))