import dotenv from "dotenv";
import express from "express";

//initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;

let next = 1;

next++;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  //  console.log(`Server started ap http://localhost:${port}`);
});
