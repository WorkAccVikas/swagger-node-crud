const courseModel = require("../../../models/mongo/course/course");

function initialize() {
  return new Promise((resolve, reject) => {
    const data = [
      {
        cid: 1,
        cname: "Course ",
        price: 1000,
        duration: "100 min",
      },
      {
        cid: 2,
        cname: "Course 2",
        price: 2000,
        duration: "200 min",
      },
      {
        cid: 3,
        cname: "Course 3",
        price: 3000,
        duration: "300 min",
      },
      {
        cid: 4,
        cname: "Course 4",
        price: 4000,
        duration: "400 min",
      },
      {
        cid: 5,
        cname: "Course 4",
        price: 4000,
        duration: "400 min",
      },
    ];

    // Todo : CHECKS WHETHER THE COLLECTION IS EMPTY , IF YES THEN INITIALIZE IT
    courseModel
      .count()
      .then((count) => {
        if (count === 0) {
          console.log("### INITIALIZE COURSE RECORDS ###");
          courseModel
            .insertMany(data)
            .then((result) => {
              // console.log(result);
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          console.log("### ALREADY INITIALIZED COURSE DATA! ###");
          resolve(count);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = { initialize };
