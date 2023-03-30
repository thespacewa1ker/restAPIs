const questionResponse = {
  generalQuestions: {
    cin: { type: String, required: true },
    listedEntity: { type: String, required: true },
    yearOfIncorporation: { type: String, required: true },
    registeredOfficeAddress: { type: String, required: true },
    corporateOfficeAddress: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: String, required: true },
    website: { type: String, required: true },
    fyReportingBeingDone: { type: String, required: true },
    nameOfStockExchangesSharesListed: { type: String, required: true },
    paidUpCapital: { type: Number, required: true },
    contactDetailsForQueriesOnBsbrReport: { type: String, required: true },
    reportingBoundry: { type: String, required: true },
  },
  location: {
    national: {
      numberOfPlants: { type: Number, required: true },
      numberOfOffices: { type: Number, required: true },
    },
    international: {
      numberOfPlants: { type: Number, required: true },
      numberOfOffices: { type: Number, required: true },
    },
  },
  customerType: [
    {
      slNo: { type: Number, required: true },
      typeOfCustomer: { type: String, required: true },
      action: { type: String, enum: ["edit", "delete"] },
    },
  ],
  employeesOrWorkers: {
    permanentEmployees: {
      total: { type: Number },
      maleCount: { type: Number, required: true },
      percentageMaleCount: { type: Number },
      femaleCount: { type: Number, required: true },
      percentageFemaleCount: { type: Number },
    },
    otherThanPermanentEmployeees: {
      total: { type: Number },
      maleCount: { type: Number, required: true },
      percentageMaleCount: { type: Number },
      femaleCount: { type: Number, required: true },
      percentageFemaleCount: { type: Number },
    },
    totalEmployees: {
      total: { type: Number },
      maleCount: { type: Number, required: true },
      percentageMaleCount: { type: Number },
      femaleCount: { type: Number, required: true },
      percentageFemaleCount: { type: Number },
    },
    permanentWorkers: {
      total: { type: Number },
      maleCount: { type: Number, required: true },
      percentageMaleCount: { type: Number },
      femaleCount: { type: Number, required: true },
      percentageFemaleCount: { type: Number },
    },
    otherThanPermanentWorkers: {
      total: { type: Number },
      maleCount: { type: Number, required: true },
      percentageMaleCount: { type: Number },
      femaleCount: { type: Number, required: true },
      percentageFemaleCount: { type: Number },
    },
    totalWorkers: Number,
  },
  grievances: {
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
  },
};

module.exports = questionResponse;
