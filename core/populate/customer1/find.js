const customer1Model = require("../../../api/models/populate/customer1/customer1");

class Find {
  findAllCustomers(params) {
    return new Promise((resolve, reject) => {
      customer1Model
        .find({})
        .populate({ path: "empDetails.listOfEmp", model: "Emp1" })
        .populate({
          path: "issuedCourses",
          model: "Course1",
          populate: {
            path: "issuedBook",
            model: "Book1",
          },
        })
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
  CustomersFindClass: Find,
};
