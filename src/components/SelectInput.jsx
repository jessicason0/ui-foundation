import React, { useRef, useState } from "react";

let id = 0;

function SelectInput() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  function handleClick() {
    inputRef.current.focus();
    if (value.trim() === "") return;
    setItems((prev) => [...prev, { id: ++id, value: value }]);
    setValue("");
  }

  function handleDeleteItem(item) {
    // using findIndex is efficient when there is large data
    // const index = items.findIndex((i) => i.id === item.id);
    // setItems((prev) => prev.filter((_, idx) => idx !== index));
    setItems((prev) => prev.filter((obj) => obj.id !== item.id));
  }

  function handleReset() {
    setItems([]);
  }

  return (
    <div className="select-input">
      <div className="select-input__interaction">
        <input
          ref={inputRef}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value}
        />
        <button onClick={handleClick}>Enter</button>
      </div>
      {items.length !== 0 && (
        <div className="select-input__content">
          <>
            {items.map((item, idx) => {
              return (
                <div key={item.id} className="select-input__card">
                  <span>
                    {item.value.length > 15
                      ? item.value.slice(0, 12) + "..."
                      : item.value}
                  </span>
                  <button onClick={() => handleDeleteItem(item)}>x</button>
                </div>
              );
            })}
            <div className="select-input__reset">
              <button onClick={handleReset}>Clear</button>
            </div>
          </>
        </div>
      )}
    </div>
  );
}

export default SelectInput;
