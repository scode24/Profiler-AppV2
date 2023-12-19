import React from "react";

function StepperItem(props) {
  const {
    isStartNode,
    isEndNode,
    leftInfo,
    rightInfoMain,
    rightInfoSub,
    color,
  } = props.config;

  const getNodeType = () => {
    if (isStartNode) return "start-node";
    if (isEndNode) return "end-node";
    return "node";
  };

  return (
    <div className="item">
      <div className={"left-info"}>{leftInfo}</div>
      <div className={getNodeType()}>
        <div className="line" style={{ borderColor: color }}></div>
        <div className="mark">
          <div className="dot" style={{ backgroundColor: color }}></div>
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
