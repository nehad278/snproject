"use strict";

var schema = require('./schema');

var Students = schema.define('student_profile', {
    contact: {type: schema.String, limit: 20},
    name: {type: schema.String, default: '', limit:50},
    school: {type: schema.String, default: '', limit:100},
    is_active: {type: schema.Boolean, default:false},
    is_online: {type: schema.Boolean, default: false},
    active_at: {type: schema.Date},
    last_login: {type: schema.Date},
    created_at: {type: schema.Date, default: Date.now},
    modified_at: {type: schema.Date, default: Date.now}
});

module.exports = Students;

/*---------------------------------------------*/
if (require.main === module) {
  (function () {
      Students.all({}, function (err, res) {
      console.log(err || res);
    });
  })();
}
