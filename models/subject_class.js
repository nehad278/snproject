"use strict";

var schema = require('./schema');

var SubjectClass = schema.define('subject_class', {
    question: {type: schema.String, limit:512},
    answer: {type: schema.String, limit:512}
});

module.exports = SubjectClass;

/*---------------------------------------------*/
if (require.main === module) {
  (function () {
      SubjectClass.all({}, function (err, res) {
      console.log(err || res);
    });
  })();
}
