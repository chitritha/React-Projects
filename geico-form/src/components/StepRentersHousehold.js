import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

const StepRentersHousehold = ({ nextStep, prevStep, updateRentersData, rentersFormData }) => {
  const [noOfPeople, setNoOfPeople] = useState(rentersFormData.noOfPeople);

  const handleNext = () => {
    updateRentersData({ noOfPeople });
    nextStep();
  };

  return (
    <div className="step">
      <h2>How many people live in your household?</h2>
      <input
        type="number"
        value={noOfPeople}
        onChange={(e) => setNoOfPeople(e.target.value)}
      />
      <FormNavigation onNext={handleNext} onBack={prevStep} disableNext={!noOfPeople} />
    </div>
  );
};

export default StepRentersHousehold;
