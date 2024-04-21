require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

async function main() {
  await mongoose.connect(
    `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`
  );
}

// Importing routes
const authRoute = require("./routes/auth");
const campRoute = require("./routes/campside");

let app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/", campRoute);

app.listen(process.env.PORT, async () => {
  await main();
  console.log(`Magic happens on ${process.env.PORT}`);
});
