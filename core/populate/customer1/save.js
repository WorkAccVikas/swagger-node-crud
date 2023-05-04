const customer1Model = require("../../../api/models/populate/customer1/customer1");

class Save {
  saveOneCustomer(params) {
    return new Promise((resolve, reject) => {
      // console.log.*$
      customer1Model
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
  CustomerSaveClass: Save,
};
