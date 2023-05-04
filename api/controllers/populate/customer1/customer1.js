const {
  findAllCustomerService,
  saveCustomerService,
  updateCustomerService,
} = require("../../../../service/populate/customer1/customer1");

// find all course
function findAllCustomers(req, res) {
  // console.log("findAllCustomers Here");
  const parameter = req.swagger.params;
  const courseBody = parameter.CourseBody ? parameter.CourseBody.value : null;
  const params = { courseBody: courseBody };

  findAllCustomerService(params)
    .then((response) => {
      // console.log("Controller Called", params);
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE

      // console.log("****************Controller************", responseReceived);
      // console.log("****************Controller************", response.length);
      res.status(responseReceived ? 200 : 404);
      res.json({
        // status: responseReceived,
        // statusCode: responseReceived ? 200 : 404,
        message: responseReceived ? "Yes Data Found" : "Sorry Data Not Found",
        data: response,
        total: response.length,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        status: false,
        statusCode: 500,
        message: "Error here",
        data: err,
      });
    });
}

// save one course
function saveOneCustomer(req, res) {
  // console.log("saveOneCustomer Here");
  const parameter = req.swagger.params;
  const customerBody = parameter.CustomerBody
    ? parameter.CustomerBody.value
    : null;
  const params = { customerBody: customerBody };
  // console.log("In controller = ", params);

  saveCustomerService(params)
    .then((response) => {
      // console.log("Controller Called", params);
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE

      // console.log("****************Controller************", responseReceived);
      // console.log("****************Controller************", response.length);
      res.status(responseReceived ? 200 : 404);
      res.json({
        // status: responseReceived,
        // statusCode: responseReceived ? 200 : 404,
        message: responseReceived
          ? "Data Inserted Successfully"
          : "Sorry, some problem encountered",
        data: response,
        total: response.length,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        status: false,
        statusCode: 500,
        message: "Error here",
        data: err,
      });
    });
}

// save one course
function updateOneCustomer(req, res) {
  // console.log("updateOneCustomer Here");
  const parameter = req.swagger.params;
  const customerBody = parameter.CustomerBody
    ? parameter.CustomerBody.value
    : null;
  const params = {
    customer_id: parameter.customer_id ? parameter.customer_id.value : null,
    customerBody: customerBody,
  };
  // console.log(params);

  updateCustomerService(params)
    .then((response) => {
      // console.log("Controller Called", params);
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE

      // console.log("****************Controller************", responseReceived);
      // console.log("****************Controller************", response.length);
      res.status(responseReceived ? 200 : 404);
      res.json({
        // status: responseReceived,
        // statusCode: responseReceived ? 200 : 404,
        message: responseReceived
          ? "Data Updated Successfully"
          : "Sorry, some problem encountered",
        data: response,
        total: response.length,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        status: false,
        statusCode: 500,
        message: "Error here",
        data: err,
      });
    });
}

module.exports = {
  findAllCustomers,
  saveOneCustomer,
  updateOneCustomer,
};
