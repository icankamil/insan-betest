// const winston = require("winston");
// const { sentry } = require("../configs/sentry.config");

// const logger = winston.createLogger({
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: "logs/error.log", level: "error" }),
//   ],
//   exceptionHandlers: [
//     new winston.transports.File({ filename: "logs/exceptions.log" }),
//   ],
//   rejectionHandlers: [
//     new winston.transports.File({ filename: "logs/rejections.log" }),
//   ],
//   format: winston.format.json(),
// });

/* eslint-disable no-unused-vars */
const errorMiddleware = (err, _req, res, _next) => {
  // logger.error(err.message, { error: err });
  // sentry.captureException(err);

  return res.status(500).send({
    success: false,
    message: "Something went wrong!",
    data: null,
    duration: 0,
  });
};

const notFoundMiddleware = (req, res) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  // logger.error(error.message, { error });

  return res.status(404).send({
    success: false,
    message: "Route not found",
    data: null,
    duration: 0,
  });
};

module.exports = { errorMiddleware, notFoundMiddleware };
