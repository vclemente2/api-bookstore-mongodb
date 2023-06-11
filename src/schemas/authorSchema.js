import Joi from "joi";

const createAuthorSchema = Joi.object({
  name: Joi.string().min(3).required().trim(),
  nationality: Joi.string().trim()
});

const updateAuthorSchema = Joi.object({
  name: Joi.string().min(3).trim(),
  nationality: Joi.string().trim()
});

export { createAuthorSchema, updateAuthorSchema };
