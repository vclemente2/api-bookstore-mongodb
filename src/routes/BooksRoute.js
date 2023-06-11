import { Router } from "express";
import BooksController from "../controllers/BooksController.js";
import BodyValidator from "../middlewares/BodyValidator.js";
import { createBookSchema, updateBookSchema } from "../schemas/bookSchema.js";

class BooksRoute {
  constructor() {
    this.route = Router();

    this.route
      .get("/", BooksController.findAll)
      .get("/:id", BooksController.findOne)
      .post(
        "/",
        BodyValidator.validate(createBookSchema),
        BooksController.create
      )
      .put(
        "/:id",
        BodyValidator.validate(updateBookSchema),
        BooksController.update
      )
      .delete("/:id", BooksController.destroy);
  }

  getRoutes() {
    return this.route;
  }
}

export default BooksRoute;
