import dotenv from "dotenv";
import express from "express";

//initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;

let next = 1;

next++;
next++;

const app = express();

app.get("/", (req, res) => {
  next++;
  next++;

  console.log(next);
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
