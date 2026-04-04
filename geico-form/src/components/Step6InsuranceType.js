import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

const Step6InsuranceType = ({ nextStep, prevStep, updatePersonalData, personalFormData }) => {
  const [type, setType] = useState(personalFormData.insuranceType);

  const handleNext = () => {
    if (!type) return alert("Please choose an insurance type");
    updatePersonalData({ insuranceType: type });
    nextStep();
  };

  return (
    <div className="step">
      <h2>What kind of insurance are you looking for?</h2>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Renters">Renters</option>
        <option value="Homeowners">Homeowners</option>
        <option value="Auto">Auto</option>
        <option value="Pet">Pet</option>
      </select>
      <FormNavigation onNext={handleNext} onBack={prevStep} disableNext={!type} />
    </div>
  );
};

export default Step6InsuranceType;
