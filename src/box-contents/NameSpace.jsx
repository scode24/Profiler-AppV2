import React from "react";
import profileStore from "../data-store/ProfileStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLink, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";

function NameSpace() {
  const { profileJson } = profileStore();
  const socialLinks = profileJson.boxes.namespace.content.socialLinks;
  const contacts = profileJson.boxes.namespace.content.contacts;

  const renderLink = (option) => {
    var link = option.title.toLowerCase();
    let icon = undefined;
    switch (link) {
      case "github":
        icon = (
          <FontAwesomeIcon
            style={{ fontSize: "24px", marginRight: "20px" }}
            icon={faGithub}
          />
        );
        break;
      case "linkedin":
        icon = (
          <FontAwesomeIcon
            style={{ fontSize: "24px", marginRight: "20px" }}
            icon={faLinkedin}
          />
        );
        break;
      case "mail":
        icon = (
          <FontAwesomeIcon
            style={{ fontSize: "24px", marginRight: "20px" }}
            icon={faEnvelope}
          />
        );
        break;
      default:
        icon = (
          <FontAwesomeIcon
            style={{ fontSize: "24px", marginRight: "20px" }}
            icon={faLink}
          />
        );
        break;
    }
    return icon;
  };

  return (
    <div className="box-content">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "inherit",
          marginTop: "20px",
        }}
      >
        {socialLinks.map((link, index) => (
          <div style={{ width: "fit-content" }} key={index}>
            {renderLink(link)}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "inherit",
          marginTop: "20px",
        }}
      >
        <span>
          <FontAwesomeIcon icon={faPhone} /> {contacts.phno}
        </span>
        <span style={{ marginTop: "5px" }}>
          <FontAwesomeIcon icon={faLocation} /> {contacts.address}
        </span>
      </div>
    </div>
  );
}

export default NameSpace;
