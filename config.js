import { config } from "dotenv";

config();

export const api = {
  api: {
    port: process.env.PORT
  }
}

export const database = {
  connect: {
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  }
}