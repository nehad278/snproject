CREATE TABLE student_profile (
  id SERIAL PRIMARY KEY,
  contact varchar(20) not null UNIQUE,
  name  varchar(50) default '',
  school  varchar(100) default '',
  is_active boolean DEFAULT false,
  is_online boolean DEFAULT false,
  active_at   timestamp,
  last_login   timestamp,
  created_at   timestamp DEFAULT current_timestamp,
  modified_at   timestamp DEFAULT current_timestamp
);

create index user_active on student_profile (is_active);
create index user_name on student_profile (name);
