class ResponseEntity {
  success = false;

  message = null;

  data = null;

  statusCode = 400;

  startTime = 0;

  constructor() {
    this.startTime = new Date().getTime();
  }

  getResponse() {
    this.statusCode = this.success ? 200 : this.statusCode || 400;
    const response = {
      statusCode: this.statusCode,
      success: this.success,
      message: this.message,
      data: this.data,
      duration: this.startTime
        ? `${new Date().getTime() - this.startTime} ms.`
        : "unknown",
    };
    return response;
  }
}

module.exports = ResponseEntity;
