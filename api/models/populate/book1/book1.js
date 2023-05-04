const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    bid: {
      type: Number,
      unique: true,
    },
    bname: String,
    price: Number,
    type: {
      type: String,
      enum: ["kid", "school", "college"],
    },
  },
  { timestamps: true, toJSON: { virtual: true } }
);

const Book1 = mongoose.model("Book1", bookSchema, "Book1");

module.exports = Book1;
