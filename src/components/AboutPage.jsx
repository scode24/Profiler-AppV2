import React from "react";

function AboutPage() {
  return (
    <div className="page-content">
      <div className="content">
        <span>About This Project</span>
        <div className="note">
          <p>
            Introducing Profile AppV2, an innovative application that allows
            users to seamlessly submit their relevant profile information,
            including skills and projects. The app features interactive tiles in
            a sleek title format. Clicking on a tile triggers a smooth
            animation, expanding to reveal more details. Users have the
            flexibility to open and close tiles at will, ensuring a customizable
            and user-friendly experience. The mobile-friendly UI enhances
            accessibility, while advanced users can personalize tile styles and
            animations through JSON config values, even incorporating HTML
            formatting in the data. Elevate your profile with Profile AppV2 –
            where customization meets simplicity.
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
            <a style={{ color: "blue" }} href="#">
              Developer's profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
