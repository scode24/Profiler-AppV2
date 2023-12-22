import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleInput = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData(formData);
  };

  return (
    <div className="page-content">
      <div className="content">
        <span>Want to create your own profile ?</span>
        <form onSubmit={handleFormSubmit}>
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
          <div style={{ marginTop: "20px" }}>
            <input
              className="custom-button"
              name="signBtn"
              type="submit"
              value={"Sign In"}
            />
            <input
              className="custom-button"
              type="button"
              name="register"
              value={"Register"}
              onClick={() => navigator("/register")}
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

export default LoginPage;
