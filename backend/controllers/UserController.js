import { generatePassword, hashPassword } from "../authentication/AuthUtil.js";
import userModel from "../models/UserModel.js";
import mailer from "../utilities/Mailer.js";
import jwt from "jsonwebtoken";

const sendPassword = async (email) => {
  try {
    const password = generatePassword();
    let msg = undefined;
    await userModel
      .updateOne(
        {
          email: email,
        },
        {
          password: hashPassword(password + ""),
        }
      )
      .then(async (data) => {
        if (data.modifiedCount > 0) {
          const mailOptions = {
            from: process.env.MAIL_AUTH_USER,
            to: email,
            subject: "Profiler AppV2: Confidential",
            text:
              "New password is " +
              password +
              ". Please change your password after login",
          };
          await mailer.sendMail(mailOptions);
          msg = "New password has been sent to your mail id";
        } else {
          msg = "Invalid email";
        }
      })
      .catch((error) => console.error(error));

    return msg;
  } catch (error) {
    throw new Error(error);
  }
};

const login = async (req, res) => {
  await userModel
    .find({ email: req.body.email, password: req.body.password })
    .select("name email")
    .then((userInfo) => {
      let token = undefined;
      if (userInfo.length > 0) {
        token = jwt.sign(
          {
            id: userInfo[0]["_id"],
            name: userInfo[0]["name"],
            email: userInfo[0]["email"],
          },
          process.env.ACCESS_TOKEN
        );
      }
      const response = {
        token,
        userInfo,
      };
      res.send(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

const register = async (req, res) => {
  await userModel.find({ email: req.body.email }).then((userInfo) => {
    if (userInfo.length === 0) {
      userModel
        .create(req.body)
        .then((docs) => res.send("Registration done"))
        .catch((error) => {
          console.error(error);
          res.status(500).send("Internal Server Error");
        });
    } else {
      res.send("User exists");
    }
  });
};

const resetPasswordMail = async (req, res) => {
  const response = await sendPassword(req.body.email);
  res.send(response);
};

const changePassword = async (req, res) => {
  try {
    const result = await userModel.updateOne(
      {
        email: req.email,
      },
      {
        password: req.body.password,
      }
    );

    if (result.modifiedCount > 0) {
      res.send("Password has been changed successfully");
    } else {
      res
        .status(400)
        .send(
          "Failed to change password. User not found or password unchanged."
        );
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export { login, register, resetPasswordMail, changePassword };
