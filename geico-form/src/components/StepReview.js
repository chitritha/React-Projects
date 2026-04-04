import React from "react";

const StepReview = ({ personalFormData, rentersFormData }) => (
  <div className="step">
    <h2>Review Your Details</h2>
    <pre>{JSON.stringify({ personalFormData, rentersFormData }, null, 2)}</pre>
  </div>
);

export default StepReview;
