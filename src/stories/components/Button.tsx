import React, { FC } from "react";
import classnames from "classnames";

interface ButtonProps {
  appearance: string;
  text: string;
  disabled?: boolean;
  bold?: boolean;
  mb?: number;
  px?: number;
  py?: number;
  rounded?: boolean;
  type?: "button" | "submit";
}

const Button: FC<ButtonProps> = ({
  appearance = "primary",
  bold = true,
  disabled = false,
  mb = 0,
  px = 4,
  py = 2,
  rounded = true,
  text = "click me!!",
  type = "button",
}) => (
  <button
    className={classnames(
      `btn btn-${appearance} py-${py} px-${px} mb-${mb} text-capitalize`,
      { "rounded-pill": rounded },
      { "fw-bold": bold }
    )}
    type={type}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
