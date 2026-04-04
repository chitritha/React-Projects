import React from "react";

const FormNavigation = ({ onNext, onBack, disableNext }) => (
  <div className="form-navigation">
    <button onClick={onBack}>Back</button>
    <button onClick={onNext} disabled={disableNext}>
      Next
    </button>
  </div>
);

export default FormNavigation;
