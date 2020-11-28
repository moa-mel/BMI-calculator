import React from "react";

const TextInput = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="number"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default TextInput;