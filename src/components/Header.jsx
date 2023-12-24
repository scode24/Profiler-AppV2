import React from "react";
import { useNavigate } from "react-router-dom";
import userLoginStore from "../data-store/UserLoginStore";

function Header() {
  const navigator = useNavigate();
  const { loggedInUser, setLoggedInUser } = userLoginStore();

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
    setLoggedInUser([]);
    navigator("/createProfile");
  };

  return (
    <div id="header">
      <div id="title">
        <div>{process.env.REACT_APP_NAME}</div>
      </div>

      <div id="options">
        <div className="options-collection">
          {loggedInUser.length === 0 ? (
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
              <button className="custom-button" style={{ width: "150px" }}>
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
        {loggedInUser.length === 0 ? (
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
