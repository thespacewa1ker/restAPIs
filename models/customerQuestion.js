const mongoose = require("mongoose");

const customerTypeSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true,
  },
  typeOfCustomer: {
    type: [String],
    required: true,
    validate: {
      validator: function (arr) {
        return arr.length === new Set(arr).size;
      },
      message: "typeOfCustomer array must be unique",
    },
  },
  action: {
    type: String,
    enum: ["edit", "delete"],
    required: true,
  },
  sid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "General",
  },
});

module.exports = mongoose.model(
  "CustomerQuestion",
  customerTypeSchema,
  "Customer"
);
