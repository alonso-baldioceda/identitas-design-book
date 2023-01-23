import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../shared/styles.js";

interface ButtonProps {
  appearance: string;
  classes?: string;
  disabled?: boolean;
  text: string;
  type?: "button" | "submit";
}

const Button: FC<ButtonProps> = ({
  appearance,
  classes,
  disabled,
  text,
  type,
}) => (
  <button
    className={classnames(
      `btn btn-${appearance ? appearance : "primary"} text-capitalize`,
      `${classes ? classes : "mb-0 px-4 py-2"}`,
      { disabled: disabled },
      `${prefix}-button`
    )}
    type={type}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
