const empModel = require("../../../api/models/mongo/emp/emp");

class Find {
  findAllEmps(params) {
    return new Promise(async (resolve, reject) => {
      try {
        // console.log("In core = ", params);
        const queryObject = {};

        let {
          id,
          first_name,
          last_name,
          age,
          salary,
          sort,
          select,
          page,
          limit,
        } = params;

        // console.log(
        //   id,
        //   first_name,
        //   last_name,
        //   age,
        //   salary,
        //   sort,
        //   select,
        //   page,
        //   limit
        // );

        if (id) queryObject.id = id;
        // Todo : Strict search
        if (first_name) queryObject.first_name = first_name;
        // Todo : Not Strict search
        if (last_name) {
          queryObject.last_name = { $regex: last_name, $options: "i" };
        }
        if (age) queryObject.age = { $eq: age };
        if (salary) queryObject.salary = { $lt: salary };

        // console.log(queryObject);
        let apiData = empModel.find(queryObject);

        if (sort) {
          let sortFix = sort.split(",").join(" ");
          apiData = apiData.sort(sortFix);
        }

        if (select) {
          let selectFix = select.split(",").join(" ");
          apiData = apiData.select(selectFix);
        }

        // * : pagination
        if (page) {
          // console.log("In page = ", page, limit);
          let pageNo = Number(page);
          // let limit_number = limit || (Number(limit) || 8);
          let limit_number =
            typeof limit === "undefined"
              ? 8
              : typeof limit === "string"
              ? Number(limit)
              : undefined;

          if (Number.isNaN(pageNo)) reject("Please Enter proper page number");

          if (Number.isNaN(limit_number))
            reject("Please Enter proper limit number");

          // console.log(limit_number, typeof limit_number);
          let skip = (pageNo - 1) * limit_number;
          apiData = apiData.skip(skip).limit(limit_number);
        } else if (page === undefined && limit !== undefined) {
          reject("Please Enter Page Number");
        }

        let data = await apiData;

        // console.log("Data here = ",data);

        resolve(data);

        // empModel
        //   .find(queryObject)
        //   .then((result) => {
        //     console.log("Core findAllEmps Called");
        //     // console.log(result);

        //     resolve(result);
        //   })

        //   .catch((err) => {
        //     reject(err);
        //   });
      } catch (error) {
        // console.log("Error : ", error);
        reject(error);
      }
    });
  }
}

module.exports = {
  EmpFindClass: Find,
};
