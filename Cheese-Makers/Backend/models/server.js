const express = require("express");
const cors = require("cors");
const { dbConection } = require("../database/config.js");

class Server {
  constructor() {
    this.app = express();
    this.connectDB();
    this.middlewares();
    this.routes();
    this.port = process.env.PORT;
  }

  async connectDB() {
    await dbConection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(require("../routes/usuarios.routes.js"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server Running on PORT ${this.port}`);
    });
  }
}

module.exports = Server;
