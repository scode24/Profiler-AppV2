import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userModel from "./models/UserModel.js";
import cors from "cors";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("server started on port " + port);
  mongoose
    .connect(process.env.DB_URL.replace("<password>", process.env.DB_PWD))
    .then(() => console.log("Database is connected"))
    .catch((error) => console.error(error));
});

app.post("/login", async (req, res) => {
  await userModel
    .find({ email: req.body.email, password: req.body.password })
    .select("name email")
    .then((userInfo) => {
      res.send(userInfo);
    })
    .catch((error) => console.error(error));
});

app.post("/register", async (req, res) => {
  await userModel.find({ email: req.body.email }).then((userInfo) => {
    if (userInfo.length === 0) {
      userModel
        .create(req.body)
        .then((docs) => res.send("Registration done"))
        .catch((error) => console.error(error));
    } else {
      res.send("User exists");
    }
  });
});
