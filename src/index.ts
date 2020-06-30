import dotenv from "dotenv";
import express from "express";
import "reflect-metadata";

//import database ORM
import { createConnection, getRepository } from "typeorm";
import { CrosverTables } from "./entity/old_db/CrosverTables";

//initialize configuration
dotenv.config();
const port = process.env.SERVER_PORT;

createConnection()
  .then(async (connection) => {
    const app = express();

    app.get("/", async (req, res) => {
      // make test query db and log in console.
       const crosver_tablesRopository = getRepository(CrosverTables);
       const crosvers = await crosver_tablesRopository
          .createQueryBuilder("crosvers")
          .leftJoinAndSelect("crosvers.crosverPhotos", "crosverPhotos")
          .getMany();
       console.log(crosvers);

      console.log("hello world");
      res.send("Hello world!");
    });

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
