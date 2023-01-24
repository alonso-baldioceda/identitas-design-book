import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../shared/styles.js";

// TODO: Add hover and visited state
export interface ButtonLinkProps {
  appearance: string;
  classes?: string;
  disabled?: boolean;
  targetBlank: boolean;
  text: string;
  url: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({
  appearance,
  disabled,
  classes,
  targetBlank,
  text,
  url,
}) => (
  <a
    aria-disabled={disabled}
    href={url ? url : "#"}
    rel="noreferrer"
    role="button"
    target={targetBlank ? "_blank" : "_self"}
    className={classnames(
      `btn btn-${appearance ? appearance : "primary"} text-capitalize`,
      `${classes ? classes : "mb-0 px-4 py-2"}`,
      { disabled: disabled },
      `${prefix}-button-link`
    )}
  >
    {text}
  </a>
);

export default ButtonLink;
