import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  isGoogleSignIn,
  children,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} custom-button${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
