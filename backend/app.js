import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userModel from "./models/UserModel.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import profileModel from "./models/ProfileModel.js";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(cors());

app.listen(port, () => {
  console.log("server started on port " + port);
  mongoose
    .connect(process.env.DB_URL.replace("<password>", process.env.DB_PWD))
    .then(() => console.log("Database is connected"))
    .catch((error) => console.error(error));
});

//** Apis methods */

const hashPassword = (password) => {
  // const salt = bcrypt.genSaltSync(10)
  // example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash
  return bcrypt.hashSync(password, "$2a$10$CwTycUXWue0Thq9StjUM0u");
};

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
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.MAIL_AUTH_USER,
              pass: process.env.MAIL_AUTH_PASSWORD,
            },
          });

          // Define the email options
          const mailOptions = {
            from: process.env.MAIL_AUTH_USER,
            to: email,
            subject: "Profiler AppV2: Confidential",
            text:
              "New password is " +
              password +
              ". Please change your password after login",
          };

          // Send the email
          await transporter.sendMail(mailOptions);
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

const generatePassword = () => {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("Invalid or missing Authorization header");
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).send("Not valid user");
    }
    req.id = decoded["id"];
    req.name = decoded["name"];
    req.email = decoded["email"];
  });

  next();
};

app.post("/login", async (req, res) => {
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

app.post("/resetPassword", async (req, res) => {
  const response = await sendPassword(req.body.email);
  res.send(response);
});

app.post("/changePassword", auth, async (req, res) => {
  await userModel
    .updateOne(
      {
        email: req.email,
      },
      {
        password: req.body.password,
      }
    )
    .then(async (data) => {
      if (data.modifiedCount > 0) {
        res.send("Password has been changed successfully");
      }
    })
    .catch((error) => console.error(error));
});

app.post("/uploadData", auth, async (req, res) => {
  await profileModel
    .deleteOne({
      email: req.email,
    })
    .then((data) => {
      profileModel
        .create({
          email: req.email,
          profile: req.body.profile,
        })
        .then((docs) => res.send("Data uploaded successfully"));
    })
    .catch((error) => console.error(error));
});

app.get("/findProfileData", async (req, res) => {
  await profileModel
    .find({ email: req.query.email })
    .then((data) => res.send(data))
    .catch((error) => console.error(error));
});

app.get("/validateAndFetchData", auth, async (req, res) => {
  await profileModel
    .find({ email: req.email })
    .select("profile")
    .then((data) =>
      res.send({ name: req.name, email: req.email, profileJson: data })
    )
    .catch((error) => console.error(error));
});
