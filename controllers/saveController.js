const GeneralQuestion = require("../models/generalQuestion");
const LocationQuestion = require("../models/locationQuestion");
const EmployeeQuestion = require("../models/employeeQuestion");
const CustomerQuestion = require("../models/customerQuestion");
const GrievanceQuestion = require("../models/grievanceQuestion");
const mongoose = require("mongoose");

async function saveData(req, res, next) {
  const session = await mongoose.startSession();
  session.startTransaction();
 
  try {
    const { general, customer, location, employee, grievance } = req.body;

    const generalQuestionData = new GeneralQuestion(general);
    await generalQuestionData.save({ session });

    const sid = generalQuestionData._id;

    const locationQuestionData = new LocationQuestion({ ...location, sid });
    const employeeQuestionData = new EmployeeQuestion({ ...employee, sid });
    const customerQuestionData = new CustomerQuestion({ ...customer, sid });
    const grievanceQuestionData = new GrievanceQuestion({ ...grievance, sid });

    await Promise.all([
      await locationQuestionData.save({ session }),
      await employeeQuestionData.save({ session }),
      await customerQuestionData.save({ session }),
      await grievanceQuestionData.save({ session }),
    ]);

    await session.commitTransaction();
    session.endSession();
    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
}

module.exports = {
  saveData,
};
