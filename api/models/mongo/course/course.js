const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    cid: Number,
    cname: String,
    price: Number,
    duration: String,
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Course = mongoose.model("Course", courseSchema, "Course");

module.exports = Course;
