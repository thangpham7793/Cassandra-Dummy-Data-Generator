CREATE TABLE ob3.user_by_activity (
  month INT,
  week INT,
  day INT,
  login_time TIMESTAMP,
  logout_time TIMESTAMP,
  user_id INT,
  status TEXT,
  new_user BOOLEAN,
  PRIMARY KEY (
    (month),
    week,
    day,
    user_id,
    login_time,
    logout_time
  )
) WITH CLUSTERING ORDER BY (week ASC, day DESC, user_id ASC, login_time DESC, logout_time DESC)
