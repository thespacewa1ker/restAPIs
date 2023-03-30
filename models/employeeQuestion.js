const mongoose = require("mongoose");

const particularSchema = new mongoose.Schema({
  maleCount: { type: Number, required: true },
  femaleCount: { type: Number, required: true },
  total: {
    type: Number,
    default: function () {
      return this.maleCount + this.femaleCount;
    },
  },
  percentageMaleCount: {
    type: Number,
    default: function () {
      if (this.total) {
        return (this.maleCount * 100) / this.total;
      }
      return 0;
    },
  },
  percentageFemaleCount: {
    type: Number,
    default: function () {
      if (this.total) {
        return (this.femaleCount * 100) / this.total;
      }
      return 0;
    },
  },
});

const employeeSchema = new mongoose.Schema({
  permanentEmployees: particularSchema,
  otherThanPermanentEmployeees: particularSchema,
  totalEmployees: {
    type: Number,
    default: function () {
      return (
        this.permanentEmployees.total + this.otherThanPermanentEmployeees.total
      );
    },
  },
  permanentWorkers: particularSchema,
  otherThanPermanentWorkers: particularSchema,
  totalWorkers: {
    type: Number,
    default: function () {
      return this.permanentWorkers.total + this.otherThanPermanentWorkers.total;
    },
  },
  sid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "General",
  },
});

module.exports = mongoose.model("EmployeeQuestion", employeeSchema, "Employee");
