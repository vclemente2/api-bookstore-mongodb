import { Router } from "express";
import BookRoutes from "./BookRoutes.js";

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
    this.route.use("/book", new BookRoutes().getRoutes());
  }

  getRoutes() {
    return this.route;
  }
}

export default Routes;
