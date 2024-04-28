require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");
const middleware = require("./middlewares/index");
const redisClient = require("./config/redis.config");
const logger = require("./utils/logging/index");
const proxy = require("./utils/proxy/index");
const auth = require("./utils/auth/index");

const prefix = process.env.PREFIX || "/api";

// redisClient.connect();

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
  })
);
logger.setupLogging(app);
auth.setupAuth(app, routes.ROUTES);
proxy.setupProxies(app, routes.ROUTES);
// app.use(prefix, routes);
app.use("*", middleware.notFound);
app.use(middleware.error);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
