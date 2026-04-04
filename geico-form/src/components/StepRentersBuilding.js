import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

const StepRentersBuilding = ({ nextStep, prevStep, updateRentersData, rentersFormData }) => {
  const [buildingType, setBuildingType] = useState(rentersFormData.buildingType);

  const handleNext = () => {
    updateRentersData({ buildingType });
    nextStep();
  };

  return (
    <div className="step">
      <h2>What type of building do you live in?</h2>
      <select value={buildingType} onChange={(e) => setBuildingType(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Apartment">Apartment</option>
        <option value="Condo">Condo</option>
        <option value="Townhouse">Townhouse</option>
        <option value="Single Family">Single Family</option>
      </select>
      <FormNavigation onNext={handleNext} onBack={prevStep} disableNext={!buildingType} />
    </div>
  );
};

export default StepRentersBuilding;
