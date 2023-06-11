import { Router } from "express";
import BooksController from "../controllers/BooksController.js";
import BodyValidator from "../middlewares/BodyValidator.js";
import { createBookSchema, updateBookSchema } from "../schemas/bookSchema.js";

class BooksRoute {
  constructor() {
    this.route = Router();

    this.route.get("/", BooksController.findAll);
    this.route.get("/:id", BooksController.findOne);
    this.route.post(
      "/",
      BodyValidator.validate(createBookSchema),
      BooksController.create
    );
    this.route.put(
      "/:id",
      BodyValidator.validate(updateBookSchema),
      BooksController.update
    );
    this.route.delete("/:id", BooksController.destroy);
  }

  getRoutes() {
    return this.route;
  }
}

export default BooksRoute;
