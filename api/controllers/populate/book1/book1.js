const {
  findAllBookService,
  saveBookService,
} = require("../../../../service/populate/book1/book1");

// find all books
function findAllBooks(req, res) {
  // console.log("findAllBooks Here");
  const parameter = req.swagger.params;
  const bookBody = parameter.BookBody ? parameter.BookBody.value : null;
  const params = { bookBody: bookBody };

  findAllBookService(params)
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

// save one emp
function saveOneBook(req, res) {
  // console.log("saveOneBook Here");
  const parameter = req.swagger.params;
  const bookBody = parameter.BookBody ? parameter.BookBody.value : null;
  const params = { bookBody: bookBody };

  saveBookService(params)
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

module.exports = {
  findAllBooks,
  saveOneBook,
};
