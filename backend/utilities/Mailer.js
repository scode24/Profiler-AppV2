import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASSWORD,
  },
});

export default mailer;
