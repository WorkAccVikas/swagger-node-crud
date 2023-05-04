const customer1Model = require("../../../api/models/populate/customer1/customer1");

class Update {
  updateOneCustomer(customer_id, params) {
    return new Promise((resolve, reject) => {
      // console.log.*$
      // console.log.*$
      let criteria = {};
      let valueUpdated = {};

      // console.log.*$

      customer_id && (criteria._id = customer_id);

      // console.log.*$

      let { course_id, emp_id } = params;

      // console.log.*$
      // console.log.*$

      emp_id && emp_id.reverse();

      if (emp_id && course_id) {
        valueUpdated = {
          $push: {
            "empDetails.listOfEmp": { $each: emp_id, $position: 0 },
            issuedCourses: course_id,
          },
        };
      } else if (emp_id) {
        valueUpdated = {
          $push: {
            "empDetails.listOfEmp": { $each: emp_id, $position: 0 },
          },
        };
      } else if (course_id) {
        valueUpdated = {
          $push: {
            issuedCourses: course_id,
          },
        };
      }
      // console.log.*$

      //   book_id && (valueUpdated.$push = { issuedBook: book_id });

      // console.log.*$

      customer1Model
        .findOneAndUpdate(criteria, valueUpdated, { new: true })
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
  CustomerUpdateClass: Update,
};
