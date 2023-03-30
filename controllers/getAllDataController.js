const GeneralQuestion = require("../models/generalQuestion");
const LocationQuestion = require("../models/locationQuestion");
const EmployeeQuestion = require("../models/employeeQuestion");
const CustomerQuestion = require("../models/customerQuestion");
const GrievanceQuestion = require("../models/grievanceQuestion");

async function getAllData(req, res) {
  const { cin, listedEntity } = req.query;

  try {
    const generalData = await GeneralQuestion.findOne({ cin, listedEntity });
    if (!generalData) {
      return res.status(404).json({ message: "General not found" });
    }
    const locationData = await LocationQuestion.findOne({
      sid: generalData._id,
    });

    const customerData = await EmployeeQuestion.findOne({
      sid: generalData._id,
    });
    const employeeData = await CustomerQuestion.findOne({
      sid: generalData._id,
    });
    const grievanceData = await GrievanceQuestion.findOne({
      sid: generalData._id,
    });
    const result = {
      general: generalData,
      location: locationData,
      customer: customerData,
      employee: employeeData,
      grievance: grievanceData,
    };
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data" });
  }
}

module.exports = { getAllData };
