const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js")
const { auth } = require("../middleware/auth");
const saveController = require("../controllers/saveController");
const questionsResponse = require("../models/questionsResponse");
const { getAllData } = require("../controllers/getAllDataController");
const saveFilesController = require("../controllers/saveFilesController");
const upload = require("../middleware/upload");
const multer = require("multer");
const path = require("path");

router.get("/authTest", auth, function (req, res) {
  res.status(200).type("json").send({ success: true, msg: "Authenticated" });
});

router.get("/question", auth, function (req, res) {
  res.json(questionsResponse);
});
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/save", auth, saveController.saveData);
router.get("/getAllData", auth, getAllData);
router.post(
  "/upload",
  auth,
  upload.single("doc"),
  saveFilesController.uploadFile
);

module.exports = router;
