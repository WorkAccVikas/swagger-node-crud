const studentfindclass = require("../../../core/v1/student/find");

const { findAllStudents } = new studentfindclass.StudentFindClass();

function findAllStudentService() {
  return new Promise((resolve, reject) => {
    findAllStudents()
      .then((result) => {
        // console.log.*$

        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  findAllStudentService,
};
