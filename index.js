import express from "express";
import { api } from "./config.js";

class App {
  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  startServer(port) {
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    })
  }
}

const backend = new App();
const port = api.api.port;

backend.startServer(port);