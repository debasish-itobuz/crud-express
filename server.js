import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/route.js";

const port = 7400;
const app = express();
const url = "mongodb://localhost/AlienDb";

app.use(express.json());
app.use(cors());
app.use("/aliens", route);

async function dbConnect() {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDb");
    })
    .catch((err) => {
      console.log(err);
    });
}

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});

dbConnect();
