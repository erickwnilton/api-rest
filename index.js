import express from "express";
import { api, database } from "./config.js";
import { routes } from "./src/routes/routes.js";
import { sequelize } from "./src/database/db.js";
import { User } from "./src/models/user.js";

class App {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.connectDatabase = sequelize;
  }

  startServer(port) {
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    })
  }

  routes() {
    this.app.use(routes)
  }

  async database() {
    try {
      await this.connectDatabase.authenticate()
      await this.connectDatabase.sync()
      await User.sync()
      console.log(`Database ${database.connect.database} is connected`)
    } catch (err) {
      console.error(`Database is not connected, ${err}`)
    }
  }
}

const backend = new App();
const port = api.api.port;

backend.routes();
backend.database();
backend.startServer(port);

const serverApp = backend.app;
export { serverApp }