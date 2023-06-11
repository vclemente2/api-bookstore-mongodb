import { Router } from "express";
import BooksController from "../controllers/BooksController.js";

class BooksRoute {
  constructor() {
    this.route = Router();

    this.route.get("/", BooksController.findAll);
    this.route.get("/:id", BooksController.findOne);
    this.route.post("/", BooksController.create);
    this.route.put("/:id", BooksController.update);
    this.route.delete("/:id", BooksController.destroy);
  }

  getRoutes() {
    return this.route;
  }
}

export default BooksRoute;
