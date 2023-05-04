const book1Model = require("../../../api/models/populate/book1/book1");

class Save {
  saveOneBook(params) {
    return new Promise((resolve, reject) => {
      book1Model
        .insertMany(params)
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
  BookSaveClass: Save,
};

//save data one by one

// [
//   {
//     bid: 1,
//     bname: "A TIME TO KILL",
//     price: 1000,
//     type: "kid",
//   },
//   {
//     bid: 2,
//     bname: "THE HOUSE OF MIRTH",
//     price: 2000,
//     type: "kid",
//   },
//   {
//     bid: 3,
//     bname: "EAST OF EDEN",
//     price: 3000,
//     type: "school",
//   },
//   {
//     bid: 4,
//     bname: "THE SUN ALSO RISES",
//     price: 4000,
//     type: "college",
//   },
//   {
//     bid: 5,
//     bname: "War and Peace",
//     price: 5000,
//     type: "college",
//   },
// ];
