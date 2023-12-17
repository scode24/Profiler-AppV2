import React, { useEffect } from "react";
import Box from "./Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faSmile,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import profileStore from "../data-store/ProfileStore";
import axios from "axios";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const { profileJson, setProfileJson } = profileStore();

  useEffect(() => {
    axios
      .get("data.json")
      .then((response) => {
        setProfileJson(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div id="profile">
      <div id="main-wrap-div">
        <Box
          config={{
            img: "mypic.jpeg",
            config: profileJson?.boxes?.imgspace?.config,
          }}
        />

        <Box
          config={{
            tag: "namespace",
            title: (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  {profileJson?.boxes?.namespace?.fullName ||
                    "Default Full Name"}
                </span>
                <span style={{ fontWeight: "lighter" }}>
                  {profileJson?.boxes?.namespace?.subTitle ||
                    "Default Subtitle"}
                </span>
              </div>
            ),
            icon: <FontAwesomeIcon icon={faUser} />,
            config: profileJson?.boxes?.namespace?.config,
          }}
        />
        <Box
          config={{
            tag: "about",
            title: <div>About Me</div>,
            icon: <FontAwesomeIcon icon={faSmile} />,
            config: profileJson?.boxes?.about?.config,
          }}
        />
        <Box
          config={{
            tag: "skill",
            title: <div>Technical Skillset</div>,
            icon: <FontAwesomeIcon icon={faCode} />,
            config: profileJson?.boxes?.skill?.config,
          }}
        />
        <Box
          config={{
            tag: "projects",
            title: <div>Projects</div>,
            icon: <FontAwesomeIcon icon={faFileCode} />,
            config: profileJson?.boxes?.skill?.config,
          }}
        />
      </div>
    </div>
  );
}

export default Profile;
