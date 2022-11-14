import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../shared/styles.js";

interface ButtonLinkProps {
  appearance: string;
  bold?: boolean;
  text: string;
  disabled?: boolean;
  mb?: number;
  px?: number;
  py?: number;
  rounded?: boolean;
  targetBlank: boolean;
  url: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({
  appearance = "primary",
  bold = true,
  disabled = false,
  mb = 0,
  px = 4,
  py = 2,
  rounded = true,
  targetBlank = false,
  text = "click me!!",
  url = "#",
}) => (
  <a
    aria-disabled={disabled}
    href={url}
    rel="noreferrer"
    role="button"
    target={targetBlank ? "_blank" : ""}
    className={classnames(
      `btn btn-${appearance} py-${py} px-${px} mb-${mb} text-capitalize ${prefix}-button-link ${
        disabled && "disabled"
      }`,
      { "rounded-pill": rounded },
      { "fw-bold": bold }
    )}
  >
    {text}
  </a>
);

export default ButtonLink;
