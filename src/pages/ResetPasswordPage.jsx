import React from "react";

function ResetPasswordPage() {
  return (
    <div className="page-content">
      <div className="content">
        <span>Reset your password</span>
        <form>
          <input
            className="custom-input"
            type="email"
            name="email"
            placeholder="Enter your email id"
            required
          />
          <div style={{ marginTop: "20px" }}>
            <input
              className="custom-button"
              name="signBtn"
              type="submit"
              value={"Reset Password"}
            />
            <input
              className="custom-button"
              name="signBtn"
              type="button"
              value={"Sign In"}
              onClick={() => navigator("/login")}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
