const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empSchema = new Schema(
  {
    eid: {
      type: Number,
      unique: true,
    },
    ename: String,
    salary: Number,
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Emp1 = mongoose.model("Emp1", empSchema, "Emp1");

module.exports = Emp1;
