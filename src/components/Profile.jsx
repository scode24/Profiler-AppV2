import React, { useEffect } from "react";
import Box from "./Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faUser } from "@fortawesome/free-regular-svg-icons";
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
            initialWidth: "150px",
            initialHeight: "150px",
            finalWidth: "300px",
            finalHeight: "300px",
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
            color: profileJson?.boxes?.namespace?.bgColor || "orange",
            img: "",
            fontColor: profileJson?.boxes?.namespace?.fontColor || "black",
            initialWidth: "250px",
            initialHeight: "150px",
            finalWidth: "300px",
            finalHeight: "300px",
          }}
        />

        <Box
          config={{
            tag: "about",
            title: <div>About Me</div>,
            icon: <FontAwesomeIcon icon={faUser} />,
            color: profileJson?.boxes?.about?.bgColor || "orange",
            img: "",
            fontColor: profileJson?.boxes?.about?.fontColor || "black",
            initialWidth: "170px",
            initialHeight: "150px",
            finalWidth: "350px",
            finalHeight: "420px",
          }}
        />

        <Box
          config={{
            tag: "skill",
            title: <div>Technical Skillset</div>,
            icon: <FontAwesomeIcon icon={faCode} />,
            color: profileJson?.boxes?.skill?.bgColor || "orange",
            img: "",
            fontColor: profileJson?.boxes?.skill?.fontColor || "black",
            initialWidth: "250px",
            initialHeight: "150px",
            finalWidth: "500px",
            finalHeight: "420px",
          }}
        />
      </div>
    </div>
  );
}

export default Profile;
