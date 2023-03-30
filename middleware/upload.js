const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"), function (error, success) {
      if (error) throw error;
    });
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext, function (err, success) {
      if (err) throw err;
    });
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "application/pdf" ||
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      callback(null, true);
    } else {
      console.log("only image/pdf/docs supported");
    }
  },
});

module.exports = upload;
