import dotenv from "dotenv";
import express from "express";
import "reflect-metadata";

import { createConnection } from "typeorm";

//initialize configuration
dotenv.config();
const port = process.env.SERVER_PORT;

createConnection()
  .then(async (connection) => {
    const app = express();

    app.get("/", (req, res) => {
      console.log("hello world");
      res.send("Hello world!");
    });

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
