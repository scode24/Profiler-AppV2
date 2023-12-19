import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  return (
    <div id="header">
      <div id="title">
        <div>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "20px" }} />
          {process.env.REACT_APP_NAME}
        </div>
      </div>

      <div>
        <button className="custom-button">About</button>
      </div>
    </div>
  );
}

export default Header;
