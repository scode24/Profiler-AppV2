import React from "react";
import StepperItem from "../components/StepperItem";
import profileStore from "../data-store/ProfileStore";

function Qualification() {
  const { profileJson } = profileStore();
  const qualificationList = profileJson?.boxes?.qualification?.content;
  return (
    <div className="box-content">
      {qualificationList.map((qualification, index) => {
        return (
          <StepperItem
            config={{
              isStartNode:
                index === 0 && qualificationList.length > 1 ? true : false,
              isEndNode:
                index === qualificationList.length &&
                qualificationList.length > 1
                  ? true
                  : false,
              leftInfo: qualification.yearOfPassing,
              rightInfoMain: qualification.institute,
              rightInfoSub: qualification.cgpaDgpaPercentage,
              color:
                profileJson?.boxes?.qualification?.config?.style?.fontColor,
            }}
          ></StepperItem>
        );
      })}
    </div>
  );
}

export default Qualification;
