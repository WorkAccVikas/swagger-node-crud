const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    cid: {
      type: Number,
      unique: true,
    },
    cname: String,
    age: Number,
    issuedCourses: [{ type: "ObjectId", ref: "Course1" }],
    empDetails: {
      listOfEmp: [{ type: "ObjectId", ref: "Emp1" }],
    },
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Customer1 = mongoose.model("Customer1", customerSchema, "Customer1");

module.exports = Customer1;
