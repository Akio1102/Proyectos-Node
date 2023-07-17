const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.port = process.env.PORT;
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
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
