import React from "react";
import profileStore from "../data-store/ProfileStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faAws,
  faDocker,
  faJava,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDraftingCompass,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { Rating } from "react-simple-star-rating";

function Skill() {
  const { profileJson } = profileStore();
  const skillContent = profileJson.boxes.skill.content;

  const getSkillIcon = (skillname) => {
    if (skillname.toLowerCase().indexOf("react") !== -1) {
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px", marginBottom: "5px" }}
          icon={faReact}
        />
      );
    }
    if (skillname.toLowerCase().indexOf("angular") !== -1) {
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px", marginBottom: "5px" }}
          icon={faAngular}
        />
      );
    }
    if (skillname.toLowerCase().indexOf("aws") !== -1) {
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px", marginBottom: "5px" }}
          icon={faAws}
        />
      );
    }
    if (skillname.toLowerCase().indexOf("java") !== -1) {
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px", marginBottom: "5px" }}
          icon={faJava}
        />
      );
    }
    if (skillname.toLowerCase().indexOf("microservice") !== -1) {
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px", marginBottom: "5px" }}
          icon={faProjectDiagram}
        />
      );
    }
    if (skillname.toLowerCase().indexOf("docker") !== -1) {
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px", marginBottom: "5px" }}
          icon={faDocker}
        />
      );
    }
    if (skillname.toLowerCase().indexOf("ci/cd") !== -1) {
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px", marginBottom: "5px" }}
          icon={faWindowRestore}
        />
      );
    }
    if (skillname.toLowerCase().indexOf("js") !== -1) {
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px", marginBottom: "5px" }}
          icon={faJs}
        />
      );
    }
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "10px" }}
        icon={faDraftingCompass}
      />
    );
  };

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
            {getSkillIcon(skill.name)}
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
