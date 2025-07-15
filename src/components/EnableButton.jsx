import React, { useState } from "react";

function EnableButton() {
  const [hasAgreed, setHasAgreed] = useState(false);

  function handleChange(e) {
    setHasAgreed(e.target.checked);
  }

  function handleSubmit() {
    alert("You have submitted the form :)");
  }

  return (
    <div className="enable-btn">
      <label>
        <input onChange={(e) => handleChange(e)} type="checkbox" /> Agree to the
        Terms & Conditions
      </label>
      <button disabled={!hasAgreed} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default EnableButton;
