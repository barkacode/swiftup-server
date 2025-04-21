const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} ✨`);
    });
  })
  .catch(() => console.log("Not Connected!"));
