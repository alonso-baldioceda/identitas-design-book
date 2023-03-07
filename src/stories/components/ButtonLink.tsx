import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

export interface ButtonLinkProps {
  // appearance: string;
  classes?: string;
  disabled?: boolean;
  targetBlank: boolean;
  text: string;
  url: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({
  // appearance,
  classes,
  disabled,
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
      "btn",
      // { "bg-primary": !appearance },
      // { [`bg-${appearance}`]: appearance },
      { "mb-0 px-4 py-2": !classes },
      { [`${classes}`]: classes },
      { disabled: disabled },
      `${prefix}-button-link`
    )}
  >
    {text}
  </a>
);

export default ButtonLink;
