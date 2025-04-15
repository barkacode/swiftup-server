const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const plateRoutes = require("./routes/plate.route");

app.use(cors());
app.use(express.json());

app.use("/plates", plateRoutes);

app.get("/", (req, res) => res.send("SwiftUp API 💡"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => console.log("Not Connected!"));
