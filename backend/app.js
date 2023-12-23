import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userModel from "./models/UserModel.js";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
  console.log("server started on port " + port);
  mongoose
    .connect(process.env.DB_URL.replace("<password>", process.env.DB_PWD))
    .then(() => console.log("Database is connected"))
    .catch((error) => console.error(error));
});

app.post("/register", (req, res) => {
  userModel
    .create(req.body)
    .then((docs) => res.send(docs))
    .catch((error) => console.error(error));
});
