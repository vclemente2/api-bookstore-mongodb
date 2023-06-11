import ApiError from "../errors/ApiError.js";

class BodyValidator {
  static validate = (schema) => async (req, res, next) => {
    try {
      req.body = await schema.validateAsync(req.body);

      next();
    } catch (error) {
      throw new ApiError(error.message, 422);
    }
  };
}

export default BodyValidator;
