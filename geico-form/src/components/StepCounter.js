import React from "react";

const StepCounter = ({ currentStep, totalSteps }) => (
  <p className="step-counter">
    Step {currentStep} of {totalSteps}
  </p>
);

export default StepCounter;
