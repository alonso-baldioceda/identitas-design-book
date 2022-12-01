import React, { FC, useContext } from "react";
import { Link } from "react-scroll";
import { prefix } from "./../shared/styles.js";

export interface LinkProps {
  // activeClass?: string;
  duration?: number;
  offset?: number;
  onClick?: () => void;
  smooth?: boolean;
  spy?: boolean;
  text: string;
  to: string;
}

const LinkScroll: FC<LinkProps> = ({
  // activeClass = "active",
  duration = 500,
  onClick,
  offset = -80,
  smooth = true,
  spy = true,
  text,
  to,
}) => (
  <Link
    // activeClass="active"
    duration={duration}
    offset={offset}
    smooth={smooth}
    spy={spy}
    to={to}
    className={`${prefix}-link-scroll`}
    onClick={onClick ? onClick : () => {}}
  >
    {text}
  </Link>
);

export default LinkScroll;
