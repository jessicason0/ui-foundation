import React from "react";

// Wrapper Component OR Container Component
function Parent({ children, heading }) {
  return (
    <div className="component">
      <h2>{heading}</h2>
      {children}
    </div>
  );
}

export default Parent;
