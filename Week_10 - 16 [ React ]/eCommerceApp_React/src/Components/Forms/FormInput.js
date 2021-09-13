import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input className="formInput" onChange={handleChange} {...otherProps} />

    </div>
  );
};

export default FormInput;
