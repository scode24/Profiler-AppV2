import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigator = useNavigate();
  return (
    <div id="header">
      <div id="title">
        <div>{process.env.REACT_APP_NAME}</div>
      </div>

      <div id="options">
        <button className="custom-button" onClick={() => navigator("/about")}>
          About
        </button>

        <button className="custom-button" onClick={() => navigator("/about")}>
          Console
        </button>
      </div>

      <select id="mobile-options" className="custom-button">
        <option>Menu</option>
        <option>About</option>
        <option>Create Profile</option>
      </select>
    </div>
  );
}

export default Header;
