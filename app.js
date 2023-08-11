import cors from "cors";
import express from "express";
import { database } from "./config.js";
import { User } from "./src/models/user.js";
import { routes } from "./src/routes/routes.js";
import { sequelize } from "./src/database/db.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

async function startDatabase() {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    await User.sync()
    console.log(`Database ${database.connect.database} is connected`)
  } catch (err) {
    console.error(`Database is not connected, ${err}`)
  }
}

export {
  app,
  startDatabase
}