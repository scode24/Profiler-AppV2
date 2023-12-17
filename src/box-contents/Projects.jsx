import React, { useState } from "react";
import profileStore from "../data-store/ProfileStore";
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
import { faMap, faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  const { profileJson } = profileStore();
  const projectList = profileJson?.boxes?.projects?.content;
  const [index, setIndex] = useState(0);

  const getSkillIcon = (skillname) => {
    console.log(skillname);
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
    if (skillname.toLowerCase().indexOf("map") !== -1) {
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px", marginBottom: "5px" }}
          icon={faMap}
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
      <div style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: "bold", fontSize: "15px" }}>
            {projectList[index].name}
          </span>
          <span>{projectList[index].type}</span>

          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
          >
            <button
              style={{
                border: "1px solid",
                borderRadius: "20px",
                padding: "5px",
                marginRight: "7px",
              }}
            >
              Project Overview
            </button>
            <button
              style={{
                border: "1px solid",
                borderRadius: "20px",
                padding: "5px",
                marginRight: "7px",
              }}
            >
              Technology Used
            </button>
            <button
              style={{
                border: "1px solid",
                borderRadius: "20px",
                padding: "5px",
                marginRight: "7px",
              }}
            >
              Project Links
            </button>
          </div>

          {/* <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold" }}>Technology Used</span>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {projectList[index].technology
                .split(",")
                .map((technology, index) => {
                  return (
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
                      {getSkillIcon(technology)}
                      <span>{technology}</span>
                    </div>
                  );
                })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
