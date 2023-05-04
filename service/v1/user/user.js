const userfindclass = require("../../../core/v1/user/find");
const usersaveclass = require("../../../core/v1/user/save");
const userupdateclass = require("../../../core/v1/user/update");
const userdeleteclass = require("../../../core/v1/user/delete");
const usermultipleupdateclass = require("../../../core/v1/user/update_multiple");
const userfindallclass = require("../../../core/v1/user/user_find");

const { findAllUsers, findOneUser } = new userfindclass.UserFindClass();

const { addUser } = new usersaveclass.UserSaveClass();
const { updateUser } = new userupdateclass.UserUpdateClass();
const { deleteAllUsers, deleteOneUser } = new userdeleteclass.UserDeleteClass();
const {
  updateMultipleUsersCoreBasedOnAge,
  updateMultipleUsersCoreBasedOnSalary,
} = new usermultipleupdateclass.MultipleUserUpdateClass();
const { findAllUsersOperation } = new userfindallclass.UserFindAllClass();

// find all user and one user service
function allUsersServices(params) {
  return new Promise((resolve, reject) => {
    corMethod = params.iid === "0" ? findAllUsersService : findOneUserService;

    corMethod(params)
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// save user service
function addUsersServices(params) {
  return new Promise((resolve, reject) => {
    // console.log.*$
    addUser(params)
      .then((result) => {
        // console.log.*$
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// update user service
function updateUsersServices(params) {
  return new Promise((resolve, reject) => {
    // console.log.*$
    // console.log.*$
    updateUser(params)
      .then((result) => {
        // console.log.*$
        if (!result) {
          resolve([]);
        }
        resolve(result);
      })
      .catch((err) => {
        // console.log.*$
        reject(err);
      });
  });
}

// delete user service
function deleteUsersServices(params) {
  return new Promise((resolve, reject) => {
    corMethod = params.iid === "0" ? deleteAllUsers : deleteOneUser;
    // console.log.*$
    corMethod(params)
      .then((result) => {
        // console.log.*$
        let resultObj = {
          message: result === 0 ? "Data Not Found" : "Data Found",
          data: result,
        };
        resolve(resultObj);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function findAllUsersService() {
  return new Promise((resolve, reject) => {
    findAllUsers()
      .then((result) => {
        // console.log.*$

        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function findOneUserService(params) {
  return new Promise((resolve, reject) => {
    findOneUser(params)
      .then((result) => {
        // console.log.*$
        if (result != null) {
          resolve(result);
        } else {
          // console.log.*$
          // result = {
          //   status: true,
          //   statusCode: true,
          //   message: "yes",
          //   data: null,
          // };
          resolve("Data not found");
        }
        // // console.log.*$
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function updateMultipleUsersService(params) {
  return new Promise((resolve, reject) => {
    // console.log.*$
    let { age, salary } = params;
    // console.log.*$
    let coreMethod;
    age && (coreMethod = updateMultipleUsersCoreBasedOnAge);
    salary && (coreMethod = updateMultipleUsersCoreBasedOnSalary);
    coreMethod(params)
      .then((result) => {
        // // console.log.*$
        resolve(result);
      })
      .catch((err) => {
        // console.log.*$
        reject(err);
      });
  });
}

function findUserAllService(params) {
  return new Promise((resolve, reject) => {
    findAllUsersOperation(params)
      .then((result) => {
        // console.log.*$

        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  allUsersServices,
  addUsersServices,
  updateUsersServices,
  deleteUsersServices,
  updateMultipleUsersService,
  findUserAllService,
};
