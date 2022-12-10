import React, { FC } from "react";
import { Link } from "react-scroll";
import { prefix } from "./../shared/styles.js";
import styled from "styled-components";

// Styles
const StyledLinkScroll = styled((props) => <Link {...props} />)`
  color: ${(props) => props.theme.colors.body};
  cursor: pointer;

  &.active,
  &:hover,
  &:focus,
  &:visited {
    color: ${(props) => props.theme.colors.body};
  }
`;

// Interfaces
export interface LinkProps {
  duration?: number;
  offset?: number;
  onClick?: () => void;
  smooth?: boolean;
  spy?: boolean;
  text: string;
  to: string;
}

const LinkScroll: FC<LinkProps> = ({
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
    className={`${prefix}-link-scroll`}
    onClick={onClick ? onClick : () => {}}
  >
    {text}
  </StyledLinkScroll>
);

export default LinkScroll;
