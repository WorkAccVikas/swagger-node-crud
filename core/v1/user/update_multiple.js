const userModel = require("../../../api/models/mongo/user/user");

class UpdateMultiple {
  // Todo : Here salary double and bonus increment by 10 where age condition matches
  updateMultipleUsersCoreBasedOnAge(params) {
    return new Promise((resolve, reject) => {
      // console.log("Core updateMultipleUsersCoreBasedOnAge Called", params);

      const criteria = {};

      params.age && (criteria.age = { $eq: Number(params.age) });

      // console.log("Core updateMultipleUsersCoreBasedOnAge Called", criteria);
      userModel
        .updateMany(
          //   { age: { $eq: Number(params.age) } }, // find all users whose age is less than 18
          criteria,
          { $mul: { salary: 2 }, $inc: { bonus: 10 } } // set their status to 'minor'
        )

        .then((result) => {
          // console.log(
          //   "op : Core updateMultipleUsersCoreBasedOnAge Called",
          //   result
          // );

          //   userModel.find(criteria).then((r1) => resolve(r1));
          //   resolve(result);
          return userModel.find(criteria);
        })
        .then((r2) => resolve(r2))
        .catch((err) => {
          // console.log("err in core");
          reject(err);
        });
    });
  }

  // Todo : Here set company name and bonus increases where salary condition matches
  updateMultipleUsersCoreBasedOnSalary(params) {
    return new Promise((resolve, reject) => {
      // console.log("Core updateMultipleUsersCoreBasedOnSalary Called", params);
      let { salary, userBody1: userbody } = params;
      // console.log("In core = ", userbody);

      let { company, bonus } = userbody;
      // console.log("In core = ", company);

      const criteria = {};

      salary && (criteria.salary = { $lte: salary });

      // console.log("Core updateMultipleUsersCoreBasedOnSalary Called", criteria);
      userModel
        .updateMany(
          criteria,
          // { $set: { company: company }, $mul: { bonus: bonus } }

          // Set the company field and salary and bonus increased
          { $set: { company: company }, $mul: { salary: 0.6, bonus: bonus } }
        )

        .then((result) => {
          // console.log(
          //   "op : Core updateMultipleUsersCoreBasedOnSalary Called",
          //   result
          // );
          return userModel.find(criteria);
        })
        .then((r2) => resolve(r2))
        .catch((err) => {
          // console.log("err in core");
          reject(err);
        });
    });
  }
}

module.exports = {
  MultipleUserUpdateClass: UpdateMultiple,
};
