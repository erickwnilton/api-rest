import { Sequelize } from "sequelize";
import { database } from "../../config.js";

export const sequelize = new Sequelize(database.connect.database, database.connect.user, database.connect.password, {
  host: database.connect.host,
  port: database.connect.port,
  dialect: 'mysql',
})