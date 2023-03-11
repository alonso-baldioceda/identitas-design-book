import React, { FC } from "react";
import { Link } from "react-scroll";
import { prefix } from "./../../shared/styles";
import classnames from "classnames";

// Interfaces
export interface LinkProps {
  // appearance: string;
  classes?: string;
  duration?: number;
  offset?: number;
  smooth?: boolean;
  spy?: boolean;
  text: string;
  to: string;
}

const LinkScroll: FC<LinkProps> = ({
  // appearance,
  classes,
  duration,
  offset,
  smooth,
  spy,
  text,
  to,
}) => (
  <Link
    duration={duration ? duration : 500}
    offset={offset ? offset : -80}
    smooth={smooth ? smooth : true}
    spy={spy ? spy : true}
    to={to}
    className={classnames(
      { [`${classes}`]: classes },
      // { "bg-primary": !appearance },
      // { [`bg-${appearance}`]: appearance },
      `${prefix}-link-scroll`
    )}
  >
    {text}
  </Link>
);

export default LinkScroll;
