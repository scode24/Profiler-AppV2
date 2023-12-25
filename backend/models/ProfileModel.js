import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  email: String,
  profile: Object,
});

const profileModel = new mongoose.model("profile-data", profileSchema);

export default profileModel;
