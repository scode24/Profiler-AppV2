import { motion } from "framer-motion";
import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router";
import axios from "axios";

function CreateProfilePage() {
  const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
  const navigator = useNavigate();
  const [currentTab, setCurrentTab] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    loginPassword: "",
    registerPassword: "",
    confirmPassword: "",
  });

  const getStyle = (tab) => {
    return currentTab === tab
      ? { color: "white", backgroundColor: "black" }
      : {};
  };

  const handleFormInput = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData(formData);
  };

  const hashPassword = (password) => {
    // const salt = bcrypt.genSaltSync(10)
    // example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash
    return bcrypt.hashSync(password, "$2a$10$CwTycUXWue0Thq9StjUM0u");
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(baseUrl + "/login", {
      email: formData.email,
      password: hashPassword(formData.loginPassword),
    });

    console.log(response.data);

    if (response.data.length === 0) {
      alert("Invalid credential");
    } else {
      navigator("/profileData");
    }
  };

  const handleRegisterFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.registerPassword !== formData.confirmPassword) {
      alert("Confirm your password");
      return;
    }
    const response = await axios.post(baseUrl + "/register", {
      name: formData.name,
      email: formData.email,
      password: hashPassword(formData.registerPassword),
    });

    alert(response.data);
  };

  return (
    <div className="page-content">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="big-title">Want To Create Your Own Profile ?</div>

        <div className="note">
          <div className="options-collection">
            <button
              style={getStyle("login")}
              className="custom-button"
              onClick={() => setCurrentTab("login")}
            >
              Login Here
            </button>
            <button
              style={getStyle("register")}
              className="custom-button"
              onClick={() => setCurrentTab("register")}
            >
              Register Here
            </button>
          </div>

          {currentTab === "login" ? (
            <form onSubmit={handleLoginFormSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
                required
                onChange={handleFormInput}
              />
              <input
                type="password"
                name="loginPassword"
                placeholder="Enter password"
                required
                onChange={handleFormInput}
              />

              <div className="options-collection">
                <button className="custom-button" type="submit">
                  Login
                </button>
                <button className="custom-button">Reset Password</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegisterFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                onChange={handleFormInput}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
                required
                onChange={handleFormInput}
              />
              <input
                type="password"
                name="registerPassword"
                placeholder="Enter password"
                required
                onChange={handleFormInput}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
                onChange={handleFormInput}
              />

              <div className="options-collection">
                <button className="custom-button" type="submit">
                  Register
                </button>
                <button
                  className="custom-button"
                  onClick={() => setCurrentTab("login")}
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default CreateProfilePage;
