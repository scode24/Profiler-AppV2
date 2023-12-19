import React from "react";

function StepperItem(props) {
  const { isStartNode, isEndNode, leftInfo, rightInfoMain, rightInfoSub } =
    props.config;

  const getNodeType = () => {
    if (isStartNode) return "start-node";
    if (isEndNode) return "end-node";
    return "node";
  };

  return (
    <div className="item">
      <div className={"left-info"}>{leftInfo}</div>
      <div className={getNodeType()}>
        <div className="line"></div>
        <div className="mark">
          <div className="dot"></div>
        </div>
      </div>
      <div className="right-info">
        <strong>{rightInfoMain}</strong>
        <span>{rightInfoSub}</span>
      </div>
    </div>
  );
}

export default StepperItem;
