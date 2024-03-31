const mongoose = require("mongoose");
const { Decimal } = require("mongoose/lib/schema/index");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    iid: Number,
    name: String,
    age: Number,
    city: String,
    contact: String,
    salary: {
      type: Number,
      get: getPrice,
      set: setPrice,
    },
    bonus: Number,
    company: String,
  },
  { timestamps: true, toJSON: { virtual: true, getters: true } }
);

function getPrice(num) {
  return num.toFixed(4);
}

function setPrice(num) {
  return num.toFixed(4);
}

const User = mongoose.model("User", userSchema, "User");

module.exports = User;
