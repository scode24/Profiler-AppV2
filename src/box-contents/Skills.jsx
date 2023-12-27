import React from "react";
import profileStore from "../data-store/ProfileStore";
import getIcon from "../shared/IconsFinder";
import StarRatings from "react-star-ratings";

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
            <StarRatings
              starDimension="10px"
              starSpacing="2px"
              starRatedColor="orange"
              rating={skill.rating}
              numberOfStars={5}
            />
            <span>{skill.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
