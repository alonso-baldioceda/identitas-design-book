import React, { FC } from "react";
import { Link } from "react-scroll";
import { prefix, color } from "./../shared/styles.js";
import styled from "styled-components";
import classnames from "classnames";

// Styles
const StyledLinkScroll = styled((props) => <Link {...props} />)`
  color: ${color.body};
  cursor: pointer;

  &.active,
  &:hover,
  &:focus,
  &:visited {
    color: ${color.body};
  }
`;

// Interfaces
export interface LinkProps {
  classes?: string;
  duration?: number;
  offset?: number;
  onClick?: () => void;
  smooth?: boolean;
  spy?: boolean;
  text: string;
  to: string;
}

const LinkScroll: FC<LinkProps> = ({
  classes,
  duration,
  onClick,
  offset,
  smooth,
  spy,
  text,
  to,
}) => (
  <StyledLinkScroll
    duration={duration ? duration : 500}
    offset={offset ? offset : -80}
    smooth={smooth ? smooth : true}
    spy={spy ? spy : true}
    to={to}
    onClick={onClick ? onClick : () => {}}
    className={classnames({ [`${classes}`]: classes }, `${prefix}-link-scroll`)}
  >
    {text}
  </StyledLinkScroll>
);

export default LinkScroll;
