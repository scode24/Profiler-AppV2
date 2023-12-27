import express from "express";
import {
  changePassword,
  login,
  register,
  resetPasswordMail,
} from "../controllers/UserController.js";
import { auth } from "../authentication/AuthUtil.js";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/resetPassword", resetPasswordMail);
userRouter.post("/changePassword", auth, changePassword);

export default userRouter;
