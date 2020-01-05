import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {/*will allways have the classname:form-input-label. but will also add the "shrink" property, when the user has typed anything */}
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
