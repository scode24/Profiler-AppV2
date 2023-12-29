import { motion } from "framer-motion";
import React from "react";

function AboutPage() {
  return (
    <div className="page-content">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span style={{ fontWeight: "lighter" }}>About This Project</span>
        <div className="note">
          <p>
            Introducing {process.env.REACT_APP_NAME}, an innovative application
            that allows users to seamlessly submit their relevant profile
            information, including skills and projects. The app features
            interactive tiles in a sleek title format. Clicking on a tile
            triggers a smooth animation, expanding to reveal more details. Users
            have the flexibility to open and close tiles at will, ensuring a
            customizable and user-friendly experience. The mobile-friendly UI
            enhances accessibility, while advanced users can personalize tile
            styles and animations through JSON config values, even incorporating
            HTML formatting in the data. Elevate your profile with{" "}
            {process.env.REACT_APP_NAME}– where customization meets simplicity.
          </p>

          <br></br>
          <br></br>
          <p
            style={{
              fontWeight: "lighter",
              fontStyle: "italic",
              fontSize: "12px",
            }}
          >
            * This project has been developed based on a personal passion and
            keen interest in the subject matter.
            <br></br>
            <a
              style={{ color: "blue" }}
              href={
                process.env.REACT_APP_SERVER_BASE_URL +
                "/profile?email=sarkar.soumyabrata2@gmail.com"
              }
            >
              Developer's profile
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;
