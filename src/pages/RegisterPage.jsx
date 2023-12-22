import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    console.log(e);
  };

  const handleInput = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData(formData);
  };
  return (
    <div className="page-content">
      <div className="content">
        <span>New User ? Register Here</span>
        <form onSubmit={handleFormSubmit}>
          <input
            className="custom-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleInput}
            required
          />
          <input
            className="custom-input"
            type="email"
            name="email"
            placeholder="Enter your email id"
            onChange={handleInput}
            required
          />
          <input
            className="custom-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInput}
            required
          />
          <input
            className="custom-input"
            type="password"
            name="password"
            placeholder="Confirm password"
            onChange={handleInput}
            required
          />
          <div style={{ marginTop: "20px" }}>
            <input
              className="custom-button"
              type="submit"
              name="register"
              value={"Register"}
            />
            <input
              className="custom-button"
              name="signBtn"
              type="button"
              value={"Sign In"}
              onClick={() => navigator("/login")}
            />

            <input
              className="custom-button"
              type="button"
              name="resetPwdBtn"
              value={"Reset Password"}
              onClick={() => navigator("/resetPassword")}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
