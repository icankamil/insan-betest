const authMiddleware = require("./auth.middleware");
const internalMiddleware = require("./internal.middleware");
const { errorMiddleware, notFoundMiddleware } = require("./error.middleware");

module.exports = {
  auth: authMiddleware,
  internal: internalMiddleware,
  error: errorMiddleware,
  notFound: notFoundMiddleware,
};
