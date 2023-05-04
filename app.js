"use strict";

var SwaggerExpress = require("swagger-express-mw");

const mongo_config = require("./config/components/mongo");
const mongoInitializeObject = require("./api/util/intialization/mongo/intialize");
const mongoInitializeObjectEmp = require("./api/util/intialization/mongo/initailize_emp");
const mongoInitializeObjectCourse = require("./api/util/intialization/mongo/intialiaze_course");
const mongoInitializeObjectStudent = require("./api/util/intialization/mongo/initalize_student");

var app = require("express")();
module.exports = app; // for testing

mongo_config.bootstrap();
mongoInitializeObject.initialize();
mongoInitializeObjectEmp.initialize();
mongoInitializeObjectCourse.initialize();
mongoInitializeObjectStudent.initialize();

var config = {
  appRoot: __dirname, // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths["/hello"]) {
    console.log(
      "try this:\ncurl http://127.0.0.1:" + port + "/hello?name=Scott"
    );
  }
});
