import { Router } from "express";

class BookRoutes {
  constructor() {
    this.route = Router();

    this.route.get("/", (req, res) => {
      res.json({ message: "Olá mundo" });
    });
  }

  getRoutes() {
    return this.route;
  }
}

export default BookRoutes;
