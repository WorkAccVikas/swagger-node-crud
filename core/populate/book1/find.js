const book1Model = require("../../../api/models/populate/book1/book1");

class Find {
  findAllBooks(params) {
    return new Promise((resolve, reject) => {
      book1Model
        .find({})
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
  BookFindClass: Find,
};
