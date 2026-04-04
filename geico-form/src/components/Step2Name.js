import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

const Step2Name = ({ nextStep, prevStep, updatePersonalData, personalFormData }) => {
  const [name, setName] = useState(personalFormData.name);

  const handleNext = () => {
    if (!name) return alert("Please enter your name");
    updatePersonalData({ name });
    nextStep();
  };

  return (
    <div className="step">
      <h2>What’s your full name?</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormNavigation onNext={handleNext} onBack={prevStep} disableNext={!name} />
    </div>
  );
};

export default Step2Name;
