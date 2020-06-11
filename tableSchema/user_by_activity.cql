CREATE TABLE ob3.user_by_activity (
  month INT,
  association TEXT,
  login_time TIMESTAMP,
  logout_time TIMESTAMP,
  user_id INT,
  status TEXT,
  new_user BOOLEAN,
  PRIMARY KEY (
    (month),
    login_time,
    association,
    user_id
  )
) WITH CLUSTERING ORDER BY (
    login_time DESC,
    association ASC,
    user_id ASC);
