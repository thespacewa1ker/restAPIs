const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  national: {
    numberOfPlants: {
      type: Number,
      required: true,
    },
    numberOfOffices: {
      type: Number,
      required: true,
    },
  },
  international: {
    numberOfPlants: {
      type: Number,
      required: true,
    },
    numberOfOffices: {
      type: Number,
      required: true,
    },
  },
  sid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "General",
  },
});

module.exports = mongoose.model("LocationQuestion", locationSchema, "Location");
