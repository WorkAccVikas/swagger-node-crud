const userModel = require("../../../api/models/mongo/user/user");

class Update {
  updateUser(params) {
    return new Promise((resolve, reject) => {
      // console.log.*$
      // console.log.*$
      const data = {};
      const { name, age, city, contact } = params.userBody1;

      params.iid && (data.iid = params.iid);
      name && (data.name = name);
      age && (data.age = age);
      city && (data.city = city);
      contact && (data.contact = contact);

      // console.log.*$
      userModel
        .findOneAndUpdate({ iid: params.iid }, data, { new: true })
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
  UserUpdateClass: Update,
};
