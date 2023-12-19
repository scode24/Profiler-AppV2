import React from "react";
import profileStore from "../data-store/ProfileStore";
import { Rating } from "react-simple-star-rating";
import getIcon from "../shared/IconsFinder";

function Skill() {
  const { profileJson } = profileStore();
  const skillContent = profileJson.boxes.skills.content;

  return (
    <div className="box-content">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "inherit",
          marginTop: "20px",
        }}
      >
        {skillContent.map((skill, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "20px",
              marginBottom: "20px",
              width: "110px",
            }}
          >
            {getIcon(skill.name)}
            <span>{skill.name}</span>
            <Rating size={10} initialValue={skill.rating} allowFraction />
            <span>{skill.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
