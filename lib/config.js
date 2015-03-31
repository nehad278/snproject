"use strict";

var config = {
   port: 8082,
   environ: 'dev',
   pg_conn_string: "postgres://nehad:12345@localhost/SNdb",
   pg_read_conn_string: "postgres://@nehad:12345@localhost/SNdb",
   db_option: {
      driver    : 'postgres',
      host      : 'localhost',
      port      : '5432',
      username  : 'nehad',
      password  : '12345',
      database  : 'SNdb',
      pool      : false
   },
   mongo_db_option: {
      driver    : 'mongodb',
      host      : 'localhost',
      port      : '27017',
      username  : '',
      password  : '',
      database  : 'snguide',
      pool      : false
   },
   redis: {
     host   : 'localhost',
     port   : '6379'
   },
   solr_option: {
     host: 'localhost',
     path: '/solr/collection1'
   },

   kue_config : {
     prefix: 'jobs_q_',
     disableSearch: true,
     redis: {
       port: 6379,
       host: 'localhost',
       auth: '',
       db: 3
     }
   }
 };

module.exports = config;
