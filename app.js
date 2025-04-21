const express = require("express");
const app = express();
const cors = require("cors");

const plateRoutes = require("./src/plate/routes/plate.route");

app.use(cors());
app.use(express.json());

app.use("/plates", plateRoutes);

app.get("/", (req, res) => res.send("SwiftUp API 💡"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
