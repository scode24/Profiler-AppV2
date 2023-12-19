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
              isStartNode: index === 0 ? true : false,
              isEndNode: index === qualificationList.length ? true : false,
              leftInfo: qualification.yearOfPassing,
              rightInfoMain: qualification.institute,
              rightInfoSub: qualification.cgpaDgpaPercentage,
            }}
          ></StepperItem>
        );
      })}
    </div>
  );
}

export default Qualification;
