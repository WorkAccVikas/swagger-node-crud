const emp1Model = require("../../../api/models/populate/emp1/emp1");

class Find {
  findAllEmployees(params) {
    return new Promise((resolve, reject) => {
      emp1Model
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
  EmployeeFindClass: Find,
};
