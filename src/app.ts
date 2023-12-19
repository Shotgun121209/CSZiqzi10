import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import { resizeImg } from "./helper";
import cors from "cors";

const app = express();
const upload = multer();
const corsOptions = {
  origin: "*",
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get("/hello", (req, res) => {
  //Whatever things you want to do
  return res.status(200).send({
    test: "Hello.",
  });
});

app.post("/resize", upload.single("image"), async (req, res) => {
  //1. Get file
  const originalFile = req.file;
  //2. Call functino (imgDownScale)
  if (originalFile?.mimetype.startsWith("image/")) {
    //Image Down Scale Process
    const resizedBuff = await resizeImg(originalFile.buffer);

    return res.type("image/jpeg").send(resizedBuff);
  } else {
    console.log("Wrong File Format");
    return res
      .status(400)
      .send("Wrong File Type, only image files. (JPG, JPEG, WEBP, PNG, etc)");
  }
  //3. Send back zip file
});

app.listen(3000, () => {
  console.log("Server Running (or updated) on http://localhost:3000");
});
