const {
  findAllEmployeeService,
  saveEmployeeService,
} = require("../../../../service/populate/emp1/emp1");

// find all emp
function findAllEmployee(req, res) {
  // console.log.*$
  const parameter = req.swagger.params;
  const empBody = parameter.EmpBody ? parameter.EmpBody.value : null;
  const params = { empBody: empBody };

  findAllEmployeeService(params)
    .then((response) => {
      // console.log.*$
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE

      // console.log.*$
      // console.log.*$
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

// save one emp
function saveOneEmployee(req, res) {
  // console.log.*$
  const parameter = req.swagger.params;
  const empBody = parameter.EmpBody ? parameter.EmpBody.value : null;
  const params = { empBody: empBody };

  saveEmployeeService(params)
    .then((response) => {
      // console.log.*$
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE

      // console.log.*$
      // console.log.*$
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

module.exports = {
  findAllEmployee,
  saveOneEmployee,
};
