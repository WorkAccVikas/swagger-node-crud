const userModel = require("../../../api/models/mongo/user/user");

class Find {
  findAllUsers() {
    return new Promise((resolve, reject) => {
      userModel
        .find({})
        .then((result) => {
          // console.log.*$

          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  findOneUser(params) {
    return new Promise((resolve, reject) => {
      userModel
        .findOne({ iid: params.iid })
        .then((result) => {
          // console.log.*$
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
  UserFindClass: Find,
};
