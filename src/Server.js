import "dotenv/config.js";
import App from "./App.js";

class Server {
  constructor() {
    this.app = new App().getApp();
    this.port = process.env.PORT || 3000;

    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

export default new Server();
