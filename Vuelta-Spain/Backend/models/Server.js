import express from "express";
import cors from "cors";
import dbConection from "../database/config.js";
import Routes from "../routes/Routes.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await dbConection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(Routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server Running on PORT ${this.port}`);
    });
  }
}

export default Server;