import express from "express";
import Routes from "./routes/Routes.js";
import Database from "./connection/database.js";

class App {
  constructor() {
    this.connection = new Database().getConnection();
    this.connection.once("open", () =>
      console.log("Database connection successfully established.")
    );

    this.app = express();

    this.app.use(express.json());
    this.app.use(new Routes().getRoutes());
  }

  getApp() {
    return this.app;
  }
}

export default App;
