import {
  faAngular,
  faAws,
  faDocker,
  faGit,
  faGithub,
  faJava,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDraftingCompass,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { faMap, faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getIcon = (skillname) => {
  console.log("test");
  if (skillname.toLowerCase().indexOf("github") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faGithub}
      />
    );
  }
  if (skillname.toLowerCase().indexOf("git") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faGit}
      />
    );
  }
  if (skillname.toLowerCase().indexOf("react") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faReact}
      />
    );
  }
  if (skillname.toLowerCase().indexOf("angular") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faAngular}
      />
    );
  }
  if (skillname.toLowerCase().indexOf("aws") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faAws}
      />
    );
  }
  if (skillname.toLowerCase().indexOf("java") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faJava}
      />
    );
  }
  if (skillname.toLowerCase().indexOf("microservice") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faProjectDiagram}
      />
    );
  }
  if (skillname.toLowerCase().indexOf("docker") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faDocker}
      />
    );
  }
  if (skillname.toLowerCase().indexOf("ci/cd") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faWindowRestore}
      />
    );
  }
  if (skillname.toLowerCase().indexOf("js") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faJs}
      />
    );
  }
  if (skillname.toLowerCase().indexOf("map") !== -1) {
    return (
      <FontAwesomeIcon
        style={{ fontSize: "24px", marginBottom: "5px" }}
        icon={faMap}
      />
    );
  }
  return (
    <FontAwesomeIcon
      style={{ fontSize: "24px", marginBottom: "10px" }}
      icon={faDraftingCompass}
    />
  );
};

export default getIcon;
