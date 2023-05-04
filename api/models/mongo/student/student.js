const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    sid: Number,
    sname: String,
    age: Number,
    city: String,
    issuedCourses: [
      {
        type: "ObjectId",
        ref: "Course",
      },
    ],
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Student = mongoose.model("Student", studentSchema, "Student");

module.exports = Student;
