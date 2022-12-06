const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// Imports Routes
const userRoute = require("./routes/user");
const authRoute=require("./routes/auth");
dotenv.config();

// Middleware
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`DB is connected successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

// All Routes
app.get("/api/test", () => {
  console.log("Test Is successfull");
});

app.use("/api/user", userRoute);
app.use("/api/auth",authRoute)

app.listen(process.env.PORT || 4000, () => {
  console.log(`The Server is running on port 4000`);
});
