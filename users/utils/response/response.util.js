const ResponseEntity = require("./response.entity");

const successResponse = (res, entity) => {
  if (entity instanceof ResponseEntity) {
    const getResponse = entity.getResponse();

    res.status(getResponse.statusCode).send({
      success: getResponse.success,
      message: getResponse.message,
      data: getResponse.data,
      duration: getResponse.duration,
    });
  }
};

const errorResponse = (res, objError) => {
  const { error, res: resEntity } = objError;
  // Check if resEntity is defined
  if (!resEntity) {
    // If not defined, send a generic error response
    return res.status(500).json({
      success: false,
      message: objError.message,
      data: null,
      duration: null, // or any default duration
    });
  }

  // Check if resEntity.message is null or undefined
  if (resEntity.message == null) {
    // Assign a default error message if not provided
    resEntity.message = error.message ?? "Something went wrong!";
  }

  // Send error response
  res.status(resEntity.statusCode).json({
    success: false,
    message: resEntity.message,
    data: null,
    duration: resEntity.getResponse().duration,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
