import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

interface ButtonProps {
  // appearance: string;
  classes?: string;
  disabled?: boolean;
  text: string;
  type?: "button" | "submit";
}

const Button: FC<ButtonProps> = ({
  // appearance,
  classes,
  disabled,
  text,
  type,
}) => (
  <button
    className={classnames(
      "btn",
      // { "bg-primary": !appearance },
      // { [`bg-${appearance}`]: appearance },
      { "mb-0 px-4 py-2": !classes },
      { [`${classes}`]: classes },
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
