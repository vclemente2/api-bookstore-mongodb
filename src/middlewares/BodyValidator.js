class BodyValidator {
  static validate = (schema) => async (req, res, next) => {
    try {
      req.body = await schema.validateAsync(req.body);

      next();
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: error.message });
    }
  };
}

export default BodyValidator;
