import React, { useEffect } from "react";
import Box from "./Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faUser } from "@fortawesome/free-regular-svg-icons";
import profileStore from "../data-store/ProfileStore";
import axios from "axios";

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
      <div>
        <Box
          config={{
            title: "About Me",
            icon: <FontAwesomeIcon icon={faUser} />,
            color: "green",
            img: "mypic.jpeg",
            fontColor: "black",
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
      </div>
    </div>
  );
}

export default Profile;
