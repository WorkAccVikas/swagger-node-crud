const course1Model = require("../../../api/models/populate/course1/course1");

class Save {
  saveOneCourse(params) {
    return new Promise((resolve, reject) => {
      course1Model
        .insertMany(params)
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
  CourseSaveClass: Save,
};

// save data one by one

// [
//   {
//     course_id: 1,
//     course_name: "Course 1",
//     fee: 100,
//   },
//   {
//     course_id: 2,
//     course_name: "Course 2",
//     fee: 200,
//   },
//   {
//     course_id: 3,
//     course_name: "Course 3",
//     fee: 300,
//   },
// ];
