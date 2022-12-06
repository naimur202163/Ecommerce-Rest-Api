const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// Database Connection

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`DB is connected successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 4000, () => {
  console.log(`The Server is running on port 4000`);
});
