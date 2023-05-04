const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    iid: Number,
    name: String,
    age: Number,
    city: String,
    contact: String,
    salary: Number,
    bonus: Number,
    company: String,
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const User = mongoose.model("User", userSchema, "User");

module.exports = User;
