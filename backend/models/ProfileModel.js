import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  email: String,
  profile: String,
});

const profileModel = new mongoose.model("profile-data", profileSchema);

export default profileModel;
