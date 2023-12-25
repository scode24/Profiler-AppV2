import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";

function Header() {
  const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
  const navigator = useNavigate();

  const select = (e) => {
    switch (e.target.value) {
      case "about":
        navigator("/about");
        break;
      case "create":
        navigator("/createProfile");
        break;
      case "logout":
        logoutUser();
        break;

      default:
        break;
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("access_token");
    navigator("/createProfile");
  };

  const hashPassword = (password) => {
    // const salt = bcrypt.genSaltSync(10)
    // example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash
    return bcrypt.hashSync(password, "$2a$10$CwTycUXWue0Thq9StjUM0u");
  };

  const changePassword = async () => {
    let newPassword = prompt("Enter new password");
    let confirmPassword = null;
    if (newPassword !== null) {
      confirmPassword = prompt("Confirm password");
    }

    if (newPassword === null || confirmPassword === null) {
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Please confirm your new password");
    }

    const response = await axios.post(
      baseUrl + "/changePassword",
      {
        password: hashPassword(newPassword),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    alert(response.data);
  };

  return (
    <div id="header">
      <div id="title">
        <div>{process.env.REACT_APP_NAME}</div>
      </div>

      <div id="options">
        <div className="options-collection">
          {localStorage.getItem("access_token") === null ? (
            <>
              <button
                className="custom-button"
                onClick={() => navigator("/about")}
              >
                About
              </button>
              <button
                className="custom-button"
                onClick={() => navigator("/createProfile")}
              >
                Create
              </button>
            </>
          ) : (
            <>
              <button
                className="custom-button"
                style={{ width: "150px" }}
                onClick={() => changePassword()}
              >
                Change Password
              </button>
              <button className="custom-button" onClick={() => logoutUser()}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      <select id="mobile-options" className="custom-button" onChange={select}>
        <option>Menu</option>
        {localStorage.getItem("access_token") !== null ? (
          <>
            <option value={"about"}>About</option>
            <option value={"create"}>Create</option>
          </>
        ) : (
          <>
            <option value={"changePwd"}>Change Password</option>
            <option value={"logout"}>Logout</option>
          </>
        )}
      </select>
    </div>
  );
}

export default Header;
