import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfileDataPage() {
  const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
  const [fileContent, setFileContent] = useState("");
  const [isFileLoaded, setIsFileLoaded] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();
  const [email, setEmail] = useState();

  const validateAndFetchData = async () => {
    const response = await axios.get(baseUrl + "/validateAndFetchData", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    setLoggedInUser(response.data.name);
    setEmail(response.data.email);
    if (response.data.profileJson.length > 0) {
      setFileContent(
        JSON.stringify(response.data.profileJson[0].profile, undefined, 4)
      );
      setIsFileLoaded(true);
    }
  };

  useEffect(() => {
    validateAndFetchData();
  }, []);

  const upload = async () => {
    const response = await axios.post(
      baseUrl + "/uploadData",
      {
        profile: JSON.parse(fileContent),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    alert(response.data);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        let updatedFileContent = JSON.parse(fileContent);
        updatedFileContent.boxes.imgspace.base64Img = reader.result;
        setFileContent(JSON.stringify(updatedFileContent, undefined, 4));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      //setSelectedFile(file);
      // Read the content of the file
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);
        setIsFileLoaded(true);
      };
      reader.readAsText(file);
    } else {
      //setSelectedFile(null);
      setIsFileLoaded(false);
      setFileContent("");
    }
  };

  return (
    <div>
      <div id="sub-header">
        <div>
          <strong>{loggedInUser + " "}</strong>
          <a
            href={"http://localhost:3000/profile?email=" + email}
            style={{
              fontSize: "small",
              color: "white",
              backgroundColor: "green",
              padding: "7px",
            }}
            onClick={() => localStorage.removeItem("access_token")}
          >
            [Your profiler link]
          </a>
        </div>

        <div className="options-collections">
          <input
            type="file"
            id="json-uploader"
            onChange={handleFileChange}
            accept=".json"
            style={{ display: "none" }}
          />
          <label className="custom-button" htmlFor="json-uploader">
            Upload profile data
          </label>

          <input
            type="file"
            id="img-uploader"
            onChange={handleImageChange}
            accept=".jpeg, .jpg, .png"
            style={{ display: "none" }}
          />

          {isFileLoaded ? (
            <>
              <label className="custom-button" htmlFor="img-uploader">
                Upload profile photo
              </label>
              <button className="custom-button" style={{ width: "150px" }}>
                Edit profile data
              </button>
              <button
                className="custom-button"
                style={{ width: "150px" }}
                onClick={() => upload()}
              >
                Upload to Server
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div>
        <div
          style={{
            background: "blue",
            color: "white",
            fontSize: "small",
            padding: "7px",
          }}
        >
          Make sure JSON format is corrent with all necessary fields, else
          profile UI will not be rendered properly
        </div>
        <textarea
          id="file-data-container"
          value={fileContent}
          placeholder="File content will be displayed here"
        ></textarea>
      </div>
    </div>
  );
}

export default ProfileDataPage;
