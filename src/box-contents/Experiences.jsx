import React from "react";
import StepperItem from "../components/StepperItem";
import profileStore from "../data-store/ProfileStore";

function Experiences() {
  const { profileJson } = profileStore();
  const companyList = profileJson?.boxes?.experiences?.content;
  return (
    <div className="box-content">
      {companyList.map((comp, index) => {
        return (
          <StepperItem
            config={{
              isStartNode: index === 0 ? true : false,
              isEndNode: index === companyList.length ? true : false,
              leftInfo: comp.jobStartDate + "-" + comp.jobEndDate,
              rightInfoMain: comp.company,
              rightInfoSub: comp.designation,
            }}
          ></StepperItem>
        );
      })}
    </div>
  );
}

export default Experiences;
