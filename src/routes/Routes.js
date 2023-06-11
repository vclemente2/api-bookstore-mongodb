import { Router } from "express";
import BooksRoute from "./BooksRoute.js";
import AuthorsRoute from "./AuthorsRoute.js";

class Routes {
  constructor() {
    this.route = Router();
    this.route.get("/", (_, res) => {
      return res.json({
        version: "1.0.0",
        description: "Bookstore API",
        author: "Vinicius Bastos Clemente"
      });
    });
    this.route.use("/books", new BooksRoute().getRoutes());
    this.route.use("/authors", new AuthorsRoute().getRoutes());
  }

  getRoutes() {
    return this.route;
  }
}

export default Routes;
