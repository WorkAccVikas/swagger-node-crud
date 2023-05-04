const mongoose = require("mongoose");

const empSchema = new mongoose.Schema(
  {
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    age: Number,
    salary: Number,
    is_active: Boolean,
  },
  { toJSON: { virtual: true } }
);

const Emp = new mongoose.model("Emp", empSchema, "Emp");

module.exports = Emp;
