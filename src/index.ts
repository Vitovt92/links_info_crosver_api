import dotenv from "dotenv";
import express from "express";
import "reflect-metadata";

import routes from "./routes";

//import database ORM
import { createConnection, getRepository } from "typeorm";


//initialize configuration
dotenv.config();
const port = process.env.SERVER_PORT;

createConnection()
  .then(async (connection) => {
    const app = express();

// set all routes from routes folder
  
    app.use("/", routes);

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
