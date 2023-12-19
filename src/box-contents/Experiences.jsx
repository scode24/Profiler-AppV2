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
              isStartNode: index === 0 && companyList.length > 1 ? true : false,
              isEndNode:
                index === companyList.length && companyList.length > 1
                  ? true
                  : false,
              leftInfo: comp.jobStartDate + "-" + comp.jobEndDate,
              rightInfoMain: comp.company,
              rightInfoSub: comp.designation,
              color: profileJson?.boxes?.experiences?.config?.style?.fontColor,
            }}
          ></StepperItem>
        );
      })}
    </div>
  );
}

export default Experiences;
