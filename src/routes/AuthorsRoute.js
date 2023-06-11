import { Router } from "express";
import AuthorsController from "../controllers/AuthorsController.js";
import BodyValidator from "../middlewares/BodyValidator.js";
import {
  createAuthorSchema,
  updateAuthorSchema
} from "../schemas/authorSchema.js";

class AuthorsRoute {
  constructor() {
    this.route = Router();

    this.route
      .get("/", AuthorsController.findAll)
      .get("/:id", AuthorsController.findOne)
      .post(
        "/",
        BodyValidator.validate(createAuthorSchema),
        AuthorsController.create
      )
      .put(
        "/:id",
        BodyValidator.validate(updateAuthorSchema),
        AuthorsController.update
      )
      .delete("/:id", AuthorsController.destroy);
  }

  getRoutes() {
    return this.route;
  }
}

export default AuthorsRoute;
