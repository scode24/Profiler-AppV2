import express from "express";
import { auth } from "../authentication/AuthUtil.js";
import {
  findProfileData,
  uploadData,
  validateAndFetchData,
} from "../controllers/ProfileController.js";

const profileRouter = express.Router();

profileRouter.get("/findProfileData", findProfileData);
profileRouter.post("/uploadData", auth, uploadData);
profileRouter.get("/validateAndFetchData", auth, validateAndFetchData);

export default profileRouter;
