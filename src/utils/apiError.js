class ApiError extends Error {
  constructor(
    message = "Somthing went Wrong",
    statusCode,
    errors = [],
    stack = ""
  ) {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.data = null;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
