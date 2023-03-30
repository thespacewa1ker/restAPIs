const mongoose = require("mongoose");

const grievancesSchema = new mongoose.Schema({
  permanentWorkers: {
    yesNo: {
      type: String,
      enum: ["yes", "no", "N/A"],
    },
    details: {
      type: String,
    },
  },
  otherThanPermanentWorkers: {
    yesNo: {
      type: String,
      enum: ["yes", "no", "N/A"],
    },
    details: {
      type: String,
    },
  },
  permanentEmployees: {
    yesNo: {
      type: String,
      enum: ["yes", "no", "N/A"],
    },
    details: {
      type: String,
    },
  },
  otherThanPermanentEmployeees: {
    yesNo: {
      type: String,
      enum: ["yes", "no", "N/A"],
    },
    details: {
      type: String,
    },
  },
  sid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GeneralQuestion",
  },
});

module.exports = mongoose.model(
  "GrievanceQuestion",
  grievancesSchema,
  "Grievance"
);
