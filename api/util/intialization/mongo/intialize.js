const userModel = require("../../../models/mongo/user/user");

function initialize() {
  return new Promise((resolve, reject) => {
    const data = [
      {
        iid: "1",
        name: "amit",
        age: "10",
        city: "goa",
        contact: "9988776655",
        salary: 100,
        bonus: 10,
        company: "ABC",
      },
      {
        iid: "2",
        name: "raj",
        age: "20",
        city: "pune",
        contact: "9988776615",
        salary: 200,
        bonus: 20,
        company: "AC",
      },
      {
        iid: "3",
        name: "nitish",
        age: "30",
        city: "delhi",
        contact: "7988776655",
        salary: 300,
        bonus: 30,
        company: "SSS",
      },
      {
        iid: "4",
        name: "nitu",
        age: "40",
        city: "alibaug",
        contact: "7985576655",
        salary: 400,
        bonus: 40,
        company: "TUS",
      },
      {
        iid: "5",
        name: "pooja",
        age: "10",
        city: "kolhapur",
        contact: "8885576655",
        salary: 500,
        bonus: 50,
        company: "JJJ",
      },
    ];

    // Todo : CHECKS WHETHER THE COLLECTION IS EMPTY , IF YES THEN INITIALIZE IT
    userModel
      .count()
      .then((count) => {
        if (count === 0) {
          console.log("### INITIALIZE USER RECORDS ###");
          userModel
            .insertMany(data)
            .then((result) => {
              // console.log(result);
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          console.log("### ALREADY INITIALIZED USER DATA! ###");
          resolve(count);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = { initialize };
