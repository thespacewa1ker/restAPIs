const { response } = require("express");
const multer = require("multer");
const GeneralQuestion = require("../models/generalQuestion");

// Controller function for handling file uploads
const uploadFile = (req, res) => {
  const {
    cin,
    type,
    listedEntity,
    yearOfIncorporation,
    registeredOfficeAddress,
    corporateOfficeAddress,
    email,
    telephone,
    website,
    fyReportingBeingDone,
    nameOfStockExchangesSharesListed,
    paidUpCapital,
    contactDetailsForQueriesOnBsbrReport,
    reportingBoundry,
  } = req.body;

  // Create a new document instance with the file data
  const generalQuestion = new GeneralQuestion({
    cin,
    type,
    listedEntity,
    yearOfIncorporation,
    registeredOfficeAddress,
    corporateOfficeAddress,
    email,
    telephone,
    website,
    fyReportingBeingDone,
    nameOfStockExchangesSharesListed,
    paidUpCapital,
    contactDetailsForQueriesOnBsbrReport,
    reportingBoundry,
  });
  if (req.file) {
    generalQuestion.document = req.file.filename;
  }

  // Save the document to the database
  generalQuestion
    .save()
    .then((response) => {
      res.json({
        message: "file added",
      });
    })
    .catch((error) => {
      res.json({
        message: "error occured",
      });
    });
};

module.exports = { uploadFile };
