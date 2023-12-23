import { motion } from "framer-motion";
import React, { useState } from "react";

function DocumentationPage() {
  const [currentTab, setCurrentTab] = useState("login");

  const getStyle = (tab) => {
    return currentTab === tab
      ? { color: "white", backgroundColor: "black" }
      : {};
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
            <form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
              />
              <input
                type="password"
                name="passowrd"
                placeholder="Enter password"
              />

              <div className="options-collection">
                <button className="custom-button">Login</button>
                <button className="custom-button">Reset Password</button>
              </div>
            </form>
          ) : (
            <form>
              <input type="text" name="name" placeholder="Enter your name" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
              />
              <input
                type="password"
                name="passowrd"
                placeholder="Enter password"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />

              <div className="options-collection">
                <button className="custom-button">Register</button>
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

export default DocumentationPage;
