const request = require("supertest");
const app = require("../index");

describe("POST /api/save", () => {
  it("should return a success message with valid input", async () => {
    const res = await request(app)
      .post("/api/save")
      .send({
        general: {
          cin: "sam123",
          listedEntity: "pqr Ltd5467",
          yearOfIncorporation: "2000",
          registeredOfficeAddress: "123 Main St",
          corporateOfficeAddress: "456 Park Ave",
          email: "info@xyz.com",
          telephone: "123-456-7890",
          website: "https://www.xyz.com",
          fyReportingBeingDone: "Yes",
          nameOfStockExchangesSharesListed: "NYSE",
          paidUpCapital: 10000,
          contactDetailsForQueriesOnBsbrReport: "Contact us at info@xyz.com",
          reportingBoundry: "Global",
        },
        location: {
          national: {
            numberOfPlants: 103,
            numberOfOffices: 53,
          },
          international: {
            numberOfPlants: 2,
            numberOfOffices: 3,
          },
        },
        customer: {
          slNo: 2,
          typeOfCustomer: ["ram", "sam"],
          action: "delete",
        },
        employee: {
          permanentEmployees: {
            maleCount: 1,
            femaleCount: 1,
          },
          otherThanPermanentEmployeees: {
            maleCount: 1,
            femaleCount: 1,
          },
          permanentWorkers: {
            maleCount: 1,
            femaleCount: 1,
          },
          otherThanPermanentWorkers: {
            maleCount: 1,
            femaleCount: 1,
          },
        },
        grievance: {
          permanentWorkers: {
            yesNo: "yes",
            details: "work",
          },
          otherThanPermanentWorkers: {
            yesNo: "no",
            details: "work",
          },
          permanentEmployees: {
            yesNo: "yes",
            details: "okay",
          },
          otherThanPermanentEmployeees: {
            yesNo: "yes",
            details: "okay",
          },
        },
      });
    expect(res.status).toEqual(200);
    expect(res.body.message).toEqual("Data saved successfully");
  });
});
