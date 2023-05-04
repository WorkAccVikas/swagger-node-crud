const bookfindclass = require("../../../core/populate/book1/find");
const empsaveclass = require("../../../core/populate/book1/save");

const { findAllBooks } = new bookfindclass.BookFindClass();
const { saveOneBook } = new empsaveclass.BookSaveClass();

function findAllBookService(params) {
  return new Promise((resolve, reject) => {
    findAllBooks(params)
      .then((result) => {
        // console.log.*$
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function saveBookService(params) {
  return new Promise((resolve, reject) => {
    const { bookBody } = params;
    saveOneBook(bookBody)
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
  findAllBookService,
  saveBookService,
};
