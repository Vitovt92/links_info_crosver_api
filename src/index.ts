import express from "express";
const app = express();

const port = 8081;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  //  console.log(`Server started ap http://localhost:${port}`);
});
