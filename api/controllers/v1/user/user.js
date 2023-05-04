const {
  allUsersServices,
  addUsersServices,
  updateUsersServices,
  deleteUsersServices,
  updateMultipleUsersService,
  findUserAllService,
} = require("../../../../service/v1/user/user");

// find all user and find one user
function user(req, res) {
  const parameter = req.swagger.params;
  const params = {
    iid: parameter.iid ? parameter.iid.value : null,
  };

  allUsersServices(params)
    .then((response) => {
      // console.log.*$
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response === "Data not found" ? false : true; // CONDITION FOR ARRAY RESPONSE

      // console.log.*$
      // console.log.*$
      res.status(responseReceived ? 200 : 404);
      res.json({
        // status: responseReceived,
        // statusCode: responseReceived ? 200 : 404,
        message: responseReceived ? "Yes" : "No",
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

// add user
function addUser(req, res) {
  const parameter = req.swagger.params;
  const userBody = parameter.userBody ? parameter.userBody.value : null;
  const params = { userBody: userBody };
  addUsersServices(params)
    .then((response) => {
      // console.log.*$
      const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE

      // console.log.*$
      // console.log.*$
      res.status(responseReceived ? 200 : 404);
      res.json({
        message: responseReceived ? "Yes" : "No",
        data: response,
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

// update user
function updateUser(req, res) {
  const parameter = req.swagger.params;
  const userBody1 = parameter.userBody1 ? parameter.userBody1.value : null;

  const params = {
    userBody1: userBody1,
    iid: parameter.iid ? parameter.iid.value : null,
  };
  updateUsersServices(params)
    .then((response) => {
      // console.log.*$
      // console.log.*$
      const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE

      // console.log.*$
      // console.log.*$
      res.status(responseReceived ? 200 : 404);
      res.json({
        message: responseReceived
          ? "Data Updated Successfully"
          : "Data Not Found",
        data: response,
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

// delete user
function deleteUser(req, res) {
  const parameter = req.swagger.params;

  const params = {
    iid: parameter.iid ? parameter.iid.value : null,
  };
  deleteUsersServices(params)
    .then((response) => {
      // console.log.*$
      // console.log.*$
      const responseReceived = response.message === `Data Found` ? true : false; // CONDITION FOR ARRAY RESPONSE

      // console.log.*$
      // console.log.*$
      // console.log.*$
      res.status(responseReceived ? 200 : 404);
      res.json({
        message:
          params.iid === "0" && responseReceived
            ? `All Users (${response.data}) deleted successfully`
            : params.iid === "0" && !responseReceived
            ? `Database already empty`
            : responseReceived
            ? `Single User (${response.data}) deleted successfully`
            : `Record Not Found`,
        deletedCount: response.data,
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

// update many users
function updateMultipleUsers(req, res) {
  const parameter = req.swagger.params;
  const userBody1 = parameter.userBody1 ? parameter.userBody1.value : null;

  const params = {
    userBody1: userBody1,
    age: parameter.age ? parameter.age.value : null,
    salary: parameter.salary ? parameter.salary.value : null,
  };
  // console.log.*$
  // console.log.*$
  updateMultipleUsersService(params)
    .then((response) => {
      // // console.log.*$
      const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE

      // // console.log.*$
      // // console.log.*$
      res.status(responseReceived ? 200 : 404);
      res.json({
        message: responseReceived
          ? "Record Updated Successfully"
          : "No Record Found",
        data: response,
        updatedCount: response.length,
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

function userFind(req, res) {
  const parameter = req.swagger.params;
  const params = {
    query: req.query,
  };

  findUserAllService(params)
    .then((response) => {
      // console.log.*$
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response === "Data not found" ? false : true; // CONDITION FOR ARRAY RESPONSE

      // console.log.*$
      // // console.log.*$
      res.status(responseReceived ? 200 : 404);
      res.json({
        // status: responseReceived,
        // statusCode: responseReceived ? 200 : 404,
        message: responseReceived ? "Yes" : "No",
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
  user,
  addUser,
  updateUser,
  deleteUser,
  updateMultipleUsers,
  userFind,
};
