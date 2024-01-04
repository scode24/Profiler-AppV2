import axios from "axios";
import { motion, useAnimationControls } from "framer-motion";
import React, { useState, useEffect } from "react";
import profileStore from "../data-store/ProfileStore";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
  const { setProfileJson } = profileStore();
  const [isProfileFound, setIsProfileFound] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [initialState, setInitialState] = useState({ opacity: 0, y: 30 });
  const [finalState, setFinalState] = useState({ opacity: 1, y: 0 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  const navigator = useNavigate();
  const animator = useAnimationControls();

  function checkValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const flag = emailRegex.test(email);
    setIsValidEmail(flag);
    return flag;
  }

  const handleInput = async (e) => {
    if (checkValidEmail(e.target.value) === true) {
      setInitialState({ opacity: 0, y: 30 });
      setFinalState({ opacity: 1, y: 0 });
      animator.start(finalState);
      await axios
        .get(baseUrl + "/findProfileData?email=" + e.target.value)
        .then((response) => {
          if (response.data.length > 0) {
            setEmail(response.data[0]?.email);
            setName(response.data[0]?.profile?.boxes?.namespace?.fullName);
            setImg(response.data[0]?.profile?.boxes?.imgspace?.base64Img);
            setIsProfileFound(true);
            setProfileJson(response.data[0].profile);
          } else {
            setEmail("");
            setName("");
            setImg("");
            setIsProfileFound(false);
          }
        })
        .catch((error) => console.log(error.message));
    }
  };

  const performOnClick = () => {
    if (isProfileFound) {
      navigator("/profile?email=" + email);
    } else {
      navigator("/createProfile");
    }
  };

  useEffect(() => {}, [initialState, animator]);

  return (
    <div className="page-content">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="big-title" style={{ margin: "0" }}>
          Get Ready To Dive Into {process.env.REACT_APP_NAME}
        </div>

        <div className="note">
          <form>
            <motion.div
              className="landing-page-namespace"
              initial={initialState}
              animate={animator}
            >
              {img !== "" ? (
                <img src={img} alt="user pic" />
              ) : (
                <div style={{ fontSize: "70px" }}>🥸</div>
              )}
              <div className="names">
                <strong>{name}</strong>
                <span>{email}</span>
              </div>
            </motion.div>

            <input
              id="emailInput"
              className="main-input"
              type="email"
              name="email"
              placeholder="Enter your email id"
              required
              onChange={handleInput}
            />

            <div className="options-collection">
              {isValidEmail ? (
                <button
                  className="custom-button"
                  onClick={() => performOnClick()}
                >
                  {isProfileFound ? "Open Profile" : "Create Profile"}
                </button>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
