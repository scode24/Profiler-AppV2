import React from "react";
import profileStore from "../data-store/ProfileStore";
import getIcon from "../shared/IconsFinder";

function Achievements() {
  const { profileJson } = profileStore();
  const achievementList = profileJson?.boxes?.achievements?.content;
  return (
    <div className="box-content">
      <div
        style={{
          width: "inherit",
          marginTop: "20px",
        }}
      >
        {achievementList.map((achievement, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
            }}
          >
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "20px",
              }}
            >
              {getIcon("achievement")}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: "bold" }}>{achievement.title}</span>
              <span>{achievement.source}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
