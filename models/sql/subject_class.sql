CREATE TABLE subject_class (
  id SERIAL PRIMARY KEY,
  question  varchar(512) default '',
  answer  varchar(512) default ''
);

create index subject_question on subject_class (question);
