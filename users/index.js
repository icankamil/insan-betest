require("dotenv").config();
const express = require("express");

const app = express();
const routes = require("./routes/index");
const database = require("./configs/db.config");

const prefix = process.env.PREFIX || "./api";

database.connect();

app.use(express.json());
app.use(prefix, routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
