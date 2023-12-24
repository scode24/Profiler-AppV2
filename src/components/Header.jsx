import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigator = useNavigate();

  const select = (e) => {
    switch (e.target.value) {
      case "about":
        navigator("/about");
        break;
      case "doc":
        navigator("/createProfile");
        break;

      default:
        break;
    }
  };

  return (
    <div id="header">
      <div id="title">
        <div>{process.env.REACT_APP_NAME}</div>
      </div>

      <div id="options">
        <div className="options-collection">
          <button className="custom-button" onClick={() => navigator("/about")}>
            About
          </button>

          <button
            className="custom-button"
            onClick={() => navigator("/createProfile")}
          >
            Create
          </button>
        </div>
      </div>

      <select id="mobile-options" className="custom-button" onChange={select}>
        <option>Menu</option>
        <option value={"about"}>About</option>
        <option value={"doc"}>Create</option>
      </select>
    </div>
  );
}

export default Header;
