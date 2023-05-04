const empfindclass = require("../../../core/populate/emp1/find");
const empsaveclass = require("../../../core/populate/emp1/save");

const { findAllEmployees } = new empfindclass.EmployeeFindClass();
const { saveOneEmployee } = new empsaveclass.EmployeeSaveClass();

function findAllEmployeeService(params) {
  return new Promise((resolve, reject) => {
    findAllEmployees(params)
      .then((result) => {
        // console.log.*$
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function saveEmployeeService(params) {
  return new Promise((resolve, reject) => {
    const { empBody } = params;
    saveOneEmployee(empBody)
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
  findAllEmployeeService,
  saveEmployeeService,
};
