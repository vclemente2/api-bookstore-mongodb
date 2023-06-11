import express from "express";
import Routes from "./routes/Routes.js";

class App {
  constructor() {
    this.app = express();

    this.app.use(express.json());
    this.app.use(new Routes().getRoutes());
  }

  getApp() {
    return this.app;
  }
}

export default App;
