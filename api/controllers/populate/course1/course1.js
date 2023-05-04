const {
  findAllCourseService,
  saveCourseService,
  updateCourseService,
} = require("../../../../service/populate/course1/course1");

// find all course
function findAllCourses(req, res) {
  // console.log("findAllCourses Here");
  const parameter = req.swagger.params;
  const courseBody = parameter.CourseBody ? parameter.CourseBody.value : null;
  const params = { courseBody: courseBody };

  findAllCourseService(params)
    .then((response) => {
      // console.log("Controller Called", params);
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE

      // console.log("****************Controller************", responseReceived);
      // console.log("****************Controller************", response.length);
      res.status(responseReceived ? 200 : 404);
      res.json({
        // status: responseReceived,
        // statusCode: responseReceived ? 200 : 404,
        message: responseReceived ? "Yes Data Found" : "Sorry Data Not Found",
        data: response,
        total: response.length,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        status: false,
        statusCode: 500,
        message: "Error here",
        data: err,
      });
    });
}

// save one course
function saveOneCourse(req, res) {
  // console.log("saveOneCourse Here");
  const parameter = req.swagger.params;
  const courseBody = parameter.CourseBody ? parameter.CourseBody.value : null;
  const params = { courseBody: courseBody };

  saveCourseService(params)
    .then((response) => {
      // console.log("Controller Called", params);
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE

      // console.log("****************Controller************", responseReceived);
      // console.log("****************Controller************", response.length);
      res.status(responseReceived ? 200 : 404);
      res.json({
        // status: responseReceived,
        // statusCode: responseReceived ? 200 : 404,
        message: responseReceived
          ? "Data Inserted Successfully"
          : "Sorry, some problem encountered",
        data: response,
        total: response.length,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        status: false,
        statusCode: 500,
        message: "Error here",
        data: err,
      });
    });
}

// save one course
function updateOneCourse(req, res) {
  // console.log("updateOneCourse Here");
  const parameter = req.swagger.params;
  const courseBody = parameter.CourseBody ? parameter.CourseBody.value : null;
  const params = {
    course_id: parameter.course_id ? parameter.course_id.value : null,
    courseBody: courseBody,
  };
  // console.log(params);

  updateCourseService(params)
    .then((response) => {
      // console.log("Controller Called", params);
      // const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
      // const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE
      const responseReceived = response.length !== 0 ? true : false; // CONDITION FOR ARRAY RESPONSE

      // console.log("****************Controller************", responseReceived);
      // console.log("****************Controller************", response.length);
      res.status(responseReceived ? 200 : 404);
      res.json({
        // status: responseReceived,
        // statusCode: responseReceived ? 200 : 404,
        message: responseReceived
          ? "Data Updated Successfully"
          : "Sorry, some problem encountered",
        data: response,
        total: response.length,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        status: false,
        statusCode: 500,
        message: "Error here",
        data: err,
      });
    });
}

module.exports = {
  findAllCourses,
  saveOneCourse,
  updateOneCourse,
};
