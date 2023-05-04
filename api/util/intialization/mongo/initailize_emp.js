const empModel = require("../../../models/mongo/emp/emp");

function initialize() {
  return new Promise((resolve, reject) => {
    const data = require("../../../../emp.json");
    // console.log("Vikas");
    // console.log({ data });

    // Todo : CHECKS WHETHER THE COLLECTION IS EMPTY , IF YES THEN INITIALIZE IT
    empModel
      .count()
      .then((count) => {
        if (count === 0) {
          console.log("### INITIALIZE EMP RECORDS ###");
          empModel
            .insertMany(data)
            .then((result) => {
              // console.log(result);
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          console.log("### ALREADY INITIALIZED EMP DATA! ###");
          resolve(count);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = { initialize };
