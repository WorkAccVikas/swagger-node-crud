const studentModel = require("../../../models/mongo/student/student");

function initialize() {
  return new Promise((resolve, reject) => {
    const data = [
      {
        sid: 1,
        sname: "AA",
        age: 10,
        city: "GOA",
        issuedCourses: ["6453dbc4b9fd0b40f8d06229", "6453dbc4b9fd0b40f8d0622a"],
        // issuedCourses: [1, 2],
      },
      {
        sid: 2,
        sname: "BB",
        age: 20,
        city: "PUNE",
        issuedCourses: ["6453dbc4b9fd0b40f8d0622c"],
        // issuedCourses: [3],
      },
    ];

    // Todo : CHECKS WHETHER THE COLLECTION IS EMPTY , IF YES THEN INITIALIZE IT
    studentModel
      .count()
      .then((count) => {
        if (count === 0) {
          console.log("### INITIALIZE STUDENTS RECORDS ###");
          studentModel
            .insertMany(data)
            .then((result) => {
              // console.log(result);
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          console.log("### ALREADY INITIALIZED STUDENTS! ###");
          resolve(count);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = { initialize };
