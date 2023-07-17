import express from "express";
import cors from "cors";
import conectDB from "../Config/config.js";
import AccionesRoutes from "../Routers/Acciones.routes.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.mongoDB();
    this.middlewares();
    this.routes();
  }

  async mongoDB() {
    await conectDB();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(AccionesRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server Running on PORT ${this.port}`);
    });
  }
}
