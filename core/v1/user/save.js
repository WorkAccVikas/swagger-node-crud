const userModel = require("../../../api/models/mongo/user/user");

class Save {
  addUser(params) {
    return new Promise((resolve, reject) => {
      // console.log.*$
      const data = {
        iid: params.userBody.iid,
        name: params.userBody.name,
        age: params.userBody.age,
        city: params.userBody.city,
        contact: params.userBody.contact,
      };
      //   const data1 = { name: "Vikas" };
      // console.log.*$
      userModel
        .create(data)
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
  UserSaveClass: Save,
};
