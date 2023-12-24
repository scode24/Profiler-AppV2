import { motion } from "framer-motion";
import React, { useState } from "react";

function ProfileDataPage() {
  const [fileContent, setFileContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);

      // Read the content of the file
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);
      };
      reader.readAsText(file);
    } else {
      setSelectedFile(null);
      setFileContent("");
    }
  };
  return (
    <div>
      <div id="sub-header">
        <strong>Soumyabrata Sarkar</strong>

        <div className="options-collections">
          <input type="file" onChange={handleFileChange} />
          <button className="custom-button" style={{ width: "150px" }}>
            Upload to Server
          </button>
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
          defaultValue={fileContent}
          placeholder="File content will be displayed here"
        ></textarea>
      </div>
    </div>
  );
}

export default ProfileDataPage;
