import { config } from "dotenv";

config();

export const api = {
  api: {
    port: process.env.PORT
  }
}