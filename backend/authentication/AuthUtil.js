import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const hashPassword = (password) => {
  // const salt = bcrypt.genSaltSync(10)
  // example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash
  return bcrypt.hashSync(password, "$2a$10$CwTycUXWue0Thq9StjUM0u");
};

const generatePassword = () => {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (
    !authHeader ||
    !authHeader.startsWith("Bearer ") ||
    authHeader.startsWith("Bearer null")
  ) {
    return res
      .status(401)
      .send("Invalid or missing Authorization header. Try after re-login.");
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

export { hashPassword, generatePassword, auth };
