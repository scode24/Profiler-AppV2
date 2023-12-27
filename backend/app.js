import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./database/DBConnector.js";
import userRouter from "./routes/UserRouter.js";
import profileRouter from "./routes/ProfileRouter.js";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(cors());

app.use(userRouter);
app.use(profileRouter);

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server started on port :: " + port);
  });
});
