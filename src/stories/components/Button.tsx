import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../shared/styles.js";

interface ButtonProps {
  appearance: string;
  bold?: boolean;
  classes?: string;
  disabled?: boolean;
  rounded?: boolean;
  text: string;
  type?: "button" | "submit";
}

const Button: FC<ButtonProps> = ({
  appearance,
  bold,
  classes,
  disabled,
  rounded,
  text,
  type,
}) => (
  <button
    className={classnames(
      `btn btn-${appearance ? appearance : "primary"} text-capitalize`,
      { "rounded-pill": rounded },
      { "fw-bold": bold },
      { "mb-0 px-4 py-2 ": !classes },
      { classes: classes },
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
