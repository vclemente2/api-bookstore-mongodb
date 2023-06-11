class ErrorMiddleware {
  static async inCaseOfError(error, _, res, next) {
    const status = error.statusCode || 500;
    const message = error.statusCode ? error.message : "Internal error.";

    return res.status(status).json({ message });
  }
}

export default ErrorMiddleware;
