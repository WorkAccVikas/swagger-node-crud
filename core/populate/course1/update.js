const course1Model = require("../../../api/models/populate/course1/course1");

class Update {
  updateOneCourse(course_id, params) {
    return new Promise((resolve, reject) => {
      let criteria = {};
      let valueUpdated = {};

      // console.log.*$

      course_id && (criteria._id = course_id);

      // console.log.*$

      // console.log.*$

      let { book_id } = params;

      // console.log.*$

      book_id && (valueUpdated.$push = { issuedBook: book_id });

      // console.log.*$

      course1Model
        .findOneAndUpdate(criteria, valueUpdated, { new: true })
        .then((result) => {
          // console.log.*$
          resolve(result);
        })
        .catch((err) => {
          // console.log.*$
          reject(err);
        });
    });
  }
}

module.exports = {
  CourseUpdateClass: Update,
};
