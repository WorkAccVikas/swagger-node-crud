const userModel = require("../../../api/models/mongo/user/user");

class Delete {
  deleteOneUser(params) {
    return new Promise((resolve, reject) => {
      // console.log.*$

      userModel
        .deleteOne({ iid: params.iid })
        .then((result) => {
          // console.log.*$
          resolve(result.deletedCount);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  deleteAllUsers(params) {
    return new Promise((resolve, reject) => {
      // console.log.*$
      userModel
        .deleteMany({})
        .then((result) => {
          // console.log.*$
          resolve(result.deletedCount);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = {
  UserDeleteClass: Delete,
};
