require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes/index");
const prefix = process.env.PREFIX || "/api";
const version = process.env.API_V || "/v1";
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(`${prefix}${version}`, routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
