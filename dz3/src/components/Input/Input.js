import React from "react";

function Input({ name, placeholder, inputValue, onChange }) {
  return (
    <>
      <input
        value={inputValue}
        placeholder={placeholder}
        type="text"
        name={name}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </>
  );
}

export default Input;
