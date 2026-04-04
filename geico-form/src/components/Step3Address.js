import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

const Step3Address = ({ nextStep, prevStep, updatePersonalData, personalFormData }) => {
  const [address, setAddress] = useState(personalFormData.address);

  const handleNext = () => {
    if (!address) return alert("Please enter your address");
    updatePersonalData({ address });
    nextStep();
  };

  return (
    <div className="step">
      <h2>What’s your address?</h2>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <FormNavigation onNext={handleNext} onBack={prevStep} disableNext={!address} />
    </div>
  );
};

export default Step3Address;
