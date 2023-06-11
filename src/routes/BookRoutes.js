import { Router } from "express";
import BookModel from "../models/BookModel.js";

class BookRoutes {
  constructor() {
    this.route = Router();

    this.route.get("/", async (req, res) => {
      const books = await BookModel.find();
      res.json(books);
    });
  }

  getRoutes() {
    return this.route;
  }
}

export default BookRoutes;
