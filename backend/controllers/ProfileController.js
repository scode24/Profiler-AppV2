import profileModel from "../models/ProfileModel.js";

const uploadData = async (req, res) => {
  try {
    await profileModel.deleteOne({ email: req.email });

    const newProfileData = {
      email: req.email,
      profile: req.body.profile,
    };
    await profileModel.create(newProfileData);

    res.send("Data uploaded successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const findProfileData = async (req, res) => {
  await profileModel
    .find({ email: req.query.email })
    .then((data) => res.send(data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

const validateAndFetchData = async (req, res) => {
  await profileModel
    .find({ email: req.email })
    .select("profile")
    .then((data) =>
      res.send({ name: req.name, email: req.email, profileJson: data })
    )
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

export { uploadData, findProfileData, validateAndFetchData };
