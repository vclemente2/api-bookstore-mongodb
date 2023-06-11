import mongoose from "mongoose";
import db from "../config/dbConfig.js";

class Database {
  constructor() {
    this.db = mongoose.connect(db.uri);
    this.connection = mongoose.connection;
  }

  getConnection() {
    return this.connection;
  }
}

export default Database;
