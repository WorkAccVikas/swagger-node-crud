const coursefindclass = require("../../../core/populate/course1/find");
const coursesaveclass = require("../../../core/populate/course1/save");
const courseupdateclass = require("../../../core/populate/course1/update");

const { findAllCourses } = new coursefindclass.CourseFindClass();
const { saveOneCourse } = new coursesaveclass.CourseSaveClass();
const { updateOneCourse } = new courseupdateclass.CourseUpdateClass();

function findAllCourseService(params) {
  return new Promise((resolve, reject) => {
    findAllCourses(params)
      .then((result) => {
        // console.log.*$
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function saveCourseService(params) {
  return new Promise((resolve, reject) => {
    const { courseBody } = params;
    saveOneCourse(courseBody)
      .then((result) => {
        // console.log.*$
        resolve(result);
      })
      .catch((err) => {
        // console.log.*$
        reject({ message: err.message });
      });
  });
}

function updateCourseService(params) {
  return new Promise((resolve, reject) => {
    // console.log.*$
    const { course_id, courseBody } = params;
    // console.log.*$
    updateOneCourse(course_id, courseBody)
      .then((result) => {
        // console.log.*$
        resolve(result);
      })
      .catch((err) => {
        // console.log.*$
        reject({ message: err.message });
      });
  });
}

module.exports = {
  findAllCourseService,
  saveCourseService,
  updateCourseService,
};
