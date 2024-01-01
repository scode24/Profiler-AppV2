import profileModel from "../models/ProfileModel.js";
import { decrypt, encrypt } from "../utilities/CryptData.js";

const uploadData = async (req, res) => {
  try {
    await profileModel.deleteOne({ email: req.email });

    const newProfileData = {
      email: req.email,
      profile: encrypt(JSON.stringify(req.body.profile)),
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
    .then((data) => {
      if (data.length > 0) {
        const response = {
          _id: data[0]._id,
          email: data[0].email,
          profile: decrypt(data[0].profile),
        };
        data[0] = response;
      }
      res.send(data);
    })
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
      res.send({
        name: req.name,
        email: req.email,
        profileJson: decrypt(data[0].profile),
      })
    )
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

export { uploadData, findProfileData, validateAndFetchData };
