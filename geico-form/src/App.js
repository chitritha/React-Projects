import React, { useState } from "react";
import "./App.css";

import StepCounter from "./components/StepCounter";
import FormNavigation from "./components/FormNavigation";

import Step1Account from "./components/Step1Account";
import Step2Name from "./components/Step2Name";
import Step3Address from "./components/Step3Address";
import Step4Email from "./components/Step4Email";
import Step5DOB from "./components/Step5DOB";
import Step6InsuranceType from "./components/Step6InsuranceType";

import StepRentersPolicy from "./components/StepRentersPolicy";
import StepRentersBuilding from "./components/StepRentersBuilding";
import StepRentersHousehold from "./components/StepRentersHousehold";
import StepReview from "./components/StepReview";

function App() {
  const [step, setStep] = useState(1);

  const [personalFormData, setPersonalFormData] = useState({
    hasAccount: "",
    insuranceType: "",
    name: "",
    address: "",
    email: "",
    dateOfBirth: ""
  });

  const [rentersFormData, setRentersFormData] = useState({
    previousPolicy: "",
    reason: "",
    buildingType: "",
    amenities: [],
    noOfPeople: "",
    valuables: ""
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updatePersonalData = (data) =>
    setPersonalFormData((prev) => ({ ...prev, ...data }));
  const updateRentersData = (data) =>
    setRentersFormData((prev) => ({ ...prev, ...data }));

  const commonProps = {
    nextStep,
    prevStep,
    personalFormData,
    rentersFormData,
    updatePersonalData,
    updateRentersData,
  };

  const steps = [
    { component: Step1Account },
    { component: Step2Name },
    { component: Step3Address },
    { component: Step4Email },
    { component: Step5DOB },
    { component: Step6InsuranceType },
    ...(personalFormData.insuranceType === "Renters"
      ? [
          { component: StepRentersPolicy },
          { component: StepRentersBuilding },
          { component: StepRentersHousehold },
        ]
      : []),
    { component: StepReview },
  ];

  const totalSteps = steps.length;
  const StepComponent = steps[step - 1]?.component;

  return (
    <div className="App">
      <h1>Insurance Application</h1>
      <StepCounter currentStep={step} totalSteps={totalSteps} />
      {StepComponent ? (
        <StepComponent {...commonProps} />
      ) : (
        <h2>All steps completed!</h2>
      )}
    </div>
  );
}

export default App;
