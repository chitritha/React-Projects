import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

const StepRentersPolicy = ({ nextStep, prevStep, updateRentersData, rentersFormData }) => {
  const [previousPolicy, setPreviousPolicy] = useState(rentersFormData.previousPolicy);

  const handleNext = () => {
    updateRentersData({ previousPolicy });
    nextStep();
  };

  return (
    <div className="step">
      <h2>Did you have a previous renters policy?</h2>
      <select value={previousPolicy} onChange={(e) => setPreviousPolicy(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <FormNavigation onNext={handleNext} onBack={prevStep} disableNext={!previousPolicy} />
    </div>
  );
};

export default StepRentersPolicy;
