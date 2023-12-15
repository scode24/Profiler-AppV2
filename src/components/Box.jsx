import { motion, useAnimationControls } from "framer-motion";
import React, { useState } from "react";
import About from "../box-contents/About";
import NameSpace from "../box-contents/NameSpace";

function Box(props) {
  const {
    tag,
    title,
    icon,
    color,
    img,
    fontColor,
    initialWidth,
    initialHeight,
    finalWidth,
    finalHeight,
  } = props.config;
  const initialStyle = { width: initialWidth, height: initialHeight };
  const finalStyle = { width: finalWidth, height: finalHeight };
  const closedBoxIconInitialStyle = { opacity: 0, marginTop: "20px" };
  const closedBoxIconFinalStyle = { opacity: 1, marginTop: "0" };
  const animator = useAnimationControls();
  const [isBoxOpened, setIsBoxOpened] = useState(false);

  const openCloseBox = () => {
    if (isBoxOpened) {
      animator.start(initialStyle);
      setIsBoxOpened(false);
    } else {
      animator.start(finalStyle);
      setIsBoxOpened(true);
    }
  };

  const getComponent = (tag) => {
    switch (tag) {
      case "namespace":
        return <NameSpace />;
      case "about":
        return <About />;

      default:
        break;
    }
  };

  return (
    <motion.div
      style={{
        background: color,
        cursor: "pointer",
        color: fontColor,
        padding: img !== "" ? "0px" : "20px",
        margin: "5px",
        overflow: "auto",
      }}
      initial={initialStyle}
      animate={animator}
      onClick={openCloseBox}
      transition={{ type: "spring" }}
    >
      {!isBoxOpened ? (
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "inherit",
            height: "100%",
          }}
          initial={closedBoxIconInitialStyle}
          animate={closedBoxIconFinalStyle}
          transition={{ type: "spring" }}
        >
          {img !== "" ? (
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
          {img !== "" ? (
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
