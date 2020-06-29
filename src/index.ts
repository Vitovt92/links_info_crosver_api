import dotenv from "dotenv";
import express from "express";
import "reflect-metadata";

//import database ORM
import { createConnection, getRepository } from "typeorm";
import { Crosver_tables } from "./entity/crosver/Crosver";

//initialize configuration
dotenv.config();
const port = process.env.SERVER_PORT;

createConnection()
  .then(async (connection) => {
    const app = express();

    app.get("/", async (req, res) => {
      // make test query db and log in console.
      // const crosver_tablesRopository = getRepository(Crosver_tables);
      // const crosvers = await crosver_tablesRopository.find();
      // console.log(crosvers);

      console.log("hello world");
      res.send("Hello world!");
    });

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
