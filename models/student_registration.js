"use strict";

var schema = require('./schema');

var Register = schema.define('student_registration', {
    contact: {type: schema.String, limit: 20},
    code: {type: schema.String, limit:10},
    is_verified: {type: schema.Boolean},
    created_at: {type: schema.Date, default: Date.now},
    modified_at: {type: schema.Date, default: Date.now}
});


module.exports = Register;

/*---------------------------------------------*/
if (require.main === module) {
  (function () {
    Register.all({}, function (err, res) {
      console.log(err || res);
    });
  })();
}
