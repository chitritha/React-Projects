import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

const Step5DOB = ({ nextStep, prevStep, updatePersonalData, personalFormData }) => {
  const [dob, setDob] = useState(personalFormData.dateOfBirth);

  const handleNext = () => {
    if (!dob) return alert("Please enter your date of birth");
    updatePersonalData({ dateOfBirth: dob });
    nextStep();
  };

  return (
    <div className="step">
      <h2>What’s your date of birth?</h2>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <FormNavigation onNext={handleNext} onBack={prevStep} disableNext={!dob} />
    </div>
  );
};

export default Step5DOB;
