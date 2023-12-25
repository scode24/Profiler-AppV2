import React, { useEffect } from "react";
import Box from "./Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faFileCode,
  faFlag,
  faSmile,
  faUser,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import profileStore from "../data-store/ProfileStore";
import axios from "axios";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function Profile() {
  const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
  const { profileJson, setProfileJson } = profileStore();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const email = params.get("email");

  useEffect(() => {
    localStorage.removeItem("access_token");
    axios
      .get(baseUrl + "/findProfileData?email=" + email)
      .then((response) => {
        if (response.data.length > 0) {
          setProfileJson(response.data[0].profile);
        } else {
          alert("No profile found. Please verify provided email in the url.");
        }
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div id="profile">
      <div id="main-wrap-div">
        <Box
          config={{
            img: profileJson?.boxes?.imgspace?.base64Img,
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
            title: <div>{profileJson?.boxes?.about?.title}</div>,
            icon: <FontAwesomeIcon icon={faSmile} />,
            config: profileJson?.boxes?.about?.config,
          }}
        />
        <Box
          config={{
            tag: "skills",
            title: <div>{profileJson?.boxes?.skills?.title}</div>,
            icon: <FontAwesomeIcon icon={faCode} />,
            config: profileJson?.boxes?.skills?.config,
          }}
        />
        <Box
          config={{
            tag: "projects",
            title: <div>{profileJson?.boxes?.projects?.title}</div>,
            icon: <FontAwesomeIcon icon={faFileCode} />,
            config: profileJson?.boxes?.projects?.config,
          }}
        />
        <Box
          config={{
            tag: "experiences",
            title: <div>{profileJson?.boxes?.experiences?.title}</div>,
            icon: <FontAwesomeIcon icon={faBuilding} />,
            config: profileJson?.boxes?.experiences?.config,
          }}
        />

        <Box
          config={{
            tag: "achievements",
            title: <div>{profileJson?.boxes?.achievements?.title}</div>,
            icon: <FontAwesomeIcon icon={faStar} />,
            config: profileJson?.boxes?.achievements?.config,
          }}
        />

        <Box
          config={{
            tag: "qualification",
            title: <div>{profileJson?.boxes?.qualification?.title}</div>,
            icon: <FontAwesomeIcon icon={faFlag} />,
            config: profileJson?.boxes?.qualification?.config,
          }}
        />
      </div>
    </div>
  );
}

export default Profile;
