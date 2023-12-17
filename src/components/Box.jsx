import { motion, useAnimationControls } from "framer-motion";
import React, { useState } from "react";
import About from "../box-contents/About";
import NameSpace from "../box-contents/NameSpace";
import Skill from "../box-contents/Skill";

function Box(props) {
  const { tag, title, icon, img, config } = props.config;
  const closedBoxIconInitialStyle = { opacity: 0, marginTop: "20px" };
  const closedBoxIconFinalStyle = { opacity: 1, marginTop: "0" };
  const animator = useAnimationControls();
  const [isBoxOpened, setIsBoxOpened] = useState(false);

  const openCloseBox = () => {
    if (isBoxOpened) {
      animator.start(config?.framerAnimation?.onclickAnimation?.initialState);
      setIsBoxOpened(false);
    } else {
      animator.start(config?.framerAnimation?.onclickAnimation?.finalState);
      setIsBoxOpened(true);
    }
  };

  const getComponent = (tag) => {
    switch (tag) {
      case "namespace":
        return <NameSpace />;
      case "about":
        return <About />;
      case "skill":
        return <Skill />;

      default:
        break;
    }
  };

  return (
    <motion.div
      style={{
        background: config?.style?.bgColor,
        cursor: "pointer",
        color: config?.style?.fontColor,
        padding: img !== undefined ? "0px" : "20px",
        margin: "5px",
        overflowY: "auto",
        width: config?.framerAnimation?.onclickAnimation?.initialState?.width,
        height: config?.framerAnimation?.onclickAnimation?.initialState?.height,
      }}
      initial={config?.framerAnimation?.onclickAnimation?.initialState}
      animate={animator}
      onClick={openCloseBox}
      transition={{ type: "spring" }}
    >
      {!isBoxOpened ? (
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
          initial={closedBoxIconInitialStyle}
          animate={closedBoxIconFinalStyle}
          transition={{ type: "spring" }}
        >
          {img !== undefined ? (
            <img
              style={{ width: "fit-content", height: "inherit" }}
              src={img}
              alt="user pic"
            />
          ) : (
            <div style={{ width: "100%", height: "max-content" }}>
              <div style={{ fontSize: "24px", marginBottom: "7px" }}>
                {icon}
              </div>
              {title}
            </div>
          )}
        </motion.div>
      ) : (
        <div style={{ width: "100%", height: "100%" }}>
          {img !== undefined ? (
            <img
              style={{ width: "fit-content", height: "inherit" }}
              src={img}
              alt="user pic"
            />
          ) : (
            <>
              <div style={{ width: "100%", height: "max-content" }}>
                <div style={{ fontSize: "24px", marginBottom: "7px" }}>
                  {icon}
                </div>
                {title}
              </div>
              {getComponent(tag)}
            </>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default Box;
