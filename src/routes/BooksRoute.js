import { Router } from "express";
import BooksModel from "../models/BooksModel.js";

class BooksRoute {
  constructor() {
    this.route = Router();

    this.route.get("/", async (req, res) => {
      try {
        const books = await BooksModel.find();
        return res.json(books);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    });
  }

  getRoutes() {
    return this.route;
  }
}

export default BooksRoute;
