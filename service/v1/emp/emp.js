const empfindclass = require("../../../core/v1/emp/find");

const { findAllEmps } = new empfindclass.EmpFindClass();

function findAllEmpsService(params) {
  return new Promise((resolve, reject) => {
    findAllEmps(params)
      .then((result) => {
        // console.log.*$
        // console.log.*$
        let resultObj = {
          message: result.length !== 0 ? "Data Found" : "Data Not Found",
          data: result,
        };
        resolve(resultObj);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  findAllEmpsService,
};
