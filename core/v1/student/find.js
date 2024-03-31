const studentModel = require("../../../api/models/mongo/student/student");

class Find {
  findAllStudents() {
    return new Promise((resolve, reject) => {
      // Todo : here, model is optional
      let populateObj = {
        path: "issuedCourses",
        model: "Course",
        select: "-_id cid cname",
      };
      studentModel
        .find({})
        .lean()
        // .populate("issuedCourses", "-_id cid cname")
        // .populate("issuedCourses")
        .populate(populateObj)
        .then((result) => {
          // console.log.*$

          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = {
  StudentFindClass: Find,
};
