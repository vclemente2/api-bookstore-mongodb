import express from "express";

class App {
  constructor() {
    this.app = express();

    this.app.use(express.json());
    this.app.get("/", (_, res) => {
      return res.json({
        version: "1.0.0",
        description: "Bookstore API",
        author: "Vinicius Bastos Clemente"
      });
    });
  }

  getApp() {
    return this.app;
  }
}

export default App;
