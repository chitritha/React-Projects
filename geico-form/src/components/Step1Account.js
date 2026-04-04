import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

const Step1Account = ({ nextStep, updatePersonalData }) => {
  const [hasAccount, setHasAccount] = useState("");

  const handleNext = () => {
    if (!hasAccount) return alert("Please select an option");
    updatePersonalData({ hasAccount });
    nextStep();
  };

  return (
    <div className="step">
      <h2>Do you already have an account?</h2>
      <label>
        <input
          type="radio"
          value="Yes"
          checked={hasAccount === "Yes"}
          onChange={(e) => setHasAccount(e.target.value)}
        />{" "}
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="No"
          checked={hasAccount === "No"}
          onChange={(e) => setHasAccount(e.target.value)}
        />{" "}
        No
      </label>

      <FormNavigation onNext={handleNext} disableNext={!hasAccount} />
    </div>
  );
};

export default Step1Account;
