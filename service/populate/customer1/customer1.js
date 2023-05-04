const customerfindclass = require("../../../core/populate/customer1/find");
const customersaveclass = require("../../../core/populate/customer1/save");
const customerupdateclass = require("../../../core/populate/customer1/update");

const { findAllCustomers } = new customerfindclass.CustomersFindClass();
const { saveOneCustomer } = new customersaveclass.CustomerSaveClass();
const { updateOneCustomer } = new customerupdateclass.CustomerUpdateClass();

function findAllCustomerService(params) {
  return new Promise((resolve, reject) => {
    findAllCustomers(params)
      .then((result) => {
        // console.log.*$
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function saveCustomerService(params) {
  return new Promise((resolve, reject) => {
    // console.log.*$
    const { customerBody } = params;
    saveOneCustomer(customerBody)
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

function updateCustomerService(params) {
  return new Promise((resolve, reject) => {
    // console.log.*$
    const { customer_id, customerBody } = params;
    // console.log.*$
    // console.log.*$
    updateOneCustomer(customer_id, customerBody)
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
  findAllCustomerService,
  saveCustomerService,
  updateCustomerService,
};
