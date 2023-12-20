import React, { useState } from "react";
import profileStore from "../data-store/ProfileStore";
import getIcon from "../shared/IconsFinder";

function Projects() {
  const { profileJson } = profileStore();
  const projectList = profileJson?.boxes?.projects?.content;
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState();

  const openLinks = (links) => {
    links.split(",").forEach((link) => {
      window.open(link);
    });
  };

  const renderContent = (option, project) => {
    switch (option) {
      case "overview":
        return <div style={{ marginTop: "20px" }}>{project.description}</div>;
      case "technology":
        return (
          <div
            style={{
              marginTop: "20px",
            }}
          >
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
                      {getIcon(technology)}
                      <span>{technology}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        );

      case "links":
        return (
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                  marginBottom: "20px",
                  width: "110px",
                }}
                onClick={() => openLinks(projectList[index].githubLink)}
              >
                {getIcon("github")}
                <span>GitHub Link</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                  marginBottom: "20px",
                  width: "110px",
                }}
                onClick={() => window.open(projectList[index].liveLink)}
              >
                {getIcon("link")}
                <span>Live Link</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div style={{ marginTop: "20px", textAlign: "justify" }}>
            {project.description}
          </div>
        );
    }
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
              className="custom-button"
              onClick={() => setOption("overview")}
            >
              Project Overview
            </button>
            <button
              className="custom-button"
              onClick={() => setOption("technology")}
            >
              Technology Used
            </button>
            <button
              className="custom-button"
              onClick={() => setOption("links")}
            >
              Project Links
            </button>
          </div>

          {renderContent(option, projectList[index])}

          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
          >
            {index > 0 ? (
              <button
                className="custom-button"
                onClick={() => setIndex(index - 1)}
              >
                Previous Poject
              </button>
            ) : (
              <></>
            )}

            {index < projectList.length - 2 ? (
              <button
                className="custom-button"
                onClick={() => setIndex(index + 1)}
              >
                Next Poject
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
