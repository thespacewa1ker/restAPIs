const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", userRoutes);

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
