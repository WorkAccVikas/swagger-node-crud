const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    course_id: {
      type: Number,
      unique: true,
    },
    course_name: String,
    fee: Number,
    issuedBook: [{ type: "ObjectId", ref: "Book1" }],
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Course1 = mongoose.model("Course1", courseSchema, "Course1");

module.exports = Course1;
