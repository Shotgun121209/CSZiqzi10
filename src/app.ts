import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  //Whatever things you want to do
  return res.status(200).send({
    test: "Hello.",
  });
});

app.post("/image-down", (req, res) => {
  //1. Get file
  //2. Call functino (imgDownScale)
  //3. Send back zip file
});

app.listen(3000, () => {
  console.log("Server Running (or updated) on http://localhost:3000");
});
