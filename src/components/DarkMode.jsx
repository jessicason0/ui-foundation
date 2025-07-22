import React, { useState } from "react";

function DarkMode() {
  const [darkmode, setDarkmode] = useState(false);

  function handleClick() {
    setDarkmode((prev) => !prev);
  }

  return (
    <div className={`${darkmode ? "darkmode darkmode--active" : "darkmode"}`}>
      <div className="darkmode__bg"></div>
      <div className="darkmode__title">Dark Mode</div>
      <button onClick={handleClick}>
        <div className="darkmode__circle"></div>
      </button>
    </div>
  );
}

export default DarkMode;
