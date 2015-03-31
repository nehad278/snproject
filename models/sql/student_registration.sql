CREATE TABLE student_registration (
  id SERIAL PRIMARY KEY,
  contact varchar(20) UNIQUE,
  code  varchar(10) not null,
  is_verified boolean DEFAULT false,
  created_at   timestamp DEFAULT current_timestamp,
  modified_at   timestamp DEFAULT current_timestamp
);


-----------We will fix the country code as 91 in our coding