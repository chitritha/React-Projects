import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

const Step4Email = ({ nextStep, prevStep, updatePersonalData, personalFormData }) => {
  const [email, setEmail] = useState(personalFormData.email);

  const handleNext = () => {
    if (!email) return alert("Please enter your email");
    updatePersonalData({ email });
    nextStep();
  };

  return (
    <div className="step">
      <h2>What’s your email address?</h2>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormNavigation onNext={handleNext} onBack={prevStep} disableNext={!email} />
    </div>
  );
};

export default Step4Email;
