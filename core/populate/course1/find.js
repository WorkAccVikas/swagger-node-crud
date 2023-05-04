const course1Model = require("../../../api/models/populate/course1/course1");

class Find {
  findAllCourses(params) {
    return new Promise((resolve, reject) => {
      course1Model
        .find({})
        .lean()
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
  CourseFindClass: Find,
};
