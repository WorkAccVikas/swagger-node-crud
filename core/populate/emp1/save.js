const emp1Model = require("../../../api/models/populate/emp1/emp1");

class Save {
  saveOneEmployee(params) {
    return new Promise((resolve, reject) => {
      emp1Model
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
  EmployeeSaveClass: Save,
};

//save data one by one

//  [
//   {
//     "eid": 1,
//     "ename": "Sachin",
//     "salary": 100
//   },
//   {
//     "eid": 2,
//     "ename": "Nita",
//     "salary": 200
//   },
//   {
//     "eid": 3,
//     "ename": "Josh",
//     "salary": 300
//   },
//   {
//     "eid": 4,
//     "ename": "Ankit",
//     "salary": 400
//   },
//   {
//     "eid": 5,
//     "ename": "Tommy",
//     "salary": 500
//   }
// ]
