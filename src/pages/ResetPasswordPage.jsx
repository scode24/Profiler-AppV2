import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleFormInput = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData(formData);
  };

  const handleResetPasswordFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(baseUrl + "/resetPassword", {
      email: formData.email,
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
        <div>Want To Reset Your Password ?</div>
        <form onSubmit={handleResetPasswordFormSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email id"
            required
            onChange={handleFormInput}
          />

          <div className="options-collection">
            <button className="custom-button" type="submit">
              Reset Password
            </button>

            <button
              className="custom-button"
              onClick={() => navigator("/createProfile")}
            >
              Back to Login
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ResetPasswordPage;
