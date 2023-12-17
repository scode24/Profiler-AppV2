import React from "react";
import profileStore from "../data-store/ProfileStore";

function About(props) {
  const { profileJson } = profileStore();
  const aboutContent = profileJson.boxes.about.content;
  return (
    <div className="box-content">
      <p style={{ textAlign: "justify", marginTop: "20px" }}>{aboutContent}</p>
    </div>
  );
}

export default About;
