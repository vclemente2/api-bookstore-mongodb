import Joi from "joi";

const createBookSchema = Joi.object({
  title: Joi.string().required().trim(),
  author: Joi.string().required().trim(),
  publisher: Joi.string().required().trim(),
  pageNumber: Joi.number().integer()
});

const updateBookSchema = Joi.object({
  title: Joi.string().trim(),
  author: Joi.string().trim(),
  publisher: Joi.string().trim(),
  pageNumber: Joi.number().integer()
});

export { createBookSchema, updateBookSchema };
