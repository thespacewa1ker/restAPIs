const mongoose = require("mongoose");

const generalQuestionsSchema = new mongoose.Schema({
  cin: {
    type: String,
    required: true,
  },
  listedEntity: {
    type: String,
    required: true,
  },
  yearOfIncorporation: {
    type: String,
    required: true,
  },
  registeredOfficeAddress: {
    type: String,
    required: true,
  },
  corporateOfficeAddress: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  fyReportingBeingDone: {
    type: String,
    required: true,
  },
  nameOfStockExchangesSharesListed: {
    type: String,
    required: true,
  },
  paidUpCapital: {
    type: Number,
    required: true,
  },
  contactDetailsForQueriesOnBsbrReport: {
    type: String,
    required: true,
  },
  reportingBoundry: {
    type: String,
    required: true,
  },
  document: {
    type: String,
  },
});

module.exports = mongoose.model(
  "GeneralQuestion",
  generalQuestionsSchema,
  "General"
);
