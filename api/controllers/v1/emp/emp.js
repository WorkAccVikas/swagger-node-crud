const { findAllEmpsService } = require("../../../../service/v1/emp/emp");

// find all user and find one user
function emp(req, res) {
  // console.log.*$
  const parameter = req.swagger.params;
  //   // console.log.*$
  // console.log.*$
  const params = req.query;

  findAllEmpsService(params)
    .then((response) => {
      // console.log.*$
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response.message === "Data Found" ? true : false; // CONDITION FOR ARRAY RESPONSE

      // console.log.*$
      // console.log.*$
      res.status(responseReceived ? 200 : 404);
      res.json({
        // status: responseReceived,
        // statusCode: responseReceived ? 200 : 404,
        message: responseReceived ? "Yes Data Found" : "Sorry Data Not Found",
        data: response.data,
        total: response.data.length,
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
  emp,
};
