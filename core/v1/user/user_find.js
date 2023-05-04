const userModel = require("../../../api/models/mongo/user/user");

class FindAll {
  //   findAllUsersOperation(params) {
  //     return new Promise((resolve, reject) => {
  //       // console.log.*$
  //       userModel
  //         .find({})
  //         .sort({ updatedAt: 1 })
  //         .then((result) => {
  //           // console.log.*$

  //           resolve(result);
  //         })
  //         .catch((err) => {
  //           reject(err);
  //         });
  //     });
  //   }

  findAllUsersOperation(params) {
    return new Promise(async function (resolve, reject) {
      try {
        // console.log.*$
        let { query } = params;
        let { sort, match } = query;
        let criteria = {};
        // console.log.*$
        if (match) {
          let arr = JSON.parse(match);
          criteria.iid = { $in: arr };
        }

        // let apiData = userModel.find({});
        // Todo : or
        // let apiData = new FindAll().finds();
        // Todo : or
        // let apiData = finds1();
        let apiData = userModel.find(criteria).lean();
        // console.log.*$
        if (sort) {
          let sortFix = sort.split(",").join(" ");
          apiData = apiData.sort(sortFix);
        }
        let data = await apiData;
        resolve(data);
      } catch (error) {
        // console.log.*$
      }
    });
  }

  finds() {
    // console.log.*$
    return userModel.find({});
  }
}

function finds1() {
  return userModel.find({});
}

module.exports = {
  UserFindAllClass: FindAll,
};
